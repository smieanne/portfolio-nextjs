import Image from "next/image";
import React from "react";
import { AiFillBulb } from "react-icons/ai";

function Skills() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10  max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/*セクションタイトル */}
        <div className="inline-block">
          <p className="text-black text-5xl  font-medium py-5 px-10 flex igap-2 max-xs:px-2">
            Skills
          </p>
        </div>

        <div className="grid items-center grid-cols-1  gap-1    md:grid-cols-7  max-xs:grid-cols-7  py-20 mx-20 max-xs:mx-2">
          <Image
            src={"/assets/skills/React-icon.png"}
            width={100}
            height={100}
            alt={"react"}
            className=""
          />

          <Image
            src={"/assets/skills/Redux-icon.png"}
            width={100}
            height={100}
            alt={"redux"}
            className=""
          />

          <Image
            src={"/assets/skills/Ts-icon.png"}
            width={100}
            height={100}
            alt={"ts"}
            className=""
          />
          <Image
            src={"/assets/skills/Nextjs-icon.png"}
            width={150}
            height={150}
            alt={"nextjs"}
            className="pr-4 max-sm:p-0"
          />

          <Image
            src={"/assets/skills/Recoil-icon.png"}
            width={150}
            height={150}
            alt={"recoil"}
            className=""
          />
          <Image
            src={"/assets/skills/Tailwindcss-icon.png"}
            width={120}
            height={120}
            alt={"tailwindcss"}
            className="ml-4 max-xs:m-0"
          />
          <Image
            src={"/assets/skills/Mui-icon.png"}
            width={120}
            height={120}
            alt={"mui"}
            className=""
          />

          <Image
            src={"/assets/skills/Spring-icon.png"}
            width={140}
            height={140}
            alt={"spring"}
            className="mt-7 mr-5 max-sm:m-0"
          />
          <Image
            src={"/assets/skills/Java-icon.png"}
            width={100}
            height={100}
            alt={"java"}
            className="ml-4 max-sm:m-0"
          />

          <Image
            src={"/assets/skills/Servlet-icon.png"}
            width={150}
            height={150}
            alt={"sevlet"}
            className="mr-5 mt-5 max-sm:m-0"
          />
          <Image
            src={"/assets/skills/Mysql-icon.png"}
            width={150}
            height={150}
            alt={"mysql"}
            className=""
          />
          <Image
            src={"/assets/skills/hcj.jpg"}
            width={150}
            height={150}
            alt={"hcj"}
            className=""
          />
          <Image
            src={"/assets/skills/Bootstrap-icon.png"}
            width={100}
            height={100}
            alt={"bootstrap"}
            className="ml-5 mt-7 max-sm:m-0"
          />
          <Image
            src={"/assets/skills/jquery.jpg"}
            width={100}
            height={100}
            alt={"jquery"}
            className="mt-7 max-sm:m-0"
          />

          {/* <Image
            src={"/assets/skills/React-icon.png"}
            width={180}
            height={180}
            alt={"react"}
            className="mb-2 max-sm:mb-2"
          />

          <Image
            src={"/assets/skills/redux-con.png"}
            width={120}
            height={120}
            alt={"redux"}
            className="pt-4 max-sm:pt-4 "
          />

          <Image
            src={"/assets/skills/Ts-icon.png"}
            width={80}
            height={80}
            alt={"ts"}
            className="pt-5 max-sm:pt-5 "
          />
          <Image
            src={"/assets/skills/Nextjs-icon.png"}
            width={120}
            height={120}
            alt={"nextjs"}
            className="mt-6 max-sm:mt-6 "
          />

          <Image
            src={"/assets/skills/Recoil-icon.png"}
            width={180}
            height={150}
            alt={"recoil"}
            className="mt-4 max-sm:mt-4 "
          />
          <Image
            src={"/assets/skills/Tailwindcss-icon.png"}
            width={120}
            height={120}
            alt={"tailwindcss"}
            className="mt-2 max-sm:mt-4 "
          />
          <Image
            src={"/assets/skills/Mui-icon.png"}
            width={100}
            height={100}
            alt={"mui"}
            className="mt-2 "
          />

          <Image
            src={"/assets/skills/spring.jpg"}
            width={180}
            height={180}
            alt={"spring"}
            className="mt-4"
          />
          <Image
            src={"/assets/skills/java-icon.png"}
            width={120}
            height={120}
            alt={"java"}
            className="mt-2 "
          />

          <Image
            src={"/assets/skills/servlet.jpg"}
            width={150}
            height={150}
            alt={"sevlet"}
            className="mt-7 mr-8"
          />
          <Image
            src={"/assets/skills/mysql.jpg"}
            width={180}
            height={180}
            alt={"mysql"}
            className=""
          />
          <Image
            src={"/assets/skills/hcj.jpg"}
            width={200}
            height={200}
            alt={"hcj"}
            className="mt-8 "
          />
          <Image
            src={"/assets/skills/bootstrap.jpg"}
            width={140}
            height={140}
            alt={"bootstrap"}
            className="mt-5 ml-2"
          />
          <Image
            src={"/assets/skills/jquery.jpg"}
            width={80}
            height={80}
            alt={"jquery"}
            className="mt-8 ml-4"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
