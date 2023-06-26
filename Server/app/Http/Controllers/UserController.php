<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('posts')->get();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $user = User::create($request->only(['name', 'email']));

        foreach ($request->posts as $post) {
            $user->posts()->create($post);
        }

        return response()->json($user, 201);
    }

    public function show($id)
    {
        $user = User::with('posts')->findOrFail($id);
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->only(['name', 'email']));

        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(null, 204);
    }
}
