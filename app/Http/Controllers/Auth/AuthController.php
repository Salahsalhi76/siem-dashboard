<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{

    use AuthenticatesUsers;

    public function redirectPath(): string
    {
        return '/';
    }

    public function showLoginForm(): Response
    {
        return Inertia::render('Auth/Login');
    }



    public function sendOtpVerification()
    {

    }

    /*

     public function login(LoginRequest $request)
     {
         $data = $request->validated();


         if (Auth::attempt($data)) {
             $request->session()->regenerate();

             return Inertia::render('Dashboard/Index');
         }

         return back()->withErrors([
             'error' => 'Login Failed',
         ]);

     }


      public function logout(Request $request)
     {
         Auth::logout();
         return Inertia::render('Auth/Login');
     }
     */



}
