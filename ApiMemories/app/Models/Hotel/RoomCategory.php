<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomCategory extends Model {
    use HasFactory;
    protected $fillable = [
        'name',
        'hotel_id',
        'status'
    ];

    public function hotel() {
        return $this->belongsTo( Hotel::class )->first();
    }

    public function room() {
        return $this->hasMany( Room::class )->get();
    }

    public function this() {
        return $this->first();
    }
}
