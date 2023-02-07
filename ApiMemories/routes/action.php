<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\Car\CarActionController;
use App\Http\Controllers\Tour\TourActionController;
use App\Http\Controllers\Hotel\HotelActionController;
use App\Http\Controllers\Resto\RestoActionController;
// Tour Action Routes
// Tour Action Routes
// Tour Action Routes

Route::post( '/create-tour-booking', [ TourActionController::class, 'createTourBooking' ] );
Route::post( '/update-tour-booking/{id}', [ TourActionController::class, 'updateTourBooking' ] );
Route::get( '/delete-tour-booking/{id}', [ TourActionController::class, 'deleteTourBooking' ] );
Route::get( '/all-tour-booking/{id}', [ TourActionController::class, 'allTourBooking' ] );
Route::get( '/all-tour-booking-partner/{id}', [ TourActionController::class, 'allTourBookingPartner' ] );
Route::get( '/accept-tour-booking/{id}', [ TourActionController::class, 'acceptTourBooking' ] );
Route::get( '/reject-tour-booking/{id}', [ TourActionController::class, 'rejectTourBooking' ] );

Route::post( '/create-tour-wish-list', [ TourActionController::class, 'createTourWishList' ] );
Route::post( '/update-tour-wish-list/{id}', [ TourActionController::class, 'updateTourWishList' ] );
Route::get( '/delete-tour-wish-list/{id}', [ TourActionController::class, 'deleteTourWishList' ] );
Route::get( '/all-tour-wish-list/{id}', [ TourActionController::class, 'allTourWishList' ] );
Route::get( '/customer/{customer_id}/has-wished-tour/{tour_id}', [ TourActionController::class, 'hasWished' ] );

Route::post( '/create-tour-review', [ TourActionController::class, 'createTourReview' ] );
Route::post( '/update-tour-review/{id}', [ TourActionController::class, 'updateTourReview' ] );
Route::get( '/delete-tour-review/{id}', [ TourActionController::class, 'deleteTourReview' ] );
Route::get( '/all-tour-review/{id}', [ TourActionController::class, 'allTourReview' ] );

/**
* Hotel Action Routes
* Hotel Action Routes
* Hotel Action Routes
*/
Route::post( '/create-hotel-booking', [ HotelActionController::class, 'createHotelBooking' ] );
Route::post( '/update-hotel-booking/{id}', [ HotelActionController::class, 'updateHotelBooking' ] );
Route::get( '/delete-hotel-booking/{id}', [ HotelActionController::class, 'deleteHotelBooking' ] );
Route::get( '/all-hotel-booking/{id}', [ HotelActionController::class, 'allHotelBooking' ] );
Route::get( '/all-hotel-booking-partner/{id}', [ HotelActionController::class, 'allHotelBookingPartner' ] );
Route::get( '/accept-hotel-booking/{id}', [ HotelActionController::class, 'acceptHotelBooking' ] );
Route::get( '/reject-hotel-booking/{id}', [ HotelActionController::class, 'rejectHotelBooking' ] );

Route::post( '/create-hotel-wish-list', [ HotelActionController::class, 'createHotelWishList' ] );
Route::post( '/update-hotel-wish-list/{id}', [ HotelActionController::class, 'updateHotelWishList' ] );
Route::get( '/delete-hotel-wish-list/{id}', [ HotelActionController::class, 'deleteHotelWishList' ] );
Route::get( '/all-hotel-wish-list/{id}', [ HotelActionController::class, 'allHotelWishList' ] );

Route::post( '/create-hotel-review', [ HotelActionController::class, 'createHotelReview' ] );
Route::post( '/update-hotel-review/{id}', [ HotelActionController::class, 'updateHotelReview' ] );
Route::get( '/delete-hotel-review/{id}', [ HotelActionController::class, 'deleteHotelReview' ] );
Route::get( '/all-hotel-review/{id}', [ HotelActionController::class, 'allHotelReview' ] );

/**
* Resto Action Routes
* Resto Action Routes
* Resto Action Routes
*/
Route::post( '/create-resto-booking', [ RestoActionController::class, 'createRestoBooking' ] );
Route::post( '/update-resto-booking/{id}', [ RestoActionController::class, 'updateRestoBooking' ] );
Route::get( '/delete-resto-booking/{id}', [ RestoActionController::class, 'deleteRestoBooking' ] );
Route::get( '/all-resto-booking/{id}', [ RestoActionController::class, 'allRestoBooking' ] );
Route::get( '/all-resto-booking-partner/{id}', [ RestoActionController::class, 'allRestoBookingPartner' ] );
Route::get( '/accept-resto-booking/{id}', [ RestoActionController::class, 'acceptRestoBooking' ] );
Route::get( '/reject-resto-booking/{id}', [ RestoActionController::class, 'rejectRestoBooking' ] );

Route::post( '/create-resto-wish-list', [ RestoActionController::class, 'createRestoWishList' ] );
Route::post( '/update-resto-wish-list/{id}', [ RestoActionController::class, 'updateRestoWishList' ] );
Route::get( '/delete-resto-wish-list/{id}', [ RestoActionController::class, 'deleteRestoWishList' ] );
Route::get( '/all-resto-wish-list/{id}', [ RestoActionController::class, 'allRestoWishList' ] );

Route::post( '/create-resto-review', [ RestoActionController::class, 'createRestoReview' ] );
Route::post( '/update-resto-review/{id}', [ RestoActionController::class, 'updateRestoReview' ] );
Route::get( '/delete-resto-review/{id}', [ RestoActionController::class, 'deleteRestoReview' ] );
Route::get( '/all-resto-review/{id}', [ RestoActionController::class, 'allRestoReview' ] );

/**
* Car Action Routes
* Car Action Routes
* Car Action Routes
*/
Route::post( '/create-car-booking', [ CarActionController::class, 'createCarBooking' ] );
Route::post( '/update-car-booking/{id}', [ CarActionController::class, 'updateCarBooking' ] );
Route::get( '/delete-car-booking/{id}', [ CarActionController::class, 'deleteCarBooking' ] );
Route::get( '/all-car-booking/{id}', [ CarActionController::class, 'allCarBooking' ] );

Route::post( '/create-car-wish-list', [ CarActionController::class, 'createCarWishList' ] );
Route::post( '/update-car-wish-list/{id}', [ CarActionController::class, 'updateCarWishList' ] );
Route::get( '/delete-car-wish-list/{id}', [ CarActionController::class, 'deleteCarWishList' ] );
Route::get( '/all-car-wish-list/{id}', [ CarActionController::class, 'allCarWishList' ] );

Route::post( '/create-car-review', [ CarActionController::class, 'createCarReview' ] );
Route::post( '/update-car-review/{id}', [ CarActionController::class, 'updateCarReview' ] );
Route::get( '/delete-car-review/{id}', [ CarActionController::class, 'deleteCarReview' ] );
Route::get( '/all-car-review/{id}', [ CarActionController::class, 'allCarReview' ] );
/**
*
**/
Route::get( '/customer-all-booking/{id}', [ GeneralController::class, 'customerAllBooking' ] );
Route::get( '/customer-all-review/{id}', [ GeneralController::class, 'customerAllReview' ] );
Route::get( '/customer-all-wish-list/{id}', [ GeneralController::class, 'customerAllWishList' ] );

Route::get( '/partner-all-booking/{id}', [ GeneralController::class, 'partnerAllBooking' ] );
Route::get( '/partner-all-review/{id}', [ GeneralController::class, 'partnerAllReview' ] );
Route::get( '/partner-all-service/{id}', [ GeneralController::class, 'partnerAllService' ] );
