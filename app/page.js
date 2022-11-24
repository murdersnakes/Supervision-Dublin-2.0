import React from "react";
import Benefits from "./Benefits";
import Bio from "./Bio";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

export default function page() {
  return (
    <>
      <Hero />
      <Benefits />
      <Bio />
      <Testimonial />
      <Pricing />
    </>
  );
}
