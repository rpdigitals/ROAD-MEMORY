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
        Schema::create('resto_caracteristics', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('wifi');
            $table->boolean('pet');
            $table->boolean('parking');
            $table->boolean('smoke_area');
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
        Schema::dropIfExists('resto_caracteristics');
    }
};
