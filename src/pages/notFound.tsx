import React from "react";
import Sidebar from "./layout/Sidebar";
import img from "../assets/images/pagenotfound.png";
const NotFound = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="main border-l flex-grow flex justify-center">
        <div className="pt-[6rem] px-10 pb-[3rem] flex justify-center w-full">
          <div>
            <div className="flex justify-center">
              <img src={img} alt="" width={450} />
            </div>

            <p className="font-bold text-lg text-color1 text-center">
              Halaman Tidak di temukan 404 Not Found atau Sedang dalam
              Maintenance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
