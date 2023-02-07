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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('is_valid')->default(0);
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('status')->default(1);
            $table->foreignId('subs_type_id')->constrained()->ondelete('cascade');
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
        Schema::dropIfExists('subscriptions');
    }
};
