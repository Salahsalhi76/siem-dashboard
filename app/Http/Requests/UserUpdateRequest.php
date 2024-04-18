<?php

namespace App\Http\Requests;

use App\Rules\NotUsedEmail;
use App\Rules\NotUsedPhone;
use App\Rules\PhoneRule;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:50'],
            'prenoms' => ['required', 'max:50'],
            'email'=>['required','email'],
            'phone'=>['required'],
        ];
    }
}
