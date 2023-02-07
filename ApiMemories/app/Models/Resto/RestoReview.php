<?php

namespace App\Models\Resto;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RestoReview extends Model {
    use HasFactory;
    protected $fillable = [
        'rating',
        'comment',
        'about_price',
        'status',
        'resto_id',
        'customer_id',
    ];

    public function resto() {
        return $this->belongsTo( Resto::class )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class )->first();
    }

    public function this() {
        return $this->first();
    }
}
