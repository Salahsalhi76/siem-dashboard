<?php

namespace App\Http\Requests;

use App\Rules\NotUsedEmail;
use App\Rules\NotUsedPhone;
use App\Rules\PhoneRule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return is_null($this->user());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email'=>['required','email',new NotUsedEmail()],
            'phone'=>['required','phone',new NotUsedPhone(),new PhoneRule()],
            'password'=>'required|min:6',
            'confirm_password'=>'required|same:password',
        ];
    }
}
