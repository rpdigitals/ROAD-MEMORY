<?php

namespace App\Http\Controllers\Resto;

use App\Models\Resto\Resto;
use Illuminate\Http\Request;
use App\Models\Resto\RestoNews;
use App\Models\Resto\RestoCategory;
use App\Http\Controllers\Controller;
use App\Models\Resto\RestoCaracteristic;
use App\Http\Resources\RestoReviewResource as RestoReviewResource;
use App\Http\Resources\Resto as RestoResource;

class RestoController extends Controller {
    public function createResto( Request $request ) {
       $resto= Resto::create( $request->all() );
        return response()->json( [
            'success' => true,
            'resto_id' => $resto->id,
            'message' => 'Resto created successfully'
        ] );
    }

    public function updateResto( Request $request, $id ) {
        $resto=Resto::where( 'id', $id )->first();
        $resto->update( $request->except('picture') );
        return response()->json( [
            'success' => true,
            'resto_id' => $resto->id,
            'message' => 'Resto updated successfully'
        ] );
    }

    public function deleteResto( $id ) {
        Resto::where( 'id', $id )->update( [
            'status'=>0
        ] );
        return response()->json( [
            'success' => true,
            'message' => 'Resto deleted successfully'
        ] );
    }

    public function allResto() {
        return RestoResource::collection( Resto::where( 'status', 1 )->get() );
    }

    public function createRestoCaracteristic( Request $request ) {
        RestoCaracteristic::create( $request->all() );
        return response()->json( [
            'success' => true,
            'message' => 'RestoCaracteristic created successfully'
        ] );
    }

    public function updateRestoCaracteristic( Request $request, $id ) {
        RestoCaracteristic::where( 'resto_id', $id )->first()->update( $request->all() );
        return response()->json( [
            'success' => true,
            'message' => 'RestoCaracteristic updated successfully'
        ] );
    }

    public function createRestoNews( Request $request ) {
        RestoNews::create( $request->all() );
        return response()->json( [
            'success' => true,
            'message' => 'RestoNews created successfully'
        ] );
    }

    public function updateRestoNews( Request $request, $id ) {
        RestoNews::where( 'id', $id )->update( $request->all() );
        return response()->json( [
            'success' => true,
            'message' => 'RestoNews updated successfully'
        ] );
    }

    public function deleteRestoNews( $id ) {
        RestoNews::where( 'id', $id )->update( [
            'status'=>0
        ] );
        return response()->json( [
            'success' => true,
            'message' => 'RestoNews deleted successfully'
        ] );
    }

    public function allRestoNews() {
        return RestoNews::where( 'status', 1 )->orderBy( 'created_at', 'DESC' )->get();
    }

    public function createRestoCategory( Request $request ) {
        RestoCategory::create( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'RestoCategory created successfully'
        ] );

    }

    public function updateRestoCategory( $id, Request $request ) {
        RestoCategory::findOrFail( $id )->update( $request->all() );
        return response()->json( [
            'success'=>true,
            'message'=>'RestoCategory updated successfully'
        ] );
    }

    public function deleteRestoCategory( $id ) {
        RestoCategory::findOrFail( $id )->update( [
            'status'=>1
        ] );
        return response()->json( [
            'success'=>true,
            'message'=>'RestoCategory deleted successfully'
        ] );
    }

    public function allRestoCategory() {
        return RestoCategory::where( 'status', 1 )->get();
    }

    public function restoOfCategory( $id ) {
        return RestoResource::collection( Resto::where( 'resto_category_id', $id )
        -> where( 'status', 1 )->get() );
    }

    public function restoDetail( $id ) {
        return RestoResource::collection( Resto::where( 'status', 1 )
        ->where( 'id', $id )->get() );
    }

    public function searchResto( Request $request ) {
        $Restos = RestoResource::collection( Resto::where( 'name', 'Like', '%'.$request->keyword.'%' )
        ->where( 'status', 1 )
        ->get() );
        return $Restos;
    }

    public function sortRestobyTablePrice( Request $request ) {
        $order = 'ASC';
        if ( $request->order == 'highest' ) {
            $order = 'DESC';
        }
        return RestoResource::collection( Resto::where( 'status', 1 )
        ->orderBy( 'table_price', $order )
        ->get() );

    }
    public function allRestoOfPartner( $id ) {
        return RestoResource::collection( Resto::where( 'status', 1 )
        ->where( 'partner_id', $id )
        ->get() );

    }
}
