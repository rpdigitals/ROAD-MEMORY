<?php

namespace App\Models;

use App\Models\Hotel\HotelReview;
use App\Models\Hotel\HotelBooking;
use App\Models\Hotel\hotelWishList;
use App\Models\Resto\RestoReview;
use App\Models\Resto\RestoBooking;
use App\Models\Resto\RestoWishList;
use App\Models\Tour\TourReview;
use App\Models\Tour\TourBooking;
use App\Models\Tour\TourWishList;
use App\Models\Car\CarReview;
use App\Models\Car\CarBooking;
use App\Models\Car\CarWishList;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Http\Resources\HotelBooking as HotelBookingResource;
use App\Http\Resources\RestoBooking as RestoBookingResource;
use App\Http\Resources\TourBooking as TourBookingResource;

use App\Http\Resources\HotelWishList as HotelWishListResource;
use App\Http\Resources\RestoWishList as RestoWishListResource;
use App\Http\Resources\TourWishList as TourWishListResource;
use App\Http\Resources\CarWishList as CarWishListResource;

use App\Http\Resources\HotelReview as HotelReviewResource;
use App\Http\Resources\RestoReview as RestoReviewResource;
use App\Http\Resources\TourReview as TourReviewResource;

class Customer extends Model {
    use HasFactory;
    protected $fillable = [ 'name', 'user_id', 'type', 'status', 'telephone' ];

    public function user() {
        return $this->belongsTo( User::class );
    }

    public function hotelBooking() {
        return HotelBookingResource::collection( $this->hasMany( HotelBooking::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function hotelReview() {
        return HotelReviewResource::collection( $this->hasMany( HotelReview::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function hotelWishList() {
        return HotelWishListResource::collection( $this->hasMany( hotelWishList::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function restoBooking() {
        return RestoBookingResource::collection( $this->hasMany( RestoBooking::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function restoReview() {

        return HotelReviewResource::collection( $this->hasMany( RestoReview::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function restoWishList() {
        return RestoWishListResource::collection( $this->hasMany( RestoWishList::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function tourBooking() {
        return TourBookingResource::collection( $this->hasMany( TourBooking::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function tourReview() {
        return HotelReviewResource::collection( $this->hasMany( TourReview::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function tourWishList() {
        return TourWishListResource::collection( $this->hasMany( TourWishList::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function carWishList() {
        return CarWishListResource::collection( $this->hasMany( CarWishList::class )
        ->orderBy( 'created_at', 'DESC' )
        ->get() );
    }

    public function allBooking() {

        $hotelBookings = $this->hotelBooking();
        $restoBookings = $this->restoBooking();
        $tourBookings = $this->tourBooking();

        return $data = [
            'hotel_bookings' => $hotelBookings,
            'resto_bookings'=> $restoBookings,
            'tour_bookings'=> $tourBookings,

        ];
    }

    public function allReview() {

        $hotelReviews = $this->hotelReview();
        $restoReviews = $this->restoReview();
        $tourReviews = $this->tourReview();

        return $data = [
            'hotel_reviews'=> $hotelReviews,
            'resto_reviews'=> $restoReviews,
            'tour_reviews'=> $tourReviews,
        ];
    }

    public function allWishList() {

        $hotelWishList = $this->hotelWishList();
        $restoWishList = $this->restoWishList();
        $tourWishList = $this->tourWishList();
        $carWishList = $this->carWishList();

        return $data = [
            'hotel_wish_list' => $hotelWishList,
            'resto_wishlist'=> $restoWishList,
            'tour_wish_list'=> $tourWishList,
            'car_wish_ist'=> $carWishList,
        ];
    }

}
