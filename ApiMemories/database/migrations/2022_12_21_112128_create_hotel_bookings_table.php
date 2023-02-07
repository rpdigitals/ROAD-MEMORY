<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_bookings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('date');
            $table->integer('total_price');
            $table->integer('status')->default(1);
            $table->integer('number_of_nigth');
            $table->boolean('is_accepted')->nullable();
            $table->foreignId('hotel_id')->constrained()->ondelete('cascade');
            $table->foreignId('room_id')->constrained()->ondelete('cascade');
            $table->foreignId('customer_id')->constrained()->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotel_bookings');
    }
};
