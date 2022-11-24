import React from "react";
import { HiOutlineUserGroup, HiOutlineLocationMarker } from "react-icons/hi";
import { TbHeadset } from "react-icons/tb";
import { RiMoneyEuroCircleFill } from "react-icons/ri";

export default function Benefits() {
  return (
    <div className="bg-white">
      <div className="cont grid grid-cols-2 md:grid-cols-4 gap-10 items-start">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl">
            <TbHeadset />
          </div>
          <h2 className="h2">Online Sessions Available</h2>
          <p className="p mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            labore quas quis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl">
            <HiOutlineLocationMarker />
          </div>
          <h2 className="h2">Great Central Location</h2>
          <p className="p mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            labore quas quis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl">
            <HiOutlineUserGroup />
          </div>
          <h2 className="h2">Group Sessions Available</h2>
          <p className="p mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            labore quas quis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4 flex items-center justify-center bg-accent text-dark rounded-full w-20 h-20 text-4xl">
            <RiMoneyEuroCircleFill />
          </div>
          <h2 className="h2">Reduced Student Rate</h2>
          <p className="p mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            labore quas quis.
          </p>
        </div>
      </div>
    </div>
  );
}
