<?php

namespace App\Models\Resto;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RestoBooking extends Model {
    use HasFactory;
    protected $fillable = [
        'total_price',
        'number_of_tables',
        'is_accepted',
        'date',
        'status',
        'resto_id',
        'customer_id',
    ];

    public function payment() {
        return $this->hasOne( RestoPayment::class, 'resto_id' )->first();
    }

    public function customer() {
        return $this->belongsTo( Customer::class, 'customer_id' )->first();
    }

    public function resto() {
        return $this->belongsTo( Resto::class, 'resto_id' )->first();
    }

    public function this() {
        return $this->first();
    }
}
