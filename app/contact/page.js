import Image from "next/image";
import Link from "next/link";
import React from "react";
import contacts from "../../utils/contacts";
import { HiOutlineHome, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function page() {
  return (
    <div>
      <div className="cont">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image
            src="/city.svg"
            className="object-contain "
            alt="woman"
            width={500}
            height={1000}
            priority
          />
          <div>
            <h2 className="h1">Need to get in touch?</h2>
            <p className="p mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatem molestiae impedit placeat, nihil, corporis officiis
              tempore libero et culpa nesciunt...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href={`tel:${contacts.tel}`}
                className="cursor pointer box border-l-4 border-accent p-4 flex items-center space-x-4 group hover:bg-accent bg-gray-100"
              >
                <HiOutlinePhone size={40} />
                <span className="text-lg font-bold group-hover:underline">
                  087 221 0775
                </span>
              </Link>
              <Link
                href={`mailto:${contacts.email}`}
                className="cursor pointer box border-l-4 border-accent p-4 flex items-center space-x-4 group hover:bg-accent bg-gray-100"
              >
                <HiOutlineMail size={40} />
                <span className="text-lg font-bold group-hover:underline">
                  {contacts.email}
                </span>
              </Link>
              <Link
                href={
                  "https://www.google.com/search?q=dublin%20therapy&rlz=1C1GCEA_enIE967IE967&oq=dublin+therapy&aqs=chrome.0.69i59j0i512j46i175i199i512l2j0i22i30j69i60l3.2704j0j9&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsYyEErmpapaYjOLWphicGGO4-Pzfg:1669392359204&rflfq=1&num=10&rldimm=17077753392257135212&lqi=Cg5kdWJsaW4gdGhlcmFweVoQIg5kdWJsaW4gdGhlcmFweZIBCWNvdW5zZWxvcqoBDxABKgsiB3RoZXJhcHkoAA&ved=2ahUKEwjCnL6U28n7AhWLbcAKHQuWAt4QvS56BAgQEAE&sa=X&rlst=f#rlfi=hd:;si:17077753392257135212,l,Cg5kdWJsaW4gdGhlcmFweVoQIg5kdWJsaW4gdGhlcmFweZIBCWNvdW5zZWxvcqoBDxABKgsiB3RoZXJhcHkoAA;mv:[[53.391235599999995,-6.111665899999999],[53.243253700000004,-6.2865559]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                }
                className="cursor pointer box border-l-4 border-accent p-4 flex items-center space-x-4 group hover:bg-accent md:col-span-2 bg-gray-100"
              >
                <HiOutlineHome size={40} />
                <span className="text-lg font-bold group-hover:underline">
                  144 Drumcondra Rd Lower, <br />
                  Dublin 9, D09 H5X6
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
