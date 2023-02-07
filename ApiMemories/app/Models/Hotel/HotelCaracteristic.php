<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelCaracteristic extends Model {
    use HasFactory;
    protected $fillable = [
        'hotel_id',
        'wifi',
        'plasma_tv',
        'swimming_pool',
        'fitness_center',
        'restaurant',
        'parking',
        'smoke_area',
        'pet',

    ];

    public function hotel() {
        return $this->belongsTo( Hotel::class )->first();
    }

}
