import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSec = () => {
  return (
    <>
      <div className="     
      mr-24 mt-[53px] ml-24 sm:ml-4 sm:mr-4
      flex flex-col sm:flex-row items-center justify-between ">
        <Image
          src="/images/hero-section.jpg"
          alt="Hero Image"
          width={1293}
          height={657}
          className="rounded-r-2xl object-cover  "
          priority
        ></Image>
      </div>
    </>
  );
};

export default HeroSec;
