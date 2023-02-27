<?php

namespace App\Http\Controllers\Resto;

use App\Http\Controllers\Controller;
use App\Models\Hotel\HotelBooking;
use App\Models\Hotel\HotelReview;
use App\Models\Hotel\HotelWishList;
use App\Models\Resto\RestoBooking;
use App\Models\Resto\RestoReview;
use App\Models\Resto\RestoWishList;
use Illuminate\Http\Request;

class RestoActionController extends Controller
{
    public function createRestoReview(Request $request)
    {
        RestoReview::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resto review created successfully'
        ]);
    }

    public function updateRestoReview(Request $request, $id)
    {
        RestoReview::where('id', $id)->first()->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resto review updated successfully'
        ]);
    }

    public function deleteRestoReview($id)
    {
        RestoReview::where('id', $id)->first()->update(['status', 0]);

        return response()->json([
            'success' => true,
            'message' => 'Resto review deleted successfully'
        ]);
    }

    public function allRestoReview($id)
    {
        return RestoReview::where('customer_id', $id)->where('status', 1)->orderBy('created_at', 'desc')->get();
    }

    public function createRestoWishList(Request $request)
    {
        RestoWishList::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resto WishList created successfully'
        ]);
    }

    public function updateRestoWishList(Request $request, $id)
    {
        RestoWishList::where('id', $id)->first()->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resto WishList updated successfully'
        ]);
    }

    public function deleteRestoWishList($id)
    {
        RestoWishList::where('id', $id)->first()->update(['status', 0]);

        return response()->json([
            'success' => true,
            'message' => 'Resto WishList deleted successfully'
        ]);
    }

    public function allRestoWishList($id)
    {
        return RestoWishList::where('customer_id', $id)->where('status', 1)->orderBy('created_at', 'desc')->get();
    }

    public function createRestobooking(Request $request)
    {
        RestoBooking::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resto booking created successfully'
        ]);
    }

    public function updateRestoBooking(Request $request, $id)
    {
        RestoBooking::where('id', $id)->first()->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Resto Booking updated successfully'
        ]);
    }

    public function deleteRestoBooking($id)
    {
        RestoBooking::where('id', $id)->first()->update(['status', 0]);

        return response()->json([
            'success' => true,
            'message' => 'Resto Booking deleted successfully'
        ]);
    }

    public function allRestoBooking($id)
    {
        return RestoBooking::where('customer_id', $id)->where('status', 1)->orderBy('created_at', 'desc')->get();
    }

    public function allRestoBookingPartner($id)
    {
        /**
         * All bookings are returned
         * Have to check in the front wich booking belongs to the Auth Partner
         */
        return RestoBooking::where('resto_id', $id)->where('status', 1)->orderBy('created_at', 'desc')->get();
    }

    public function acceptRestoBooking($id)
    {
        RestoBooking::where('id', $id)->update([
            'is_accepted' => 1
        ]);
    }

    public function rejectRestoBooking($id)
    {
        RestoBooking::where('id', $id)->update([
            'is_accepted' => 0
        ]);
    }
}
