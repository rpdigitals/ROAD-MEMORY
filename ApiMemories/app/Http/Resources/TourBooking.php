<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TourBooking extends JsonResource {
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
            'number_of_person'=>$this->number_of_person,
            'total_price'=>$this->total_price,
            'date'=>$this->date,
            'hour'=>$this->hour,
            'is_accepted'=>$this->is_accepted,
            'status'=>$this->status,
            'tour_id'=>$this->tour_id,
            'customer_id'=>$this->customer_id,
            'tour'=>$this->tour(),
            //this third one is used in the front only with the auth is a partner
            'customer' => $this->customer(),
        ];
    }
}
