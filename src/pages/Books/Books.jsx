import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // },[])

    // const bookPromise = fetch("booksData.json").then((res) => res.json());


    return (
        <div className="container mx-auto my-20">
            <h1 className="text-3xl text-center my-10 font-bold ">Books</h1>
            <Suspense fallback={<span>Loading.....</span>}>
                <div className="w-fit mx-auto grid lg:grid-cols-3 gap-10 justify-between">
                    {data.map((singleBook) => (
                        <Book
                            singleBook={singleBook}
                            key={singleBook.bookId}
                        ></Book>
                    ))}
                </div>
            </Suspense>
            {/* <div>
                {allBooks.map((books)=> <Book books={books} key={books.bookId}></Book>)}
            </div> */}
        </div>
    );
};

export default Books;