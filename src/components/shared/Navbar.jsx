import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MyLink from "../MyLink";
import { IoHome } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";

const Navbar = () => {
  const NavItems = [
    {
      path: "/",
      text: "Home",
      icon: <IoHome />
    },

    {
      path: "/timeline",
      text: "Timeline",
      icon: <MdOutlineAccessTime />
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <MdOutlineAccessTime />
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

        <ul className="flex gap-4 justify-between items-center font-bold ">
          {NavItems.map((item, index) => (
            <MyLink key={index} href={item.path} icon ={item.icon}>
              {item.text}
            </MyLink>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
