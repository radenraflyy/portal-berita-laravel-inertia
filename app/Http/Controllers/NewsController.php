<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = new NewsCollection(News::orderBy('id', 'desc')->paginate(10));
        return Inertia::render('Dashboard', [
            'news' => $news,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return redirect()->back()->with('message', 'Berita Berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $news = News::orderBy('id', 'desc')->where('author', auth()->user()->email)->get();
        return Inertia::render('Blog/create', [
            'newsAuthor' => $news
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = News::find($id);
        return Inertia::render('Blog/edit', [
            'item' => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        News::where('id', $id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category
        ]);
        return to_route('blog.create')->with('message', 'Berita Berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'Berita Berhasil dihapus');
    }
}
