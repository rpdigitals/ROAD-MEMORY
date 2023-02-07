<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelNews extends Model {
    use HasFactory;
    protected $fillable = [
        'content',
        'status',
        'hotel_id',
    ];

    public function hotel() {
        return $this->belongsTo( Hotel::class )->first();
    }
}
