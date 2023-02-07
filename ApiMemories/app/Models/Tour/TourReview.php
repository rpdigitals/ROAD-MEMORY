<?php

namespace App\Models\Tour;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TourReview extends Model {
    use HasFactory;
    protected $fillable = [
        'rating',
        'comment',
        'about_price',
        'status',
        'customer_id',
        'tour_id',
    ];

    public function tour() {
        return $this->belongsTo( Tour::class )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function this() {
        return $this->first();
    }
}
