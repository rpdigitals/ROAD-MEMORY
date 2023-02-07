<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RestoBooking extends JsonResource {
    /**
    * Transform the resource into an array.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
    */

    public function toArray( $request ) {
        return [
            'id'=>$this->id,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
            'total_price'=>$this->total_price,
            'date'=>$this->date,
            'number_of_tables'=>$this->number_of_tables,
            'is_accepted'=>$this->is_accepted,
            'status'=>$this->status,
            'resto_id'=>$this->resto_id,
            'customer_id'=>$this->customer_id,
            'resto'=>$this->resto(),
            'customer' => $this->customer(),
        ];
    }
}
