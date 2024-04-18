<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\ForgetPasswordRequest;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;

class ForgetPasswordController
{

    public function showForgotPasswordForm(): Response
    {
        return Inertia::render('Auth/ForgotPassword');
    }


    public function sendVerificationUrl(ForgetPasswordRequest $request)
    {
        // Flash message to inform the user
        Session::flash('success', 'Verification URL has been sent successfully.');

    }

}
