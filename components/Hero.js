import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../app/animations.css";

function Hero() {
  return (
    <section className=" w-full lg:h-screen h-fit  relative   max-xs:mb-[40px]">
      <div className="w-full h-full  flex items-center justify-between  max-md:flex-col max-md:gap-10 max-md:text-right ">
        <div
          style={{
            backgroundImage: `url('/assets/top.jpg')`,
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",

            zIndex: 10,
          }}
        >
          <div className="flex flex-col gap-5 z-40 max-md:order-2  mt-60 ml-20 max-sm:mt-28">
            <div className="text-4xl lg:text-6xl text-white">
              <h1 className="font-medium ">Welcome to</h1>
              <h2 className="font-bold text-red-800">My Portfolio Site</h2>
              <p className=" text-2xl font-bold max-sm:text-sm">
                Dreaming up and realize our dreams.
              </p>

              {/* <span className="tex-white text-sm">夢を描いて夢を叶える</span> */}
              <p className="mt-32 text-2xl text-white opacity-75 max-md:text-right max-md:mt-28 max-md:text-xs">
                当ポートフォリオへ訪問いただきありがとうございます。
                <br />
                Javaから始まり最近ではReact/Next.jsを用いた
                <br />
                フロントエンド開発を担当させていただいております。
                <br />
                React.jsでのSPA開発や、Next.jsでのSSG開発のポートフォリオサイトです。
              </p>
            </div>
          </div>

          {/*animetioncss */}
          <ul className="circles ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
