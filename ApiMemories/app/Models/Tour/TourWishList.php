<?php

namespace App\Models\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourWishList extends Model {
    use HasFactory;
    protected $fillable = [
        'customer_id',
        'tour_id',
        'status',
    ];

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function tour() {
        return $this->belongsTo( Tour::class )->first();
    }

    public function this() {
        return $this->first();
    }
}
