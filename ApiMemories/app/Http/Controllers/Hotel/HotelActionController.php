<?php

namespace App\Http\Controllers\Hotel;

use Illuminate\Http\Request;
use App\Models\Hotel\HotelReview;
use App\Models\Hotel\HotelBooking;
use App\Models\Hotel\HotelWishList;
use App\Http\Controllers\Controller;

class HotelActionController extends Controller {
    public function createHotelReview( Request $request ) {
        HotelReview::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel review created successfully'
        ] );

    }

    public function updateHotelReview( Request $request, $id ) {
        HotelReview::where( 'id', $id )->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel review updated successfully'
        ] );

    }

    public function deleteHotelReview( $id ) {
        HotelReview::where( 'id', $id )->first()->update( [ 'status', 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel review deleted successfully'
        ] );

    }

    public function allHotelReview( $id ) {
        return HotelReview::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function createHotelWishList( Request $request ) {
        HotelWishList::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel WishList created successfully'
        ] );

    }

    public function updateHotelWishList( Request $request ) {
        HotelWishList::where( 'id', $id )->first()->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel WishList updated successfully'
        ] );

    }

    public function deleteHotelWishList( $id ) {
        HotelWishList::where( 'id', $id )->first()->update( [ 'status', 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel WishList deleted successfully'
        ] );

    }

    public function allHotelWishList( $id ) {
        return HotelWishList::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function createHotelbooking( Request $request ) {
        HotelBooking::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel booking created successfully'
        ] );

    }

    public function updateHotelBooking( Request $request, $id ) {
        HotelBooking::where( 'id', $id )->first()->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel Booking updated successfully'
        ] );

    }

    public function deleteHotelBooking( $id ) {
        HotelBooking::where( 'id', $id )->first()->update( [ 'status'=> 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Hotel Booking deleted successfully'
        ] );

    }

    public function allHotelBooking( $id ) {
        return HotelBooking::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function allHotelBookingPartner( $id ) {
        //all the bookings are returned.
        //Have to check in the front wich one belongs to the Auth Partner
        return HotelBooking::where( 'hotel_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function acceptHotelBooking( $id ) {
        HotelBooking::where( 'id', $id )->update( [
            'is_accepted' =>1
        ] );
    }

    public function rejectHotelBooking( $id ) {
        HotelBooking::where( 'id', $id )->update( [
            'is_accepted' =>0
        ] );
    }

}
