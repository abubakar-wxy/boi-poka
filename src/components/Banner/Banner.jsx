import React from 'react';
import bookImage from "../../assets/book01.jpeg";

const Banner = () => {
    return (
        <div className="my-25">
            <div className="container mx-auto bg-[#F7F7F7] p-15 flex justify-around items-center rounded-3xl">
                <div className="">
                    <h1 className="text-6xl lg:w-150 font-bold mb-18">
                        Books to freshen up your bookshelf
                    </h1>
                    <button className="btn btn-primary w-45 h-13 bg-[#23BE0A] shadow-none border-none font-bold text-xl">
                        View The List
                    </button>
                </div>
                <div className="lg:w-110">
                    <img src={bookImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;