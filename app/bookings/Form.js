"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Form() {
  const [student, setStudent] = useState(false);
  const [standard, setStandard] = useState(true);

  const handleClientType = (event) => {
    console.log(event.target.value);
    if (event.target.value === "no") {
      setStudent(false);
      setStandard(true);
    } else setStudent(true);
    setStandard(false);
  };

  //   console.log(standard);
  return (
    <form className="max-w-sm">
      <div className="grid grid-cols-1 gap-5">
        <input
          placeholder="Name"
          required="required"
          type="text"
          className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 box"
        />
        <input
          placeholder="Email"
          required="required"
          type="text"
          className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 box"
        />
        <input
          placeholder="Phone"
          required="required"
          type="number"
          className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 box"
        />
        <div className="">
          <label htmlFor="date">Preferred date and time</label>
          <input
            placeholder="Preferred Date and Time"
            required=""
            id="date"
            type="datetime-local"
            className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 box"
          />
        </div>
        <div className="">
          <label htmlFor="date">Are you a student?</label>
          <select
            defaultValue="no"
            className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 box"
            onChange={(event) => handleClientType(event)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      </div>
      <div className="flex items-center mt-6 space-x-4">
        <button type="submit" className="btn">
          Submit Request
        </button>
        <Link
          href={"https://buy.stripe.com/test_4gw8xHf0Cc5t9eEeUV"}
          className={student ? "btn-2 block" : "hidden"}
          id="student_btn"
        >
          Pay Now
        </Link>
        <Link
          href={"https://book.stripe.com/test_eVaeW58CeedBeyY144"}
          className={standard ? "btn-2 block" : "hidden"}
          id="standard_btn"
        >
          Pay Now
        </Link>
      </div>
    </form>
  );
}
