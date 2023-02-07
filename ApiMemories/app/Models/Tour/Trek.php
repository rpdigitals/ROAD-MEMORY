<?php

namespace App\Models\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trek extends Model {
    use HasFactory;
    protected $fillable = [
        'date', 'place', 'duration', 'price', 'status', 'partner_id'
    ];

    public function partner() {
        return $this->belongsTo( Partner::class )->first();
    }
}
