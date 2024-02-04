import React from "react";

const NewsNotFound = () => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Belum Ada Berita!</h2>
                <p>Silahkan buat berita.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => alert("Coming Soon!")}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default NewsNotFound;
