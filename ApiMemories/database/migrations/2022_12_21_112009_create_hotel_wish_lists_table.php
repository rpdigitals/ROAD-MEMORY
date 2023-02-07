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
        Schema::create('hotel_wish_lists', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('hotel_id')->constrained()->ondelete('cascade');
            $table->foreignId('customer_id')->constrained()->ondelete('cascade');
            $table->integer('status')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotel_wish_lists');
    }
};
