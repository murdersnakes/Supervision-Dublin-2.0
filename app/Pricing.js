import React from "react";

export default function Pricing() {
  return (
    <div className="relative bg-medium z-0 ">
      <div className="absolute bottom-0 w-full h-1/3 bg-white -z-10"></div>
      <div className="relative cont z-10">
        <div className="text-center max-w-xl mx-auto">
          <h4 className="h1 text-dark">Affordable for everyone</h4>
          <p className="mt-4 p text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            sequi, facere sint minus suscipit sed, ullam hic cumque facilis
            porro omnis iste
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div class="p-8 bg-dark rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Standard Session
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    €80
                  </p>
                  <p class="text-lg text-gray-300">/ session</p>
                </div>
              </div>

              <button type="submit" class="btn w-full">
                Book a Session
              </button>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-dark rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-dark rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-dark rounded-b opacity-25" />
          </div>
          <div>
            <div class="p-8 bg-dark rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Student Rate
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    €65
                  </p>
                  <p class="text-lg text-gray-300">/ session</p>
                </div>
              </div>

              <button type="submit" class="btn w-full">
                Book a Session
              </button>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-dark rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-dark rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-dark rounded-b opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
}
