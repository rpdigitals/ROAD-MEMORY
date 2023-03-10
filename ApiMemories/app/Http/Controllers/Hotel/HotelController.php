<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Http\Resources\Hotel as HotelResource;
use App\Http\Resources\Roomcategory as RoomcategoryResource;
use App\Models\Hotel\Hotel;
use App\Models\Hotel\HotelCaracteristic;
use App\Models\Hotel\HotelNews;
use App\Models\Hotel\Room;
use App\Models\Hotel\RoomCategory;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function createHotel(Request $request)
    {
        $hotel = Hotel::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Hotel created successfully',
            'hotel_id' => $hotel->id,
        ]);
    }

    public function updateHotel(Request $request, $id)
    {
        $hotel = Hotel::where('id', $id)->first();
        $hotel->update($request->except('picture'));

        return response()->json([
            'success' => true,
            'message' => 'Hotel updated successfully',
            'hotel_id' => $hotel->id,
        ]);
    }

    public function deleteHotel($id)
    {
        Hotel::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Hotel deleted successfully'
        ]);
    }

    public function allHotel()
    {
        return HotelResource::collection(Hotel::where('status', 1)->get());
    }

    public function createHotelCaracteristic(Request $request)
    {
        HotelCaracteristic::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'HotelCaracteristic created successfully'
        ]);
    }

    public function updateHotelCaracteristic(Request $request, $id)
    {
        HotelCaracteristic::where('hotel_id', $id)->first()->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'HotelCaracteristic updated successfully'
        ]);
    }

    public function hotelCaracteristic(Request $request, $id)
    {
        return HotelCaracteristic::where('hotel_id', $id)->first();
    }

    public function createRoomCategory(Request $request)
    {
        RoomCategory::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'RoomCategory created successfully'
        ]);
    }

    public function updateRoomCategory(Request $request, $id)
    {
        RoomCategory::where('id', $id)->first()->update($request->all());

        return $request->all();
        return response()->json([
            'success' => true,
            'message' => 'RoomCategory updated successfully'
        ]);
    }

    public function deleteRoomCategory($id)
    {
        RoomCategory::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json([
            'success' => true,
            'message' => 'RoomCategory deleted successfully'
        ]);
    }

    public function allRoomCategory($id)
    {
        return RoomcategoryResource::collection(RoomCategory::where('status', 1)->where('hotel_id', $id)->get());
    }

    public function createRoom(Request $request)
    {
        Room::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Room created successfully'
        ]);
    }

    public function updateRoom(Request $request, $id)
    {
        Room::where('id', $id)->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Room updated successfully'
        ]);
    }

    public function deleteRoom($id)
    {
        Room::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Room deleted successfully'
        ]);
    }

    public function allRoom($id)
    {
        return Room::where('status', 1)->where('room_category_id', $id)->get();
    }

    public function singleRoom($id)
    {
        return Room::where('id', $id)->first();
    }

    public function hotelDetail($id)
    {
        return Hotelresource::collection(Hotel::where('status', 1)->get());
    }

    public function searchHotel(Request $request)
    {
        if ($request->keyword == '') {
            $Hotels = HotelResource::collection(Hotel::where('status', 1)
                                                     ->get());

            return $Hotels;
        }
        $Hotels = HotelResource::collection(Hotel::where('name', 'Like', '%' . $request->keyword . '%')
                                                 ->where('status', 1)
                                                 ->get());

        return $Hotels;
    }

    public function sortHotelbyPrice($sortOrder)
    {
        $order = 'ASC';

        if ($sortOrder == 'highest') {
            $order = 'DESC';
        }

        return HotelResource::collection(Hotel::where('status', 1)
                                              ->orderBy('price', $order)
                                              ->get());
    }

    public function allHotelOfPartner($id)
    {
        return HotelResource::collection(Hotel::where('status', 1)
                                              ->where('partner_id', $id)
                                              ->get());
    }
}
