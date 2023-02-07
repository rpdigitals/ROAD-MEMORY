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
        Schema::create('resto_bookings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('total_price');
            $table->integer('number_of_tables');
            $table->date('date');
            $table->boolean('is_accepted')->nullable();
            $table->integer('status')->default(1);
            $table->foreignId('customer_id')->constrained()->ondelete('cascade');
            $table->foreignId('resto_id')->constrained()->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resto_bookings');
    }
};
