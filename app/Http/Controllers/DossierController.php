<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DossierController extends Controller
{
    public function index()
    {

        return Inertia::render('Dashboard/Dossier/Index');
    }
}
