"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navTogle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOnResize = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Close menu on resize
  useEffect(() => {
    window.addEventListener("resize", closeMenuOnResize);
    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [isOpen]);

  return (
    <div className="bg-bg">
      <nav className="flex items-center justify-around max-w-screen-lg mx-auto h-16">
        <Image src="/logo.svg" width={150} height={150} alt="logo_img" />

        <input type="text" className=" p-2 rounded-lg outline-none" />

        {/* Hamburger Icon (hidden on larger screens)*/}
        <div className="block sm:hidden">
          <button id="menu-toggle" onClick={navTogle}>
            <svg
              className="fill-accent"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zM3 9h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zM3 13h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {isOpen ? (
          <ul className="absolute top-16 right-0 flex-col text-accent text-xl font-bold bg-bg">
            <li className="p-4">
              <Link onClick={navTogle} className="py-4" href="/">
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link onClick={navTogle} className="py-4" href="/products">
                Products
              </Link>
            </li>
            <li className="p-4">
              <Link onClick={navTogle} className="py-4" href="/about">
                About
              </Link>
            </li>
            <li className="p-4">
              <Link onClick={navTogle} className="py-4" href="/login">
                Login
              </Link>
            </li>
          </ul>
        ) : null}

        {/* Navbar Links (hidden on smaller screens initially */}
        <ul className="hidden sm:flex text-accent text-xl font-bold">
          <li className="p-3">
            <Link className="py-4" href="/">
              Home
            </Link>
          </li>
          <li className="p-3">
            <Link className="py-4" href="/products">
              Products
            </Link>
          </li>
          <li className="p-3">
            <Link className="py-4" href="/about">
              About
            </Link>
          </li>
          <li className="p-3">
            <Link className="py-4" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
