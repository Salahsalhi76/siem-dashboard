<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PhoneRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {


        $pattern = "/^0[0-9]{6,14}$/";

        if (preg_match($pattern, $value)) {
            $fail('Invalid phone number');
        }
    }
}
