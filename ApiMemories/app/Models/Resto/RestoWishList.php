<?php

namespace App\Models\Resto;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestoWishList extends Model {
    use HasFactory;
    protected $fillable = [
        'customer_id',
        'resto_id',
        'status'
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
