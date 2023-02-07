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
        Schema::create('hotel_caracteristics', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('hotel_id')->constrained()->ondelete('cascade');
            $table->boolean('wifi');
            $table->boolean('plasma_tv');
            $table->boolean('swimming_pool');
            $table->boolean('fitness_center');
            $table->boolean('restaurant');
            $table->boolean('parking');
            $table->boolean('smoke_area');
            $table->boolean('pet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotel_caracteristics');
    }
};
