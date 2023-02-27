<?php

namespace App\Http\Controllers;

use App\Http\Resources\Subscriptions as SubscriptionResource;
use App\Http\Resources\Tour as TourResource;
use App\Models\Car\Car;
use App\Models\Customer;
use App\Models\Hotel\Hotel;
use App\Models\News;
use App\Models\Notification;
use App\Models\Partner;
use App\Models\Resto\Resto;
use App\Models\Subscription;
use App\Models\SubsType;
use App\Models\Tour\Tour;
use App\Models\User;
use App\Models\Util;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function test()
    {
        for ($i = 4; $i < 1000; $i++) {
            $customer = User::where('id', $i)->first();
            if ($customer) {
                $customer->delete();
            }

            # code...
        }

        return 'Done !!';
    }

    public function createPartner(Request $request)
    {
        //verify if the telephones are correct and then create
        $telephone1 = new Util();
        $telephone2 = new Util();
        if (
            $telephone1->isCorrectTelephone($request->first_telephone) and
                $telephone2->isCorrectTelephone($request->second_telephone)
        ) {
            Partner::create($request->all());

            return response()->json(
                [
                    'success' => true,
                    'message' => 'Partner created successfully'
                ]
            );
        }

        return response()->json(
            [
                'success' => false,
                'message' => 'wrong Telephone'
            ]
        );
    }

    public function updatePartner(Request $request, $id)
    {
        //verify if the telephones are correct and then update
        $telephone1 = new Util();
        $telephone2 = new Util();

        if (
            $telephone1->isCorrectTelephone($request->first_telephone) and
                $telephone2->isCorrectTelephone($request->second_telephone)
        ) {
            $partner = Partner::where('id', $id)->first();
            $partner->update($request->all());

            return response()->json(
                [
                    'success' => true,
                    'message' => 'Partner updated successfully'
                ]
            );
        }

        return response()->json(
            [
                'success' => false,
                'message' => 'wrong Telephone'
            ]
        );
    }

    public function Partner($id)
    {
        $partner = Partner::where('id', $id)->first();

        return response()->json(
            [
                'success' => true,
                'data' => $partner
            ]
        );
    }

    public function deletePartner($id)
    {
        $partner = Partner::where('id', $id)->first();
        $partner->update([
            'status' => 0
        ]);

        return response()->json(
            [
                'success' => true,
                'message' => 'Partner deleted successfully'
            ]
        );
    }

    public function allPartner()
    {
        return Partner::where('status', 1)->orderBy('created_at', 'DESC')->get();
    }

    public function createCustomer(Request $request)
    {
        //verify if the telephones are correct and then create
        $telephone = new Util();

        if ($telephone->isCorrectTelephone($request->telephone)) {
            Customer::create($request->all());

            return response()->json(
                [
                    'success' => true,
                    'message' => 'Customer created successfully'
                ]
            );
        }

        return response()->json(
            [
                'success' => false,
                'message' => 'wrong Telephone'
            ]
        );
    }

    public function updateCustomer(Request $request, $id)
    {
        //verify if the telephones are correct and then update
        $telephone = new Util();

        if ($telephone->isCorrectTelephone($request->telephone)) {
            $customer = Customer::where('id', $id)->first();
            $customer->update($request->all());

            return response()->json(
                [
                    'success' => true,
                    'message' => ' customer updated successfully'
                ]
            );
        }

        return response()->json(
            [
                'success' => false,
                'message' => 'wrong Telephone'
            ]
        );
    }

    public function allCustomer()
    {
        return Customer::where('status', 1)->orderBy('created_at', 'DESC')->get();
    }

    public function deleteCustomer($id)
    {
        $customer = Customer::where('id', $id)->first();
        $customer->update([
            'status' => 0
        ]);

        return response()->json(
            [
                'success' => true,
                'message' => 'Customer deleted successfully'
            ]
        );
    }

    public function createNotification(Request $request)
    {
        Notification::create($request->all());

        return response()->json(
            [
                'success' => true,
                'message' => 'notification created successfully'
            ]
        );
    }

    public function deleteNotification(Request $request)
    {
        Notification::where('user_id', $request->user_id)->update(['status' => 0]);

        return response()->json(
            [
                'success' => true,
                'message' => 'notification deleted successfully'
            ]
        );
    }

    public function allNotification($id)
    {
        return Notification::where('user_id', $id)->where('status', 1)->orderBy('created_at', 'DESC')->get();
    }

    public function createSubsType(Request $request)
    {
        SubsType::create($request->all());

        return response()->json(
            [
                'success' => true,
                'message' => 'subsType created successfully'
            ]
        );
    }

    public function deleteSubsType($id)
    {
        SubsType::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json(
            [
                'success' => true,
                'message' => 'subsType deleted successfully'
            ]
        );
    }

    public function updateSubsType(Request $request, $id)
    {
        SubsType::where('id', $id)->update($request->all());

        return response()->json(
            [
                'success' => true,
                'message' => 'subsType updated successfully'
            ]
        );
    }

    public function allSubsType()
    {
        return SubsType::where('status', 1)->orderBy('created_at', 'ASC')->get();
    }

    public function createSubscription(Request $request)
    {
        $substype = Substype::where('id', $request->subs_type_id)->first();
        Subscription::create([
            'start_date' => strtotime(Date('Y-m-d ')),
            'end_date' => strtotime(Date('Y-m-d ')) + $substype->validity,
            'subs_type_id' => $request->substype->id,
            'partner_id' => $request->partner_id,
        ]);

        return response()->json(
            [
                'success' => true,
                'message' => 'Subcription created successfully'
            ]
        );
    }

    public function subscriptionOfPartner($id)
    {
        return response()->json([
            'subs_info' => [
                'subscription' => Subscription::where('partner_id', $id)->first(),
                'subs_type' => Subscription::where('partner_id', $id)->first()->substype(),
                'is_valid' => Subscription::where('partner_id', $id)->first()->isValid(),
            ]
        ]);
    }

    public function deleteSubscription($id)
    {
        Subscription::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json(
            [
                'success' => true,
                'message' => 'Subscription deleted successfully'
            ]
        );
    }

    public function updateSubscription(Request $request, $id)
    {
        $substype = Substype::where('id', $request->subs_type_id)->first();
        $time = ' + ' . (string) $substype->validity . ' days';

        Subscription::where('id', $id)->update([
            'start_date' => (Date('Y-m-d ')),
            'end_date' => date('Y-m-d', (strtotime(Date('Y-m-d') . $time))),
            'subs_type_id' => $substype->id,
            'partner_id' => $request->partner_id,
        ]);

        return response()->json(
            [
                'success' => true,
                'message' => 'Subscription updated successfully',
            ]
        );
    }

    public function allSubscription()
    {
        return Subscription::where('status', 1)->orderBy('created_at', 'DESC')->get();
    }

    public function customerAllBooking($id)
    {
        return Customer::where('id', $id)->first()->allBooking();
    }

    public function customerAllReview($id)
    {
        return Customer::where('id', $id)->first()->allReview();
    }

    public function customerAllWishList($id)
    {
        return Customer::where('id', $id)->first()->allWishList();
    }

    public function partnerAllBooking($id)
    {
        return Partner::where('id', $id)->first()->allBooking();
    }

    public function partnerAllReview($id)
    {
        return Partner::where('id', $id)->first()->allReview();
    }

    public function partnerAllService($id)
    {
        return Partner::where('id', $id)->first()->allService();
    }

    public function partnerNumberOfActiveService($id)
    {
        $tour = Tour::where('status', 1)
                    ->where('partner_id', $id)
                    ->get()
                    ->count();
        $hotel = Hotel::where('status', 1)
                      ->where('partner_id', $id)
                      ->get()
                      ->count();
        $resto = Resto::where('status', 1)
                      ->where('partner_id', $id)
                      ->get()
                      ->count();
        $car = Car::where('status', 1)
                  ->where('partner_id', $id)
                  ->get()
                  ->count();
        $number = $tour + $hotel + $resto + $car;

        return $number;
    }

    public function createNews(Request $request)
    {
        News::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'News created successfully'
        ]);
    }

    public function updateNews(Request $request, $id)
    {
        $news = News::where('id', $id)->first();
        $news->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'News updated successfully'
        ]);
    }

    public function deleteNews($id)
    {
        News::where('id', $id)->update([
            'status' => 0
        ]);

        return response()->json([
            'success' => true,
            'message' => 'News deleted successfully'
        ]);
    }

    public function allNews()
    {
        return News::where('status', 1)->orderBy('created_at', 'DESC')->get();
    }

    public function allNewsOfPartner($id)
    {
        $news = News::where('partner_id', $id)->where('status', 1)
                                              ->orderBy('created_at', 'DESC')
                                              ->get();

        return $news;
    }
}
