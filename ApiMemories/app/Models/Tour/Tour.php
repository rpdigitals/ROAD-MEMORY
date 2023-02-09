<?php

namespace App\Models\Tour;
use App\Http\Resources\TourReview as TourReviewResource;
use App\Http\Resources\TourBooking as TourBookingResource;
use App\Models\Partner;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Http\Resources\Tour as TourResource;
use App\Http\Resources\Resto as RestoResource;
use App\Http\Resources\Hotel as HotelResource;

class Tour extends Model {
    use HasFactory;
    protected $fillable = [
        'name',
        'picture',
        'price',
        'description',
        'address',
        'visit_hour',
        'latitude',
        'longitude',
        'languages',
        'disponibility',
        'open_days_hours',
        'status',
        'partner_id',
        'tour_category_id',
    ];

    public function caracteristic() {
        return $this->hasOne( TourCaracteristic::class, 'tour_id' )->first();
    }

    public function news() {
        return $this->hasMany( TourNews::class )->get();
    }

    public function booking() {
        return $this->hasMany( TourBooking::class )->get();
    }

    public function bookingWithPartner() {

          return TourBookingResource::collection( $this->booking() );
    }

    public function review() {

        return TourReviewResource::collection( $this->hasMany( TourReview::class )->get() );
    }

    public function wishList() {
        return $this->hasMany( TourWishList::class )->get();
    }

    public function category() {
        return TourCategory::where( 'id', $this->tour_category_id )->first();
        // return $this->hasOne( TourCategory::class, 'tour_category_id' );
    }

    public function partner() {
        return $this->belongsTo( Partner::class )->first();
    }

    public function note() {
        //return the average note of rating of the tour
        $reviews = $this->review();
        if ( $reviews->count() > 0 ) {
            $numberOfRating = $this->review()->count();
            $sumOfRating = 0;
            foreach ( $reviews as $review ) {
                $sumOfRating += $review->rating;
            }
            $note = $sumOfRating/$numberOfRating;
            $note = round( $note, 2 );
        } else {
            $note = 0;
        }
        return $note;

    }

    public function this() {
        return $this->first();
    }
}
