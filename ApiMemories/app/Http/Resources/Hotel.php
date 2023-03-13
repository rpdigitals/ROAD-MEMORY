<?php

namespace App\Http\Resources;

use App\Http\Resources\HotelReview as HotelReviewResource;
use App\Http\Resources\RoomType as RoomTypeResource;
use App\Models\Hotel\HotelWishList;
use Illuminate\Http\Resources\Json\JsonResource;

class Hotel extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return
            [
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
                'status' => $this->status,
                'partner_id' => $this->partner_id,
                'partner' => $this->partner(),
                'caracteristics' => $this->caracteristic(),
                //'rooms'=> $this->room(),
                'room_categories' => RoomTypeResource::collection($this->roomCategory()),
                'note' => $this->note(),
                'reviews' => HotelReviewResource::collection($this->review()),
                'numberOfReviews' => $this->review()->count(),
                'subscriptionOfOwner' => $this->partner()->subscription(),
                'subsTypeOfOwner' => $this->partner()->subscription()->subsType(),
            ];
    }
}
