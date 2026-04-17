"use client";
import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

const ForDetailsToTime = ({children}) => {
    const [notification,setNotification] = useState([]);

    const data = {
        notification,
        setNotification,
    };
    return (
        <NotificationContext.Provider value= {data}>
            {children}
        </NotificationContext.Provider>
    );
};

export default ForDetailsToTime;