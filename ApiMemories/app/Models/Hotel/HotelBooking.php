<?php

namespace App\Models\Hotel;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HotelBooking extends Model {
    use HasFactory;
    protected $fillable = [
        'total_price',
        'date',
        'is_accepted',
        'number_of_nigth',
        'status',
        'hotel_id',
        'room_id',
        'customer_id',
    ];

    public function hotel() {
        return $this->belongsTo( Hotel::class )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function room() {
        return $this->belongsTo( Room::class )->first();
    }

    public function this() {
        return $this->first();
    }
}
