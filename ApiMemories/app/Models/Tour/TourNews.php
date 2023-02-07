<?php

namespace App\Models\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourNews extends Model {
    use HasFactory;
    protected $fillable = [
        'content',
        'status',
        'tour_id',
    ];

    public function tour() {
        return $this->belongsTo( Tour::class )->first();
    }
}
