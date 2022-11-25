import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImFacebook2, ImLinkedin, ImEnvelop, ImPhone } from "react-icons/im";
import contacts from "../utils/contacts";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="cont px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              src="/logo-light.png"
              alt="logo"
              width={150}
              height={75}
              className="w-36 h-auto object-contain"
            />
          </Link>
          <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Supervision Dublin
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href={contacts.facebook}
              aria-label="facebook link"
              className="text-gray-600 hover:text-sky-500"
            >
              <ImFacebook2 />
            </Link>
            <Link
              href={contacts.linkedin}
              aria-label="linkedin link"
              className="ml-3 text-gray-600 hover:text-blue-600"
            >
              <ImLinkedin />
            </Link>
            <Link
              aria-label="send an email"
              href={`mailto:${contacts.email}`}
              className="ml-3 text-gray-600 hover:text-amber-600"
            >
              <ImEnvelop />
            </Link>
            <Link
              aria-label="call now"
              href={`tel:${contacts.tel}`}
              className="ml-3 text-gray-600 hover:text-lime-600"
            >
              <ImPhone />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
