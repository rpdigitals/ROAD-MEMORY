<?php

namespace App\Models\Car;

use App\Models\Partner;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Car extends Model {
    use HasFactory;
    protected $fillable = [
        'name',
        'brand',
        'status',
        'price',
        'picture1',
        'picture2',
        'picture3',
        'partner_id',
    ];

    public function partner() {
        return $this->belongsTo( Partner::class )->first();
    }

    public function wishList() {
        return $this->hasMany( WishList::class )->get();
    }

    public function this() {
        return $this->first();
    }
}
