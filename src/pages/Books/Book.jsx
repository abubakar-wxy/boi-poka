// import React, { use } from 'react';

import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    // console.log(data)

    const {bookName, image, author, rating, category, bookId} = singleBook;
    // console.log(singleBook);

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="bg-[#F3F3F3] mx-5 mt-5 rounded-xl">
                    <img className="w-40 h-65 py-6" src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
