<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable {
    use LaratrustUserTrait;
    use HasApiTokens, HasFactory, Notifiable;

    /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
    protected $fillable = [

        'email',
        'password',
    ];

    /**
    * The attributes that should be hidden for serialization.
    *
    * @var array<int, string>
    */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
    * The attributes that should be cast.
    *
    * @var array<string, string>
    */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function partner() {
        return $this->hasOne( Partner::class )->first();
    }

    public function customer() {

        return $this->hasOne( Customer::class )->first();
    }

    public function notification() {
        return $this->hasMany( Notification::class )->first();
    }

    public function isCustomer() {
        if ( $this->customer() ) {
            return true;
        }
        return false;
    }

    public function isPartner() {
        if ( $this->partner() ) {
            return true;
        }
        return false;
    }
}
