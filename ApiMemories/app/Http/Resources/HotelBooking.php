<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HotelBooking extends JsonResource {
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
            'is_accepted'=>$this->is_accepted,
            'hour'=>$this->hour,
            'status'=>$this->status,
            'hotel_id'=>$this->hotel_id,
            'customer_id'=>$this->customer_id,
            'hotel'=>$this->hotel(),
            'room'=>$this->room(),
            'customer'=>$this->customer(),
        ];
    }
}
