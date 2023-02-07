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
        Schema::create('tour_bookings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('date');
            $table->integer('number_of_person');
            $table->integer('total_price');
            $table->time('hour');
            $table->boolean('is_accepted')->nullable();
            $table->integer('status')->default(1);
            $table->foreignId('tour_id')->constrained()->ondelete('cascade');
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
        Schema::dropIfExists('tour_bookings');
    }
};
