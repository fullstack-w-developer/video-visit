import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ManageDevices from "../components/ManageDevices";
import VideoController from "../components/VideoController";
import Vidoe from "../components/Vidoe";

const socket = io("https://robos.upkeytech.com/");

const Home = () => {
 
  useEffect(() => {
    socket.on("message", (data) => {
     alert(data.message)
    });
  }, [socket]);


 
  return (
    <div className="h-screen flex flex-col justify-between ">
      <Header />
      <main className="flex flex-col  lg:flex-row  px-6 justify-between py-6 lg:py-0 h-full lg:h-[75%] lg:space-x-6">
        <Vidoe socket={socket} />
        <VideoController socket={socket} />
      </main>
      <Footer />
      <ManageDevices />
    </div>
  );
};

export default Home;
