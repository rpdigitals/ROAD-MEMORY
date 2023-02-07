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
        Schema::create('restos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('picture');
            $table->string('description');
            $table->string('latitude');
            $table->string('longitude');
            $table->string('address');
            $table->boolean('disponibility')->default(true);
            $table->integer('table_price');
            $table->string('open_days_hours');
            $table->integer('status')->default(1);
            $table->foreignId('partner_id')->constrained()->ondelete('cascade');
            $table->foreignId('resto_category_id')->constrained()->ondelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restos');
    }
};
