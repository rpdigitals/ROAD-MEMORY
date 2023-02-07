<?php

namespace App\Models\Resto;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestoCaracteristic extends Model {
    use HasFactory;
    protected $fillable = [
        'wifi',
        'pet',
        'parking',
        'smoke_area',
        'resto_id',
    ];

    public function caracteristic() {
        return $this->belongsTo( Resto::class, 'resto_id', 'id' )->first();
    }
}
