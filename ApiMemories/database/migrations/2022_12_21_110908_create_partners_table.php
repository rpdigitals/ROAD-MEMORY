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
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('society_name');
            $table->string('ceo_name');
            $table->string('assistant_name');
            $table->string('first_telephone');
            $table->string('second_telephone');
            $table->string('verification_file')->nullable();
            $table->integer('status')->default(1);
            $table->boolean('is_verified')->default(false);
            $table->foreignId('user_id')->constrained()->ondelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partners');
    }
};
