<?php

namespace App\Http\Resources;

use App\Models\Tour\TourWishList;
//use App\Models\Tour\Partner;
use Illuminate\Http\Resources\Json\JsonResource;

class Tour extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {


        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'name' => $this->name,
            'picture' => $this->picture,
            'price' => $this->price,
            'description' => $this->description,
            'address' => $this->address,
            'visit_hour' => $this->visit_hour,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'languages' => $this->languages,
            'disponibility' => $this->disponibility,
            'open_days_hours' => $this->open_days_hours,
            'status' => $this->status,
            'partner_id' => $this->partner_id,
            'tour_category_id' => $this->tour_category_id,
            //'tour'=> $this->this(),
            'partner' => $this->partner(),
            'caracteristic' => $this->caracteristic(),
            'category' => $this->category(),
            'score' => $this->note(),
            'review' => $this->review(),
            'numberOfReviews' => $this->review()->count(),
            'subscriptionOfOwner' => $this->partner()->subscription(),
            'subsTypeOfOwner' => $this->partner()->subscription()->subsType(),
            'OwnerHasActiveSubs' => $this->partner()->hasActiveSubs(),

        ];
    }
}