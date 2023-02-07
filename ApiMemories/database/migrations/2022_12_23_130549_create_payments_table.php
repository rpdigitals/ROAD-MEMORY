<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
    * Run the migrations.
    *
    * @return void
    */

    public function up() {
        Schema::create( 'payments', function ( Blueprint $table ) {
            $table->id();
            $table->timestamps();
            $table->string( 'for' );
            $table->string( 'payment_number' );
            $table->integer( 'custumer_id' );
            $table->integer( 'partner_id' );
            $table->integer( 'foreignId' );   
            $table->string( 'status' )->default('pending');   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
