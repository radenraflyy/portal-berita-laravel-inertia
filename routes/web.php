<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Get Data
Route::get('/', [NewsController::class, 'index'])->name('dashboard');
Route::group(['middleware' => ['auth', 'verified']], function () {
    // Create
    Route::get('/blog/create', [NewsController::class, 'show'])->name('blog.create');
    Route::post('/news', [NewsController::class, 'store']);

    // Update
    Route::get('/blog/edit/{id}', [NewsController::class, 'edit']);
    Route::put('/news/{id}', [NewsController::class, 'update']);

    // DELETE
    Route::post('/news/delete', [NewsController::class, 'destroy'])->name('news.delete');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

require __DIR__ . '/auth.php';
