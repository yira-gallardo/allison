import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-[100vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/banner.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-16 mt-4 text-lg font-bold">
          <button onClick={() => scrollToSection("tour")}>TOUR</button>
          <a href="#musica" className="">
            MUSICA
          </a>
          <a href="#merch" className="">
            MERCH
          </a>
          <Link
            href="https://www.youtube.com/channel/UCFCFBfGHOv8wItbjwQPktyA"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            VIDEOS
          </Link>
          <a href="#galeria" className="">
            GALERIA
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex justify-between items-center p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-white z-30">
            <div className="flex flex-col items-center space-y-4 py-8">
              <button onClick={() => scrollToSection("tour")}>TOUR</button>
              <a href="#musica" className="">
                MUSICA
              </a>
              <a href="#merch" className="">
                MERCH
              </a>
              <Link
                href="https://www.youtube.com/channel/UCFCFBfGHOv8wItbjwQPktyA"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                VIDEOS
              </Link>
              <a href="#galeria" className="">
                GALERIA
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
