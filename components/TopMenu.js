"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useMenuStore } from "@/store/useMenuStore";

function TopMenu() {
  const { isOpen, openMobileMenu } = useMenuStore();

  return (
    <section className="px-[40px] bg-black py-4 z-10 max-xs:px-5" id="home">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-5">
        {/*上 */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link href={"/"}></Link>
          {/*トグル */}
          <div
            className="text-5xl mt-1 z-50 text-white"
            onClick={openMobileMenu}
          >
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>

        {/*下 */}
        <div className="flex justify-between w-full items-center max-xs:flex-col max-xs:items-start max-xs:gap-2">
          <div className="flex flex-row gap-2 items-center text-lg font-bold"></div>
        </div>
      </div>
    </section>
  );
}

export default TopMenu;
