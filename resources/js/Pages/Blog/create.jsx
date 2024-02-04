import NewsListCard from "@/Components/Dashboard/NewsList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function BlogCreate(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
        setTimeout(() => {
            setIsNotif(false);
        }, 2500);
    };

    // console.log(props.newsAuthor);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Blog
                </h2>
            }
        >
            <Head title="Add Blog" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 text-black">
                        <div>
                            {isNotif && (
                                <div
                                    role="alert"
                                    className="alert alert-success"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        color="white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-white">
                                        {props.flash.message}
                                    </span>
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered w-full m-2 bg-white shadow-sm"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full m-2 bg-white shadow-sm"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="input input-bordered w-full m-2 bg-white shadow-sm"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        />
                        <button
                            onClick={() => handleSubmit()}
                            className="btn btn-primary m-2 text-white"
                        >
                            SUBMIT
                        </button>
                    </div>
                    <div className="p-6 text-white flex justify-center flex-wrap gap-y-5">
                        <NewsListCard news={props.newsAuthor} edit />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
