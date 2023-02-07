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
        Schema::create('resto_wish_lists', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
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
        Schema::dropIfExists('resto_wish_lists');
    }
};
