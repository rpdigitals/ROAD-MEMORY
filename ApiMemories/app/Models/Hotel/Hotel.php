<?php

namespace App\Models\Hotel;

use App\Http\Resources\HotelBooking as HotelBookingResource;
use App\Models\Hotel\RoomCategory;
use App\Models\Partner;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
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
        'status',
        'partner_id',
    ];

    public function roomCategory()
    {
        return
            RoomCategory::where('hotel_id', $this->id)->where('status', 1)->get();
        //return $this->hasMany(RoomCategory::class)->get();
    }

    public function room()
    {
        $categories = $this->hasMany(RoomCategory::class)->get();
        $tableData = [];
        foreach ($categories as $category) {
            array_push($tableData, $category->room());
        }

        return $tableData;
    }

    public function news()
    {
        return $this->hasMany(HotelNews::class)->get();
    }

    public function caracteristic()
    {
        return $this->hasOne(HotelCaracteristic::class)->first();
    }

    public function wishList()
    {
        return $this->hasMany(WishList::class)->get();
    }

    public function review()
    {
        return $this->hasMany(HotelReview::class)->get();
    }

    public function booking()
    {
        return $this->hasMany(HotelBooking::class)->get();
    }

    public function bookingWithPartner()
    {
        return
            HotelBookingResource::collection($this->hasMany(HotelBooking::class)->get());
    }

    public function partner()
    {
        return $this->belongsTo(Partner::class)->first();
    }

    public function note()
    {
        //return the average note of rating of the tour
        $reviews = $this->review();
        if ($reviews->count() > 0) {
            $numberOfRating = $this->review()->count();
            $sumOfRating = 0;
            foreach ($reviews as $review) {
                $sumOfRating += $review->rating;
            }
            $note = $sumOfRating / $numberOfRating;
            $note = round($note, 2);
        } else {
            $note = 0;
        }

        return $note;
    }

    public function this()
    {
        return $this->first();
    }
}
