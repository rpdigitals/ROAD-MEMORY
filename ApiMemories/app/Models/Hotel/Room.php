<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model {
    use HasFactory;
    protected $fillable = [
        'room_number',
        'price',
        'picture',
        'room_category_id',
        'status'
    ];

    public function RoomCategory() {
        return $this->belongsTo( RoomCategory::class )->first();
    }
}
