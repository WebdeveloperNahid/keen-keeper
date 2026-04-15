
import Image from "next/image";
import fecbook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png"
import  twitter from "@/assets/twitter.png"


const Fotter = () => {
  return (
    <div className="text-center bg-green-800 py-10 text-white space-y-4 ">
      <h1 className="text-3xl font-semibold">KeenKeeper</h1>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <div> 
        <div>
          <p>Social Links</p>
        </div>
        <div className="w-6 flex justify-center items-center mx-auto gap-2 my-2">
            <Image src={fecbook} alt="facebook" ></Image>
            <Image src={instagram} alt="instagram" ></Image>
            <Image src={ twitter} alt="twitter" ></Image>
        </div>

      </div>
      <hr />
    

      <div className="flex justify-between container mx-auto ">
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div>
            <span ><span> Privacy Policy </span> <span className="p-5">  Terms of Service </span> Cookies </span>
        </div>
      </div>

    </div>
  );
};

export default Fotter;
