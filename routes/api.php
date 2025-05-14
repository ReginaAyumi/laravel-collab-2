<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LlamaController;
use App\Models\Product;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/llama', [LlamaController::class, 'ask']);


Route::get('/products', function () {
    $products = Product::all(); // Ambil semua data produk
    return response()->json([
        'products' => $products,
        'success' => session('success'),
    ]);
});

Route::delete('/products/{id}', function ($id) {
    $product = Product::findOrFail($id);
    $product->delete();

    // Menambahkan session success message
    session()->flash('success', 'Product deleted successfully!');
    return response()->json(['message' => 'Product deleted successfully!']);
});
