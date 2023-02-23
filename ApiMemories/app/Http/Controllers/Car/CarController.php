<?php

namespace App\Http\Controllers\Car;

use App\Models\Car\Car;
use Illuminate\Http\Request;
use App\Models\Car\CarWishList;
use App\Http\Controllers\Controller;
use App\Http\Resources\Car as CarResource;

class CarController extends Controller
{

    public function createCar(Request $request)
    {
        Car::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'Car created successfully'
        ]);
    }

    public function updateCar(Request $request, $id)
    {
        Car::where('id', $id)->update($request->except('picture1', 'picture2', 'picture3'));
        return response()->json([
            'success' => true,
            'message' => 'Car updated successfully'
        ]);
    }

    public function deleteCar($id)
    {
        Car::where('id', $id)->update([
            'status' => 0
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Car deleted successfully'
        ]);
    }

    public function allCar()
    {
        return CarResource::collection(Car::where('status', 1)->get());
    }

    public function sortCarbyPrice($sortOrder)
    {
        $order = 'ASC';

        if ($sortOrder == 'highest') {
            $order = 'DESC';

        }

        return CarResource::collection(Car::where('status', 1)
            ->orderBy('price', $order)
            ->get());

    }

    public function createCarWishList(Request $request)
    {
        CarWishList::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'Car WishList created successfully'
        ]);

    }

    public function updateCarWishList(Request $request, $id)
    {
        CarWishList::where('id', $id)->first()->update($request->all());
        return response()->json([
            'success' => true,
            'message' => 'Car WishList updated successfully'
        ]);

    }

    public function deleteCarWishList($id)
    {
        CarWishList::where('id', $id)->first()->update(['status', 0]);
        return response()->json([
            'success' => true,
            'message' => 'Car WishList deleted successfully'
        ]);

    }

    public function allCarWishList($id)
    {
        return CarWishList::where('customer_id', $id)->where('status', 1)->orderBy('created_at', 'desc')->get();

    }

    public function searchCar(Request $request)
    {
        $Cars = CarResource::collection(Car::where('name', 'Like', '%' . $request->keyword . '%')
            ->where('status', 1)
            ->get());
        return $Cars;
    }

    public function carDetails($id)
    {
        return CarResource::collection(Car::where('id', $id)
            ->get());
    }
    public function allCarOfPartner($id)
    {
        return CarResource::collection(Car::where('status', 1)
            ->where('partner_id', $id)
            ->get());

    }
}