<?php

namespace App\Models\Resto;

use App\Models\Partner;
use App\Models\Customer ;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Http\Resources\RestoBooking as RestoBookingResource;

class Resto extends Model {
    use HasFactory;
    protected $fillable = [
        'name',
        'picture',
        'description',
        'latitude',
        'longitude',
        'address',
        'disponibility',
        'open_days_hours',
        'table_price',
        'status',
        'partner_id',
        'resto_category_id',
    ];

    public function restoCategory() {
        return $this->belongsTo( RestoCategory::class )->first();
    }

    public function partner() {
        return $this->belongsTo( Partner::class )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function restoNews() {
        return $this->hasMany( RestoNews::class )->get();
    }

    public function caracteristic() {
        return $this->hasOne( RestoCaracteristic::class )->first();
    }

    public function review() {
        return $this->hasMany( RestoReview::class )->get();
    }

    public function wishList() {
        return $this->hasMany( RestoWishlist::class )->get();
    }

    public function booking() {
        return $this->hasMany( RestoBooking::class )->get();
    }

    public function bookingWithPartner() {

        return RestoBookingResource::collection( $this->hasMany( RestoBooking::class )->get() );
    }

    public function note() {
        //return the average note of rating of the hotel
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
