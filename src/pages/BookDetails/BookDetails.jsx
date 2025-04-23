import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDb';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image, author } = singleBook;
    

    const handleMarkAsRead = id => {
        addToStoredDB(id)
    }

    return (
        <div className="container mx-auto my-25 flex items-center justify-around">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="bg-[#F3F3F3] mx-5 mt-5 rounded-xl">
                    <img className="w-40 h-65 py-6" src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-between my-10">
                        {/* <button className="badge badge-outline px-10 py-5 cursor-pointer btn btn-primary">hello</button>
                        <button className="badge badge-outline px-10 py-5 cursor-pointer btn btn-primary">Gello</button> */}
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-soft btn-primary">
                            Mark As Read
                        </button>
                        <button className="btn btn-soft btn-primary">
                            Add to WishList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;