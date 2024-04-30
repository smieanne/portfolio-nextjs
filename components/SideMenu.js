"use client";

import { sideMenuLinks } from "@/constants/sideMenuLinks";
import { useMenuStore } from "@/store/useMenuStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

function SideMenu() {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState(sideMenuLinks[0]);
  const handleLinkClick = (link) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  const handleScroll = () => {
    const sections = sideMenuLinks.map((link) =>
      document.getElementById(link.sectionId)
    );
    const scrollPosotion = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosotion + 150) {
          setActiveLink(sideMenuLinks[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <section
      className={` bg-black bg-opacity-50 fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-[80px] max-lg:max-w-[146px]
      border-r
    ${isOpen ? "max-lg:block" : "max-md:hidden"}`}
    >
      <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
        {/* 上 */}

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={"/assets/face.jpg"}
            width={100}
            height={100}
            alt="ORIGIN.Doc Imege"
            className="rounded-full"
          />
          <p className="font-bold text-white">M.S Portfolio</p>
        </div>
        {/* 中 サイドメニュー*/}
        <div>
          {sideMenuLinks.map((link, index) => {
            const isActive = activeLink === link;
            return (
              <a
                key={link.label}
                href={link.route}
                className={`relative flex justify-center rounded-lg p-2 text-white hover:bg-black   hover:text-[22px] 
                ${
                  isActive
                    ? "bg-black bg-opacity-50 text-white px-10 text-[22px]"
                    : ""
                }
                `}
                onClick={() => handleLinkClick(link)}
                style={{ transform: isActive ? "translateY(2px)" : "none" }}
              >
                <p>{link.label}</p>
              </a>
            );
          })}
        </div>
        {/* 下 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
            <a
              href="https://github.com/smieanne"
              target="_blank"
              className="bg-white p-2 rounded-full cursor-pointer hover:bg-black text-pink-700"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://x.com/anne3829?t=M98eJR515ubdE-UY195Lkw&s=09"
              target="_blank"
              className="bg-white p-2 rounded-full cursor-pointer hover:bg-black text-pink-700"
            >
              <FaXTwitter />
            </a>

            <a
              href="#contact"
              className="bg-white p-2 rounded-full cursor-pointer hover:bg-black text-pink-700"
            >
              <LuMail />
            </a>
          </div>
          <p className="max-lg:hidden  text-white">© 2024 M.S Portfolio.</p>
        </div>
      </div>
    </section>
  );
}
export default SideMenu;
