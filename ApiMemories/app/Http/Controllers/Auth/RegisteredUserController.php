<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use App\Models\Util;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'min:8'],
        ]);
        $util = new Util();
        if ($request->telephone) {
            $isCorrectTel = $util->isCorrectTelephone($request->telephone);

            if ($isCorrectTel) {
                $user = User::create([
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]);
                if ($request->name) {
                }
                $customer = Customer::create([
                    'name' => $request->name,
                    'user_id' => $user->id,
                    'telephone' => $request->telephone,
                ]);

                return response()->Json([
                    'success' => true,
                    'customer_id' => $customer->id,
                ]);

                event(new Registered($user));

                Auth::login($user);
            } else {
                return response()->Json([
                    'success' => false,
                ]);
            }
        } else {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return response()->Json([
                'success' => true,
                'user_id' => $user->id,
            ]);
        }
    }
}
