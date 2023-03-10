<?php

namespace App\Http\Resources;

use App\Http\Resources\RestoWishList;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\RestoReview as RestoReviewResource;

class Resto extends JsonResource
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
            'description' => $this->description,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'address' => $this->address,
            'disponibility' => $this->disponibility,
            'open_days_hours' => $this->open_days_hours,
            'table_price' => $this->table_price,
            'status' => $this->status,
            'partner_id' => $this->partner_id,
            'category' => $this->restoCategory(),
            'partner' => $this->partner(),
            'caracteristics' => $this->caracteristic(),
            'note' => $this->note(),
            'reviews' => RestoReviewResource::collection($this->review()),
            'numberOfReviews' => $this->review()->count(),
            'subscriptionOfOwner' => $this->partner()->subscription(),
            'subsTypeOfOwner' => $this->partner()->subscription()->subsType(),

        ];
    }
}