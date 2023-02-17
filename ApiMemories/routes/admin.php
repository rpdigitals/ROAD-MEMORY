<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::post( '/create-tour-category', [ AdminController::class, 'createTourCategory' ] );
Route::post( '/update-tour-category/{id}', [ AdminController::class, 'updateTourCategory' ] );
Route::get( '/delete-tour-category/{id}', [ AdminController::class, 'deleteTourCategory' ] );
Route::get( '/all-tour-category', [ AdminController::class, 'allTourCategory' ] );
Route::get( '/deletetest', [ AdminController::class, 'deletetest' ] );