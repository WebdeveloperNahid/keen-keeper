import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MyLink from "../MyLink";

const Navbar = () => {
  const NavItems = [
    {
      path: "/",
      text: "Home",
    },

    {
      path: "/timeline",
      text: "Timeline",
    },
    {
      path: "/stats",
      text: "Stats",
    },
  ];

  return (

    <nav className="bg-green-500 shadow-2xl w-[90%] h-16">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
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
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
