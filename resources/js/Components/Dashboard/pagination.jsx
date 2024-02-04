import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const firstPage = meta.links[1].url;
    const lastPage = meta.links[meta.links.length - 2].url;
    const current = meta.current_page;
    return (
        <div className="join">
            <Link href={firstPage} className="join-item btn">
                First Page
            </Link>
            <Link href={prev} className="join-item btn">
                «
            </Link>
            <button className="join-item btn">{current}</button>
            <Link href={next} className="join-item btn">
                »
            </Link>
            <Link href={lastPage} className="join-item btn">
                last Page
            </Link>
        </div>
    );
};

export default Pagination;
