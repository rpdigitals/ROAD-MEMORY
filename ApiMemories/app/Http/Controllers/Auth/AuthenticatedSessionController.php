<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
        $user = User::where('email', $request->email)->first();
        if ($user->customer()) {
            return
                response()->Json([
                    'success_looged_in' => true,
                    'customer_id' => $user->customer()->id,
                ]);
        } else {
            if ($user->partner()) {
                return
                    response()->Json([
                        'success_looged_in' => true,
                        'partner_id' => $user->partner()->id,
                    ]);
            }

            return response()->Json([
                'success' => true,
                'user_id' => $user->id,
            ]);
        }
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
