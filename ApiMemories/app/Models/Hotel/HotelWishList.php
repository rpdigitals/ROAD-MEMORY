<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelWishList extends Model {
    use HasFactory;
    protected $fillable = [
        'hotel_id',
        'customer_id',
        'status'
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
