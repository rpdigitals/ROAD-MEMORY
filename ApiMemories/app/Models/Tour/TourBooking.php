<?php

namespace App\Models\Tour;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TourBooking extends Model {
    use HasFactory;
    protected $fillable = [
        'number_of_person',
        'total_price',
        'date',
        'hour',
        'is_accepted',
        'status',
        'tour_id',
        'customer_id',
    ];

    public function customer() {
        return $this->belongsTo( Customer::class, 'customer_id' )->first();
    }

    public function tour() {
        return $this->belongsTo( Tour::class, 'tour_id' )->first();
    }

    public function this() {
        return $this->first();
    }

}
