"use client";
import React, { useContext, useState } from "react";
import { NotificationContext } from "@/app/context/ForDetatilsToTime";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";

const iconMap = {
  call: <FaPhoneAlt />,
  text: <BsChatText />,
  video: <MdOutlineVideoCall />,
};

const TimelinePage = () => {
  const { notification, setNotification } = useContext(NotificationContext);

  const [filter, setFilter] = useState("all");
   // filter logic
  const filteredData =
    filter === "all"
      ? notification
      : notification.filter((item) => item.type === filter);


  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl container mx-auto my-10">Timeline</h1>
      {/*  Filter Section */}
      <div className="mb-5">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>
      
      {filteredData.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        filteredData.map((item, index) => (
          <div key={index} className="p-3 m-2">
            <div className="flex justify-normal items-center gap-5 font-bold shadow-2xl border-none p-3">
              <span>{iconMap[item.type]}</span>
              <div>
                <h2>{item.name}</h2>
                <h2>{item.next_due_date}</h2>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TimelinePage;