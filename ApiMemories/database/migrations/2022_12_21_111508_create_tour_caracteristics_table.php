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
        Schema::create('tour_caracteristics', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('tour_guide');
            $table->boolean('animals');
            $table->boolean('dinner');
            $table->boolean('smoke_area');
            $table->boolean('children');
            $table->foreignId('tour_id')->constrained()->ondelete('cascade');

            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tour_caracteristics');
    }
};
