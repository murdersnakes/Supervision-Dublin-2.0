"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="z-50 bg-dark">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-24 text-white"
            >
              <Image
                src="/logo-dark.png"
                alt="logo"
                width={150}
                height={75}
                className="w-36 h-auto object-contain"
              />
            </Link>
            
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li className="relative">
                <Link
                  href="/about-us"
                  aria-label="About us"
                  className="navlink"
                >
                  About us
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/bookings"
                  aria-label="bookings"
                  className="navlink"
                >
                  Bookings
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/articles"
                  aria-label="Articles"
                  className="navlink"
                >
                  Articles
                </Link>
              </li>
              <li className="relative">
                <Link href="/faq" aria-label="F.A.Q." className="navlink">
                  FAQ
                </Link>
              </li>
              <li className="relative">
                <Link href="/contact" aria-label="Contact" className="navlink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="btn"
              onClick={() => setIsMenuOpen(true)}
            >
              <BiMenu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-light border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center mr-8 text-dark font-bold tracking-widest "
                      >
                        <Image
                          src="/logo-light.png"
                          alt="logo"
                          width={150}
                          height={75}
                          className="w-36 h-auto object-contain"
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="btn"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <BiX />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 z-50">
                      <li className="relative">
                        <Link
                          href="/about-us"
                          aria-label="About us"
                          className="navlink text-dark"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href="/bookings"
                          aria-label="bookings"
                          className="navlink text-dark"
                        >
                          Bookings
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href="/articles"
                          aria-label="Articles"
                          className="navlink text-dark"
                        >
                          Articles
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href="/faq"
                          aria-label="F.A.Q."
                          className="navlink text-dark"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href="/contact"
                          aria-label="Contact"
                          className="navlink text-dark"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
