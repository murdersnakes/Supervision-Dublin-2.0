import Image from "next/image";
import Form from "./Form";

export default function page() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-2/3 h-3/5 bg-gray-100 -z-10"></div>
      <div className="cont grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="hidden md:flex">
          <Image
            src="/pricing_ill.svg"
            className="object-contain "
            alt="woman"
            width={500}
            height={1000}
            priority
          />
        </div>

        <div className="">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-gray-700 uppercase rounded-full bg-teal-accent-400">
                Bookings
              </p>
            </div>
            <h2 className="h1 mb-4">
              Take the First Step
              <br />
              Towards .....
            </h2>
            <p className="p text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
