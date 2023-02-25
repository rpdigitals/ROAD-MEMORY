<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Hotel\HotelController;

Route::post( '/create-hotel', [ HotelController::class, 'createHotel' ] );
Route::post( '/update-hotel/{id}', [ HotelController::class, 'updateHotel' ] );
Route::get( '/delete-hotel/{id}', [ HotelController::class, 'deleteHotel' ] );
Route::get( '/all-hotel', [ HotelController::class, 'allHotel' ] );

Route::post( '/create-hotel-caracteristic', [ HotelController::class, 'createHotelCaracteristic' ] );
Route::post( '/update-hotel-caracteristic/{id}', [ HotelController::class, 'updateHotelCaracteristic' ] );
Route::get( '/hotel-caracteristic/{id}', [ HotelController::class, 'hotelCaracteristic' ] );


Route::post( '/create-room-category', [ HotelController::class, 'createRoomCategory' ] );
Route::post( '/update-room-category/{id}', [ HotelController::class, 'updateRoomCategory' ] );
Route::get( '/delete-room-category/{id}', [ HotelController::class, 'deleteRoomCategory' ] );
Route::get( '/all-room-category/{id}', [ HotelController::class, 'allRoomCategory' ] );
Route::get( '/single-room/{id}', [ HotelController::class, 'singleRoom' ] );

Route::post( '/create-room', [ HotelController::class, 'createRoom' ] );
Route::post( '/update-room/{id}', [ HotelController::class, 'updateRoom' ] );
Route::get( '/delete-room/{id}', [ HotelController::class, 'deleteRoom' ] );
Route::get( '/all-room/{id}', [ HotelController::class, 'allRoom' ] );

Route::get( '/hotel-detail/{id}', [ HotelController::class, 'hotelDetail' ] );

Route::get( '/search-hotel', [ HotelController::class, 'searchHotel' ] );
Route::get( '/sort-hotel-by-price/{sortOrder}', [ HotelController::class, 'sortHotelbyPrice' ] );

Route::get( '/all-hotel-of-partner/{id}', [ HotelController::class, 'allHotelOfPartner' ] );
