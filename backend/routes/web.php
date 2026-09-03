<?php

use Illuminate\Support\Facades\Route;

// This is an API-only backend; the SPA lives in the separate frontend/
// project. See routes/api.php for the actual application routes.
Route::get('/', function () {
    return response()->json(['message' => 'Laravel API backend running.']);
});
