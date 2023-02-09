<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Car\CarController;

Route::post( '/create-car', [ CarController::class, 'createCar' ] );
Route::post( '/update-car/{id}', [ CarController::class, 'updateCar' ] );
Route::get( '/delete-car/{id}', [ CarController::class, 'deleteCar' ] );
Route::get( '/all-car', [ CarController::class, 'allCar' ] );
Route::get( '/car-details/{id}', [ CarController::class, 'carDetails' ] );

Route::get( '/search-car/{keyword}', [ CarController::class, 'searchCar' ] );
Route::get( '/sort-car-by-price/{order}', [ CarController::class, 'sortCarbyPrice' ] );

Route::get( '/all-car-of-partner/{id}', [ CarController::class, 'allCarOfPartner' ] );
