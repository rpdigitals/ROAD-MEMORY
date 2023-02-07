<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model {
    use HasFactory;
    protected $fillable = [
        'start_date',
        'end_date',
        'subs_type_id',
        'partner_id',
        'is_valid',
        'status',
    ];

    public function subsType() {
        //  return SubsType::where( 'id', $this->subs_type->id )->first();
        return $this->belongsTo( SubsType::class )->first();
    }
}
