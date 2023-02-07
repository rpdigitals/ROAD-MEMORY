<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Tour\TourController;

Route::post( '/create-tour', [ TourController::class, 'createTour' ] );
Route::post( '/update-tour/{id}', [ TourController::class, 'updateTour' ] );
Route::get( '/delete-tour/{id}', [ TourController::class, 'deleteTour' ] );
Route::get( '/all-tour', [ TourController::class, 'allTour' ] );

Route::post( '/create-tour-caracteristic', [ TourController::class, 'createTourCaracteristic' ] );
Route::post( '/update-tour-caracteristic/{id}', [ TourController::class, 'updateTourCaracteristic' ] );

Route::post( '/create-tour-news', [ TourController::class, 'createTourNews' ] );
Route::post( '/update-tour-news/{id}', [ TourController::class, 'updateTourNews' ] );
Route::get( '/delete-tour-news/{id}', [ TourController::class, 'deleteTourNews' ] );
Route::get( '/all-tour-news', [ TourController::class, 'allTourNews' ] );

Route::post( '/create-trek', [ TourController::class, 'createTrek' ] );
Route::post( '/update-trek/{id}', [ TourController::class, 'updateTrek' ] );
Route::get( '/delete-trek/{id}', [ TourController::class, 'deleteTrek' ] );
Route::get( '/all-trek', [ TourController::class, 'allTrek' ] );

Route::get( '/tour-of-category/{id}', [ TourController::class, 'tourOfCategory' ] );
Route::get( '/tour-detail/{id}', [ TourController::class, 'tourDetail' ] );

Route::get( '/search-tour', [ TourController::class, 'searchTour' ] );
Route::get( '/sort-tour-by-price/{sortOrder}', [ TourController::class, 'sortTourbyPrice' ] );

