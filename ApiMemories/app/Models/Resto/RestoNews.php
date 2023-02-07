<?php

namespace App\Models\Resto;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestoNews extends Model {
    use HasFactory;
    protected $fillable = [
        'content',
        'status',
        'resto_id',
    ];

    public function resto() {
        return $this->belongsTo( Resto::class )->first();
    }
}
