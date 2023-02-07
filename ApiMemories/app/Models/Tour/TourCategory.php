<?php

namespace App\Models\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourCategory extends Model {
    use HasFactory;
    protected $fillable = [
        'type',
        'status',
    ];

    public function tour() {
        return $this->hasMany( Tour::class )->get();
    }
}
