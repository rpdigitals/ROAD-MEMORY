<?php

namespace App\Http\Controllers\Tour;

use App\Http\Controllers\Controller;
use App\Http\Resources\Tour as TourResource;
use App\Models\Partner;
use App\Models\Subscription;
use App\Models\Tour\Tour;
use App\Models\Tour\TourCaracteristic;
use App\Models\Tour\TourCategory;
use App\Models\Tour\TourNews;
use App\Models\Tour\Trek;
use App\Models\User;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function createTour(Request $request)
    {
        $tour = Tour::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Tour created successfully',
            'tour_id' => $tour->id,
        ]);
    }

    public function updateTour(Request $request, $id)
    {
        $tour = Tour::where('id', $id)->first();
        $tour->update($request->except('picture'));

        return response()->json([
            'success' => true,
            'message' => 'Tour updated successfully',
            'tour_id' => $tour->id
        ]);
    }

    public function deleteTour($id)
    {
        Tour::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tour deleted successfully'
        ]);
    }

    public function createTourCaracteristic(Request $request)
    {
        TourCaracteristic::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'TourCaracteristic created successfully'
        ]);
    }

    public function updateTourCaracteristic(Request $request, $id)
    {
        TourCaracteristic::where('tour_id', $id)->first()->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'TourCaracteristic updated successfully'
        ]);
    }

    public function createTrek(Request $request)
    {
        Trek::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Trek created successfully'
        ]);
    }

    public function updateTrek(Request $request, $id)
    {
        Trek::where('id', $id)->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Trek updated successfully'
        ]);
    }

    public function deleteTrek($id)
    {
        Trek::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Trek deleted successfully'
        ]);
    }

    public function allTrek()
    {
        return Trek::where('status', 1)->orderBy('created_at', 'DESC')->get();
    }

    public function allTour()
    {
        return TourResource::collection(Tour::where('status', 1)->get());
    }

    public function tourOfCategory($id)
    {
        return TourResource::collection(Tour::where('status', 1)
                                            ->where('tour_category_id', $id)
                                            ->get());
    }

    public function tourDetail($id)
    {
        return TourResource::collection(Tour::where('status', 1)
                                            ->where('id', $id)
                                            ->get());
    }

    public function searchTour(Request $request)
    {
        if ($request->keyword == '') {
            $tours = TourResource::collection(Tour::where('status', 1)
                                                  ->get());

            return $tours;
        } else {
            $tours = TourResource::collection(Tour::where('name', 'Like', '%' . $request->keyword . '%')
                                                  ->where('status', 1)
                                                  ->get());

            return $tours;
        }
    }

    public function sortTourbyPrice($sortOrder)
    {
        $order = 'ASC';

        if ($sortOrder == 'highest') {
            $order = 'DESC';
        }

        return TourResource::collection(Tour::where('status', 1)
                                            ->orderBy('price', $order)
                                            ->get());
    }

    public function allTourOfPartner($id)
    {
        return TourResource::collection(Tour::where('status', 1)
                                            ->where('partner_id', $id)
                                            ->get());
    }
}
