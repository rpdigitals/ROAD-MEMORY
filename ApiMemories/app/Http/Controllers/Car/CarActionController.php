<?php

namespace App\Http\Controllers\Car;

use Illuminate\Http\Request;
use App\Models\Car\CarWishList;
use App\Http\Controllers\Controller;

class CarActionController extends Controller {

    public function createCarWishList( Request $request ) {
        CarWishList::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Car WishList created successfully'
        ] );

    }

    public function updateCarWishList( Request $request, $id ) {
        CarWishList::where( 'id', $id )->first()->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'Car WishList updated successfully'
        ] );

    }

    public function deleteCarWishList( $id ) {
        CarWishList::where( 'id', $id )->first()->update( [ 'status', 0 ] );
        return response()->json( [
            'success'=>true,
            'message'=>'Car WishList deleted successfully'
        ] );

    }

    public function allCarWishList( $id ) {
        return CarWishList::where( 'customer_id', $id )->where( 'status', 1 )->orderBy( 'created_at', 'desc' )->get();

    }
}
