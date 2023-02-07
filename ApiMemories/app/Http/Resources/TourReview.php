<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TourReview extends JsonResource {
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
            'rating'=>$this->rating,
            'comment'=>$this->comment,
            'about_price'=>$this->about_price,
            'status'=>$this->status,
            'customer_id'=>$this->customer_id,
            'tour_id'=>$this->tour_id,
            'customer' => $this->customer(),
        ];
    }
}
