<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DossierController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;


Route::middleware('guest')->group(function () {
    Route::get('login')->name('auth.login.show')->uses([AuthController::class, 'showLoginForm']);
    Route::get('forgot-password')->name('auth.forgot.show')->uses([ForgetPasswordController::class, 'showForgotPasswordForm']);
    // Route::get('forget-password')->name('auth.forget-password.show')->uses([AuthController::class, 'showRegisterForm']);
    Route::post('login')->name('auth.login')->uses([AuthController::class, 'login']);
    Route::post('forgot-password')->name('auth.forgot')->uses([ForgetPasswordController::class, 'sendVerificationUrl']);
});


Route::middleware('auth')->group(function () {
    Route::get('/',)->name('dashboard')->uses(DashboardController::class);
    Route::post('logout')->name('auth.logout')->uses([AuthController::class, 'logout']);


    Route::prefix('config')->group(function () {
        Route::resource('users',UsersController::class);
        Route::get('base', [BaseController::class, 'index']);
    });

        Route::get('dossier', [DossierController::class, 'index']);
});

