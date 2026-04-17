import DetailsToTimeline from "@/app/context/DetailsToTimeline";
import Image from "next/image";
import { BsChatText } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import {
  MdOutlineNotificationsActive,
  MdOutlineVideoCall,
} from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const homeDetailsPromise = async function () {
  const res = await fetch("http://localhost:3000/ApiData.json");
  const showData = await res.json();
  return showData;
};

const HomeDetailsPage = async ({ params }) => {
  const showDataHome = await homeDetailsPromise();
  console.log(showDataHome, "all DAta");
  const { id } = await params;
  // console.log(id);
  const shows = showDataHome.find((show) => show.id === Number(id));
  console.log(shows);
  return (
    <div className="container mx-auto grid grid-cols-5 grid-rows-3 gap-4 my-10">
      <div className=" col-span-2 row-span-2 bg-fuchsia-200 text-center p-5 rounded-2xl">
        <div>
          <div className="flex justify-center">
            <Image
              className="border rounded-full "
              src={shows.picture}
              alt={shows.name}
              width={100}
              height={100}
            />
          </div>

          <h2 className="text-[20px] font-bold mt-2">{shows.name} </h2>
          <div className="flex justify-center ">
            <h2 className=" bg-red-500 w-20 rounded-2xl my-3  text-white">
              {" "}
              {shows.status}{" "}
            </h2>
          </div>
          <div className="flex gap-2 justify-center items-center">
            {shows.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-400 rounded-2xl px-5 py-1 text-white   "
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-[#555050f5] font-semibold my-2">
            <p>{shows.bio}</p>
          </div>
          <div className="text-[#555050f5] font-semibold">
            Preferred: {shows.email}
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center bg-sky-200 p-2 col-span-1 row-span-1  flex-col rounded-2xl ">
        <span className="font-bold text-2xl">{shows.days_since_contact}</span>
        <p className="text-center font-semibold">Days Since Contact</p>
      </div>
      <div className="flex  justify-center items-center bg-gray-300 p-2 col-span-1 row-span-1  flex-col rounded-2xl ">
        <span className="font-bold text-2xl">{shows.goal}</span>
        <p className="text-center font-semibold">Goal (Days)</p>
      </div>
      <div className="flex  justify-center items-center bg-green-200 p-2 col-span-1 row-span-1  flex-col rounded-2xl ">
        <span className="font-bold text-2xl">{shows.next_due_date}</span>
        <p className="text-center font-semibold">Next Due</p>
      </div>

      <div className="col-span-3 row-span-1 bg-blue-200 rounded-2xl p-10 py-15">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-green-800">Relationship Goal</h2>
          <button className="bg-gray-400 px-2 py-1 rounded-[7px] font-bold ">
            Edit
          </button>
        </div>
        <p className="font-semibold">Connect every 30 days</p>
      </div>

      <div className="col-span-2 rounded-2xl row-span-1  space-y-6">
        <div className="bg-sky-200 text-center flex justify-center items-center gap-2 py-4 rounded-2xl font-semibold">
          <span>
            <MdOutlineNotificationsActive />{" "}
          </span>{" "}
          <h2>Snooze 2 weeks</h2>
        </div>

        <div className="bg-sky-200 text-center flex justify-center items-center gap-2 py-4 rounded-2xl font-semibold">
          <span>
            <FaBoxArchive />{" "}
          </span>{" "}
          <h2>Archive</h2>
        </div>

        <div className=" bg-sky-200 text-center flex justify-center items-center gap-2 py-4 rounded-2xl font-semibold text-red-400">
          <span>
            <RiDeleteBinLine />{" "}
          </span>{" "}
          <h2>Delete</h2>
        </div>
      </div>

      {/* Coling functionaly tosty another section data pass */}

      <div className="col-span-3 row-span-1 bg-blue-200 rounded-2xl p-10 py-15">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-green-800">Quick Check-In</h2>
        </div>

        <div className="grid grid-cols-3 gap-3 py-5 ">
          

          <DetailsToTimeline shows={shows}></DetailsToTimeline>
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsPage;
