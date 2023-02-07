<?php

namespace App\Models\Hotel;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HotelReview extends Model {
    use HasFactory;
    protected $fillable = [
        'rating',
        'comment',
        'about_price',
        'status',
        'customer_id',
        'hotel_id',
    ];

    public function hotel() {
        return $this->belongsTo( Hotel::class )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function this() {
        return $this->first();
    }
}
