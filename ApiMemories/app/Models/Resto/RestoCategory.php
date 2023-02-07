<?php

namespace App\Models\Resto;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestoCategory extends Model {
    use HasFactory;
    protected $fillable = [
        'name',
        'status',
    ];

    public function resto() {
        return $this->belongsTo( Resto::class )->first();
    }
}
