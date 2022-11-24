import Image from "next/image";
import React from "react";
import { TbAward } from "react-icons/tb";

export default function FullBio() {
  return (
    <div className="relative z-0">
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gray-100 -z-10"></div>
      <div className="cont">
        <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          About Kathryn
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <h2 className="h1">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </h2>
            <p className="p mt-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire,
            </p>
          </div>
          <div className="">
            <Image
              className="w-full box"
              src="/woman_3.webp"
              alt="people discussing on board"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <h2 className="h1">Our Mission</h2>
            <p className="p text-gray-600 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
            <p className="p text-gray-600 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div className="box p-4 border-l-4 border-accent bg-gray-50 flex items-start">
              <TbAward size={40} />
              <div className="p-2">
                <h3 className="h2">Lorem ipsum dolor sit amet.</h3>
                <p className="p text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam necessitatibus quasi quia.
                </p>
              </div>
            </div>
            <div className="box p-4 border-l-4 border-accent bg-gray-50 flex items-start">
              <TbAward size={40} />
              <div className="p-2">
                <h3 className="h2">Lorem ipsum dolor sit amet.</h3>
                <p className="p text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam necessitatibus quasi quia.
                </p>
              </div>
            </div>
            <div className="box p-4 border-l-4 border-accent bg-gray-50 flex items-start">
              <TbAward size={40} />
              <div className="p-2">
                <h3 className="h2">Lorem ipsum dolor sit amet.</h3>
                <p className="p text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam necessitatibus quasi quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
