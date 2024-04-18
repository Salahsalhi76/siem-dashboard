<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Auth\Middleware\Authenticate as AuthenticateMiddleware;

class Authenticate extends AuthenticateMiddleware
{


    protected function redirectTo(Request $request)
    {
        if (!$request->expectsJson()) {
            return route('auth.login.show');
        }
    }
}
