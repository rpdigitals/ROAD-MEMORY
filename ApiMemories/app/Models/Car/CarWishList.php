<?php

namespace App\Models\Car;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarWishList extends Model {
    use HasFactory;
    protected $fillable = [
        'car_id',
        'customer_id',
        'status',
    ];

    public function car() {
        return $this->belongsTo( Car::class )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function this() {
        return $this->first();
    }
}
