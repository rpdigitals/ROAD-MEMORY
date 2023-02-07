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
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('picture');
            $table->integer('price');
            $table->string('description');
            $table->string('address');
            $table->integer('visit_hour');
            $table->string('latitude');
            $table->string('longitude');
            $table->string('languages');
            $table->boolean('disponibility')->default(1);
            $table->string('open_days_hours');
            $table->integer('status')->default(1);
            $table->foreignId('partner_id')->constrained()->ondelete('cascade');
            $table->foreignId('tour_category_id')->constrained()->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tours');
    }
};
