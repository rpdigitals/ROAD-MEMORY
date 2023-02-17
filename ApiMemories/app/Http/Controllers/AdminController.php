<?php

namespace App\Http\Controllers;

use App\Models\Tour\Tour;
use Illuminate\Http\Request;
use App\Models\Tour\TourCategory;

class AdminController extends Controller {
    public function deletetest(){
        $tour=Tour::all();
        foreach($tour as $t){
        $t->delete();
       }
        return 'deleted succesfully';
    }
    public function createTourCategory( Request $request ) {
        TourCategory::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'TourCategory created successfully'
        ] );

    }

    public function updateTourCategory( $id, Request $request ) {
        TourCategory::findOrFail( $id )->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'TourCategory updated successfully'
        ] );
    }

    public function deleteTourCategory( $id ) {
        TourCategory::findOrFail( $id )->update( [
            'status'=>1
        ] );
        return response()->json( [
            'success'=>true,
            'message'=>'TourCategory deleted successfully'
        ] );
    }

    public function allTourCategory() {
        return TourCategory::where( 'status', 1 )->get();
    }

}