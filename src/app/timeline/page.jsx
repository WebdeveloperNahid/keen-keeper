"use client";
import React, { useContext } from "react";
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

  return (
    <div>
      <h1 className="font-bold text-2xl container mx-auto my-10">Timeline</h1>
      {notification.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        notification.map((item, index) => (
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