<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends  Controller
{
    public function __invoke()
    {

       return redirect('/config/users');
       // return Inertia::render('Dashboard/Config/Users/Index');

    }
}
