<?php

namespace App\Models;

use App\Models\Tour\Tour;
use App\Http\Resources\Car;
use App\Models\Hotel\Hotel;
use App\Models\Resto\Resto;
use App\Models\Car\Car as CarModel;
use Illuminate\Database\Eloquent\Model;

use App\Http\Resources\Car as CarResource;
use App\Http\Resources\Tour as TourResource;
use App\Http\Resources\Hotel as HotelResource;

use App\Http\Resources\Resto as RestoResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Http\Resources\TourBooking as TourBookingResource;
use App\Http\Resources\HotelBooking as HotelBookingResource;
use App\Http\Resources\RestoBooking as RestoBookingResource;

class Partner extends Model
{
    use HasFactory;
     protected $fillable =
     ['society_name',
    'ceo_name',
    'assistant_name',
    'first_telephone',
    'second_telephone',
    'verification_file',
    'is_verified',
    'user_id',
    'status'
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id')->first();
    }
    public function trek(){
        return $this->hasOne(Trek::class,'partner_id')->first();
    }
    public function tour(){
        return TourResource::collection($this->hasMany(Tour::class,'partner_id')->get());
    }
    public function resto(){
        return RestoResource::collection($this->hasMany(Resto::class,'partner_id')->get());
    }public function hotel(){
        return HotelResource::collection($this->hasMany(Hotel::class,'partner_id')->get());
    }
    public function car(){
       // return CarModel::where('status', '=', 1)->get();
       //return  $this->hasMany(Car::class,'partner_id')->get();
      return  CarResource::collection($this->hasMany(CarModel::class,'partner_id')->get());
    }
    public function subscription(){
        return $this->hasOne(Subscription::class)->first();
    }
    public function room() {
        $categories = $this->hasMany( RoomCategory::class )->get();
        $tableData = [];
        foreach ( $categories as $category ) {
            array_push( $tableData, $category->room() );
        }
        return $tableData;
    }
    public function tourBooking(){
        $tableData=[];
        $tableData=[];
        $tableData=[];
        $tableData=[];
        $tableData=[];
        $tours=Tour::where('partner_id', $this->id)->get();
        foreach($tours as $tour){
            array_push( $tableData, $tour->bookingWithPartner() );
        }

        return $tableData;
    }
    public function hotelBooking(){
      $tableData=[];
        $hotels=Hotel::where('partner_id', $this->id)->get();
        foreach($hotels as $hotel){
            array_push( $tableData, $hotel->bookingWithPartner() );
        }

        return $tableData;
    }
    public function restoBooking(){
      $tableData=[];
        $restos=Resto::where('partner_id', $this->id)->get();
        foreach($restos as $resto){
            array_push( $tableData, $resto->bookingWithPartner() );
        }

        return $tableData;
    }
    public function allBooking() {

        $hotelBookings = $this->hotelBooking();
        $restoBookings = $this->restoBooking();
         $tourBookings = $this->tourBooking();

        return $data = [
             'hotelBookings' => $hotelBookings,
            'restoBookings'=> $restoBookings,
            'tourBookings'=> $tourBookings,

        ];
    }

    public function allService() {

         $hotels = $this->hotel();
         $restos = $this->resto();
         $tours= $this->tour();
         $cars=$this->car();

        return $data = [
            'hotels'=> $hotels,
            'restos'=> $restos,
            'tours'=> $tours,
            'cars'=> $cars,
        ];
    }
    public function hasActiveSubs(){
        $hasActiveSubs=false;
     $endDate=strtotime( $this->subscription()->end_date);
     $today=strtotime(Date('Y-m-d '));
     if($endDate>$today){
        $hasActiveSubs=true;
     }
    return $hasActiveSubs;
    }

}
