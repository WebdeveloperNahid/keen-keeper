"use client";
import React, { useContext } from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { NotificationContext } from "@/app/context/ForDetatilsToTime";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { toast } from "react-toastify";

const DetailsToTimeline = ({ shows }) => {
  const { notification, setNotification } = useContext(NotificationContext);

  const handleDetailsToTimeline = (type) => {
    setNotification([...notification, { ...shows, type }]);
    toast.success(`${type} added to timeline`)
  };

  return (
    <>
      <button onClick={() => handleDetailsToTimeline("call")} className="p bg-green-200 rounded-2xl text-center font-semibold pt-1 pb-1">
        <span className="flex justify-center"><FaPhoneAlt /></span>
        <p>Call</p>
      </button>

      <button onClick={() => handleDetailsToTimeline("text")} className="p bg-green-200 rounded-2xl text-center font-semibold pt-1 pb-1">
        <span className="flex justify-center"><BsChatText /></span>
        <p>Text</p>
      </button>

      <button onClick={() => handleDetailsToTimeline("video")} className="p bg-green-200 rounded-2xl text-center font-semibold pt-1 pb-1">
        <span className="flex justify-center"><MdOutlineVideoCall /></span>
        <p>Video</p>
      </button>
    </>
  );
};

export default DetailsToTimeline;