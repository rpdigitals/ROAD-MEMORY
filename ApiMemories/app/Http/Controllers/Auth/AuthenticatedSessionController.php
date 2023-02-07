<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller {
    /**
    * Handle an incoming authentication request.
    *
    * @param  \App\Http\Requests\Auth\LoginRequest  $request
    * @return \Illuminate\Http\Response
    */

    public function store( LoginRequest $request ) {
        $request->authenticate();
        $request->session()->regenerate();
        $user = User::where( 'email', $request->email )->first();
        return $user->customer()->id;

    }

    /**
    * Destroy an authenticated session.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */

    public function destroy( Request $request ) {
        Auth::guard( 'web' )->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
