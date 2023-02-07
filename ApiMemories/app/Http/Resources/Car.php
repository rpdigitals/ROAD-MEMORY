<?php

namespace App\Http\Resources;

use App\Models\Car\CarWishList;
use Illuminate\Http\Resources\Json\JsonResource;

class Car extends JsonResource {
    /**
    * Transform the resource into an array.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
    */

    public function toArray( $request ) {
        $wish = false;
        //check if the internaut is auth, customer and has wished the car
        // then set $wish to a boolean
        if ( \Auth()->user() ) {
            if ( \Auth()->user()->isCustomer() ) {
                $hasHished = CarWishList::where( 'customer_id', \Auth()->user()->customer()->id )
                ->where( 'hotel_id', $this->id )->first();
                if ( $hasWished ) {
                    $wish = true;
                }

            }
        }
        return [
            'id'=>$this->id,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
            'name'=>$this->name,
            'brand'=>$this->brand,
            'status'=>$this->status,
            'price'=>$this->price,
            'picture1'=>$this->picture1,
            'picture2'=>$this->picture2,
            'picture3'=>$this->picture3,
            'partner_id'=>$this->partner_id,
            'partner'=>$this->partner(),
            'hasWished' => $wish,
            'subscriptionOfOwner' => $this->partner()->subscription(),
            'subsTypeOfOwner' => $this->partner()->subscription()->subsType(),
        ];
    }
}
