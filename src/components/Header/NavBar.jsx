import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
    const links = (
        <div className="flex gap-15 font-bold cursor-pointer">
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/readList'}>Read List</NavLink>
            <NavLink to={'/pagesToRead'}>Pages to Read</NavLink>
        </div>
    );
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="container mx-auto flex">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{" "}
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl font-extrabold">
                            Boi Poka
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>
                    <div className="navbar-end gap-5">
                        <a className="btn bg-[#23BE0A] rounded-lg">Log In</a>
                        <a className="btn bg-[#59C6D2] rounded-lg">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
