<?php

namespace App\Models\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourCaracteristic extends Model {
    use HasFactory;
    protected $fillable = [
        'tour_guide',
        'animals',
        'dinner',
        'smoke_area',
        'children',
        'tour_id',
    ];

    public function tour() {
        return $this->belongsTo( Tour::class )->first();
    }
}
