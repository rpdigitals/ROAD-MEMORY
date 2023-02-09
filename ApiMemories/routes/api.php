<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GeneralController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create-partner',[GeneralController::class,'createPartner']);
Route::post('/update-partner/{id}',[GeneralController::class,'updatePartner']);
Route::get('/delete-partner/{id}',[GeneralController::class,'deletePartner']);
Route::get('/all-partner',[GeneralController::class,'allPartner']);


Route::post('/create-customer',[GeneralController::class,'createCustomer']);
Route::post('/update-customer/{id}',[GeneralController::class,'updateCustomer']);
Route::get('/delete-customer/{id}',[GeneralController::class,'deleteCustomer']);
Route::get('/all-customer',[GeneralController::class,'allCustomer']);

Route::post('/create-notification',[GeneralController::class,'createNotification']);
Route::get('/delete-notification/{id}',[GeneralController::class,'deleteNotification']);
Route::get('/all-notification/{id}',[GeneralController::class,'allNotification']);

Route::post('/create-substype',[GeneralController::class,'createSubstype']);
Route::post('/update-substype/{id}',[GeneralController::class,'updateSubstype']);
Route::get('/delete-substype/{id}',[GeneralController::class,'deleteSubstype']);
Route::get('/all-substype',[GeneralController::class,'allSubstype']);

Route::post('/create-subscription',[GeneralController::class,'createSubscription']);
Route::post('/update-subscription/{id}',[GeneralController::class,'updateSubscription']);
Route::get('/delete-subscription/{id}',[GeneralController::class,'deleteSubscription']);
Route::get('/all-subscription',[GeneralController::class,'allSubscription']);

Route::get('/number-of-service-partner/{id}',[GeneralController::class,'numberOfService']);
Route::get('/number-of-booking-partner/{id}',[GeneralController::class,'numberOfBooking']);












require __DIR__.'/auth.php';
require __DIR__.'/car.php';
require __DIR__.'/hotel.php';
require __DIR__.'/admin.php';
require __DIR__.'/tour.php';
require __DIR__.'/resto.php';
require __DIR__.'/action.php';
