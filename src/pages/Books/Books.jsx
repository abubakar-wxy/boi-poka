import React, { Suspense, useState } from 'react';
import Book from './Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // },[])

    // const bookPromise = fetch("booksData.json").then((res) => res.json());

    return (
        <div>
            <h1 className="text-3xl text-center my-10 font-bold ">Books</h1>
            <Suspense fallback={<span>Loading.....</span>}>
                {data.map((data) => <Book data={data} key={data.bookId}></Book>)}
            </Suspense>
            {/* <div>
                {allBooks.map((books)=> <Book books={books} key={books.bookId}></Book>)}
            </div> */}
        </div>
    );
};

export default Books;