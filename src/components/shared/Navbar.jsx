"use client";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MyLink from "../MyLink";
import { IoHome } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = [
    {
      path: "/",
      text: "Home",
      icon: <IoHome />,
    },

    {
      path: "/timeline",
      text: "Timeline",
      icon: <MdOutlineAccessTime />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <MdOutlineAccessTime />,
    },
  ];

  return (
    <nav className=" shadow-2xl container mx-auto h-16 ">
      <div className="container mx-auto flex items-center justify-between h-full px-6 gap-5 ">
        <Image
          src={logoImg}
          alt="logo"
          priority
          // width={100}
          // height={100}
          // className="h-10 w-auto"
        ></Image>

        <ul className=" hidden md:flex gap-4 justify-between items-center font-bold ">
          {NavItems.map((item, index) => (
            <MyLink key={index} href={item.path} icon={item.icon}>
              {item.text}
            </MyLink>
          ))}
        </ul>

        {/* mobaile menu */}
        <div className="md:hidden relative">
          {/* toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl cursor-pointer"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-base-200 shadow-lg rounded-lg p-4 z-50">
              <ul className="flex flex-col gap-4 font-bold">
                {NavItems.map((item, index) => (
                  <MyLink key={index} href={item.path} icon={item.icon}>
                    {item.text}
                  </MyLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
