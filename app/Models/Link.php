<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Link extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'url'
    ];

    public function users()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
