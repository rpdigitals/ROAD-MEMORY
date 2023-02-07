<?php

namespace App\Http\Controllers\Tour;

use Illuminate\Http\Request;
use App\Models\Tour\TourReview;
use App\Models\Tour\TourBooking;
use App\Models\Tour\TourWishList;
use App\Http\Controllers\Controller;

class TourActionController extends Controller {

    public function createTourReview( Request $request ) {
        TourReview::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour review created successfully'
        ] );

    }

    public function updateTourReview( Request $request, $id ) {
        TourReview::where( 'id', $id )->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour review updated successfully'
        ] );

    }

    public function deleteTourReview( $id ) {
        TourReview::where( 'id', $id )->update( [ 'status', 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour review deleted successfully'
        ] );

    }

    public function allTourReview( $id ) {
        return tourReview::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function createTourWishList( Request $request ) {
        TourWishList::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour WishList created successfully'
        ] );

    }

    public function updateTourWishList( Request $request, $id ) {
        TourWishList::where( 'id', $id )->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour WishList updated successfully'
        ] );

    }

    public function deleteTourWishList( $id ) {
        TourWishList::where( 'id', $id )->update( [ 'status', 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour WishList deleted successfully'
        ] );

    }

    public function allTourWishList( $id ) {
        return tourWishList::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function createTourbooking( Request $request ) {
        Tourbooking::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour booking created successfully'
        ] );

    }

    public function updateTourBooking( Request $request, $id ) {
        TourBooking::where( 'id', $id )->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour Booking updated successfully'
        ] );

    }

    public function deleteTourBooking( $id ) {
        TourBooking::where( 'id', $id )->first()->update( [ 'status', 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Tour Booking deleted successfully'
        ] );

    }

    public function allTourBooking( $id ) {
        return TourBooking::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function allTourBookingPartner( $id ) {
        /**
        * All bookings are returned
        * have to check in the front wich one belongs to the Auth partner
        */
        return TourBooking::where( 'tour_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }

    public function acceptTourBooking( $id ) {
        TourBooking::where( 'id', $id )->update( [
            'is_accepted' =>1
        ] );
    }

    public function rejectTourBooking( $id ) {
        TourBooking::where( 'id', $id )->update( [
            'is_accepted' =>0
        ] );
    }

    public function hasWished( Request $request ) {
        $hasWished = TourWishList::where( 'tour_id', $request->tour_id )
        ->where( 'customer_id', $request->customer_id )
        ->first();
        if ( $hasWished ) {
            return true;
        }
        return false;

    }
}
