import Image from "next/image";
import React from "react";
import { MdOutlineSchool } from "react-icons/md";

export default function Bio() {
  return (
    <div className="bg-white">
      <div className="cont grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <h2 className="h1 mb-3">Kathryn O&apos; Reilly</h2>
          <p className="p mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi
            eligendi omnis saepe nulla nostrum libero delectus excepturi dicta
            dolorem nobis amet doloribus quibus
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="box border-l-4 border-accent p-4">
              <h3 className="h2">I.A.C.P Certified</h3>
              <p className="p text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                tempora!
              </p>
            </div>
            <div className="box border-l-4 border-accent p-4">
              <h3 className="h2">I.A.C.P Certified</h3>
              <p className="p text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                tempora!
              </p>
            </div>
            <div className="box border-l-4 border-accent p-4">
              <h3 className="h2">I.A.C.P Certified</h3>
              <p className="p text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                tempora!
              </p>
            </div>
            <div className="box border-l-4 border-accent p-4">
              <h3 className="h2">I.A.C.P Certified</h3>
              <p className="p text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                tempora!
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/woman_2.webp"
          alt="woman"
          width={600}
          height={400}
          className="box object-cover h-96"
        />
      </div>
    </div>
  );
}
