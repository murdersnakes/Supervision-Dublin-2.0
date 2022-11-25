import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gray-100 -z-10"></div>
      <div className="cont grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/tree.svg"
          alt="tree"
          width={600}
          height={400}
          className="object-contain"
        />
        <div className="prose-lg">
          <h3 className="font-bold">Kathryn is the best!!</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            veritatis, tempore minus perspiciatis laudantium veniam mollitia,
            omnis vitae quo optio ratione neque eveniet quos quis. Veniam quasi,
            illum accusantium esse nisi ratione vel expedita, aliquam dolorum
            laboriosam eius totam excepturi doloribus dicta. Perferendis error
            nam autem voluptates qui voluptate numquam, temporibus aspernatur
            dicta. Aut repudiandae vero culpa obcaecati dicta iure velit enim,
            hic mollitia iusto?
          </p>

          <blockquote className="font-bold border-l-4 border-accent">
            Anna Smith <br />
            <span className="font-normal italic">A woman on the edge</span>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
