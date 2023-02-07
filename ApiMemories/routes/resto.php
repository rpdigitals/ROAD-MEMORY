<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Resto\RestoController;

Route::post( '/create-resto', [ RestoController::class, 'createResto' ] );
Route::post( '/update-resto/{id}', [ RestoController::class, 'updateResto' ] );
Route::get( '/delete-resto/{id}', [ RestoController::class, 'deleteResto' ] );
Route::get( '/all-resto', [ RestoController::class, 'allresto' ] );

Route::post( '/create-resto-caracteristic', [ RestoController::class, 'createRestoCaracteristic' ] );
Route::post( '/update-resto-caracteristic/{id}', [ RestoController::class, 'updateRestoCaracteristic' ] );

Route::post( '/create-resto-news', [ RestoController::class, 'createRestoNews' ] );
Route::post( '/update-resto-news/{id}', [ RestoController::class, 'updateRestoNews' ] );
Route::get( '/delete-resto-news/{id}', [ RestoController::class, 'deleteRestoNews' ] );
Route::get( '/all-resto-news', [ RestoController::class, 'allRestoNews' ] );

Route::post( '/create-resto-category', [ RestoController::class, 'createRestoCategory' ] );
Route::post( '/update-resto-category/{id}', [ RestoController::class, 'updateRestoCategory' ] );
Route::get( '/delete-resto-category/{id}', [ RestoController::class, 'deleteRestoCategory' ] );
Route::get( '/all-resto-category', [ RestoController::class, 'allRestoCategory' ] );
Route::get( '/resto-category/{id}', [ RestoController::class, 'restoOfCategory' ] );

Route::get( '/resto-detail/{id}', [ RestoController::class, 'RestoDetail' ] );

Route::get( '/search-resto', [ RestoController::class, 'searchResto' ] );
Route::get( '/sort-resto-by-table-price/{order}', [ RestoController::class, 'sortRestobyTablePrice' ] );

