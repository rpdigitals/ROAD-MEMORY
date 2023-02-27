<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Util extends Model
{
    use HasFactory;

    public function isCorrectTelephone($telephone)
    {
        // verify if the phone number is Togolese, and return a bool
        $isCorrectTelephone = 1;
        $array = ['90', '91', '92', '93', '96', '97', '98', '99', '70', '79'];
        if (in_array(substr($telephone, 4, 2), $array) == false or substr($telephone, 0, 4) !== '+228' or strlen($telephone) !== 12) {
            $isCorrectTelephone = 0;
        }

        return $isCorrectTelephone;
    }
}
