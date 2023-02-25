<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_date',
        'end_date',
        'subs_type_id',
        'partner_id',
        'status',
    ];

    public function subsType()
    {
        //  return SubsType::where( 'id', $this->subs_type->id )->first();
        return $this->belongsTo(SubsType::class)->first();
    }

    public function isValid()
    {
        $isValid = false;
        $endDate = strtotime($this->end_date);
        $today = strtotime(Date('Y-m-d'));

        if ($endDate > $today) {
            $isValid = true;
        }

        return $isValid;
    }
}
