import React from "react";
import { TbAward } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="cont">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                About Us
              </p>
            </div>
            <h2 className="h1 leading-normal">
              Our founding{" "}
              <span className="italic font-light underline underline-offset-2 ">
                ethos
              </span>{" "}
              is that supervision is the{" "}
              <span className="italic font-light underline underline-offset-2">
                bedrock
              </span>{" "}
              of good professional practice.
            </h2>
          </div>
          <div className="flex items-center sm:justify-center">
            <Link href="/bookings" className="btn">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid grid-cols-3 gap-5 mx-auto max-w-xl ">
          <div className="inline-block p-8 text-center box bg-white">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-light text-3xl">
              <TbAward />
            </div>
            <p className="h2 text-md">Accredited</p>
          </div>
          <div className="inline-block p-8 text-center box bg-white">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-light text-3xl">
              <GrValidate />
            </div>
            <p className="h2 text-md">Accessible</p>
          </div>
          <div className="inline-block p-8 text-center box bg-white">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-light text-3xl">
              <RiMoneyEuroCircleFill />
            </div>
            <p className="h2 text-md">Affordable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
