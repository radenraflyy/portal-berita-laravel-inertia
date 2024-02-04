import React from "react";
import { Link } from "@inertiajs/react";

const NewsListCard = ({ news, edit }) => {
    return news?.map((item, index) => (
        <div
            key={index}
            className="mx-auto card w-full lg:w-[23rem] bg-base-100 shadow-xl"
        >
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item?.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item?.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{item?.category}</div>
                    <div className="badge badge-outline">{item?.author}</div>
                </div>
                {edit && (
                    <div className="card-actions mt-5">
                        <Link
                            href={`/blog/edit/${item?.id}`}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Edit
                        </Link>
                        <Link
                            href={route("news.delete")}
                            method="post"
                            data={{ id: item?.id }}
                            as="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Delete
                        </Link>
                    </div>
                )}
            </div>
        </div>
    ));
};

export default NewsListCard;
