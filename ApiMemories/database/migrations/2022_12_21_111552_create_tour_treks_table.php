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
        Schema::create('tour_treks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('duration');
            $table->string('place');
            $table->date('date');
            $table->integer('price');
            $table->foreignId('partner_id')->constrained()->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tour_treks');
    }
};
