<?php

namespace App\Http\Controllers;

use App\Models\Util;
use App\Models\Partner;
use App\Models\Customer;
use App\Models\SubsType;
use App\Models\Tour\Tour;
use App\Models\Notification;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Http\Resources\Tour as TourResource;

class GeneralController extends Controller {
    public function createPartner( Request $request ) {
        //verify if the telephones are correct and then create
        $telephone1 = new Util();
        $telephone2 = new Util();
        if ( $telephone1->isCorrectTelephone( $request->first_telephone )and
        $telephone2->isCorrectTelephone( $request->second_telephone ) ) {
            Partner::create( $request->all() );
            return response()->json(
                [ 'success' => true ,
                'message'=> 'Partner created successfully' ]
            );
        }
        return response()->json(
            [ 'success' => false ,
            'message' => 'wrong Telephone' ]
        );
    }

    public function updatePartner( Request $request, $id ) {

        //verify if the telephones are correct and then update
        $telephone1 = new Util();
        $telephone2 = new Util();

        if ( $telephone1->isCorrectTelephone( $request->first_telephone )and
        $telephone2->isCorrectTelephone( $request->second_telephone ) ) {
            $partner = Partner::where( 'id', $id )->first();
            $partner->update( $request->all() );
            return response()->json(
                [ 'success' => true ,
                'message'=>'Partner updated successfully' ]
            );
        }
        return response()->json(
            [ 'success' => false ,
            'message' => 'wrong Telephone' ]
        );
    }

    public function deletePartner( $id ) {
        $partner = Partner::where( 'id', $id )->first();
        $partner->update( [
            'status'=>0
        ] );
        return response()->json(
            [ 'success' => true ,
            'message' => 'Partner deleted successfully' ]
        );
    }

    public function allPartner() {
        return Partner::where( 'status', 1 )->orderBy( 'created_at', 'DESC' )->get();
    }

    public function createCustomer( Request $request ) {
        //verify if the telephones are correct and then create
        $telephone = new Util();

        if ( $telephone->isCorrectTelephone( $request->telephone ) ) {
            Customer::create( $request->all() );
            return response()->json(
                [ 'success' => true ,
                'message'=> 'Customer created successfully' ]
            );
        }
        return response()->json(
            [ 'success' => false ,
            'message' => 'wrong Telephone' ]
        );
    }

    public function updateCustomer( Request $request, $id ) {

        //verify if the telephones are correct and then update
        $telephone = new Util();

        if ( $telephone->isCorrectTelephone( $request->telephone ) ) {
            $customer = Customer::where( 'id', $id )->first();
            $customer->update( $request->all() );
            return response()->json(
                [ 'success' => true,
                'message'=> ' customer updated successfully' ]
            );
        }
        return response()->json(
            [ 'success' => false ,
            'message' => 'wrong Telephone' ]
        );
    }

    public function allCustomer() {
        return Customer::where( 'status', 1 )->orderBy( 'created_at', 'DESC' )->get();
    }

    public function deleteCustomer( $id ) {
        $customer = Customer::where( 'id', $id )->first();
        $customer->update( [
            'status'=>0
        ] );
        return response()->json(
            [ 'success' => true ,
            'message' => 'Customer deleted successfully' ]
        );
    }

    public function createNotification( Request $request ) {
        Notification::create( $request->all() );
        return response()->json(
            [ 'success' => true,
            'message' => 'notification created successfully' ]
        );

    }

    public function deleteNotification( Request $request ) {
        Notification::where( 'user_id', $request->user_id )->update( [ 'status'=>0 ] );
        return response()->json(
            [ 'success' => true,
            'message' => 'notification deleted successfully' ]
        );
    }

    public function allNotification( $id ) {
        return Notification::where( 'user_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'DESC' )->get();
    }

    public function createSubsType( Request $request ) {
        SubsType::create( $request->all() );
        return response()->json(
            [ 'success' => true,
            'message' =>'subsType created successfully' ]
        );
    }

    public function deleteSubsType( $id ) {
        SubsType::where( 'id', $id )->update( [
            'status'=>0
        ] );
        return response()->json(
            [ 'success' => true,
            'message' =>'subsType deleted successfully' ]
        );
    }

    public function updateSubsType( Request $request, $id ) {
        SubsType::where( 'id', $id )->update( $request->all() );
        return response()->json(
            [ 'success' => true,
            'message' =>'subsType updated successfully' ]
        );
    }

    public function allSubsType() {
        return SubsType::where( 'status', 1 )->orderBy( 'created_at', 'DESC' )->get();
    }

    public function createSubscription( Request $request ) {
        Subscription::create( $request->all() );
        return response()->json(
            [ 'success' => true,
            'message' =>'Subcription created successfully' ]
        );
    }

    public function deleteSubscription( $id ) {
        Subscription::where( 'id', $id )->update( [
            'status'=>0
        ] );
        return response()->json(
            [ 'success' => true,
            'message' =>'Subscription deleted successfully' ]
        );
    }

    public function updateSubscription( Request $request, $id ) {
        Subscription::where( 'id', $id )->update( $request->all() );
        return response()->json(
            [ 'success' => true,
            'message' =>'Subscription updated successfully' ]
        );
    }

    public function allSubscription() {
        return Subscription::where( 'status', 1 )->orderBy( 'created_at', 'DESC' )->get();
    }

    public function customerAllBooking( $id ) {
        return Customer::where( 'id', $id )->first()->allBooking();
    }

    public function customerAllReview( $id ) {
        return Customer::where( 'id', $id )->first()->allReview();
    }

    public function customerAllWishList( $id ) {
        return Customer::where( 'id', $id )->first()->allWishList();
    }

    public function partnerAllBooking( $id ) {
        return Partner::where( 'id', $id )->first()->allBooking();
    }

    public function partnerAllReview( $id ) {
        return Partner::where( 'id', $id )->first()->allReview();
    }

    public function partnerAllService( $id ) {
        return Partner::where( 'id', $id )->first()->allService();
    }
}
