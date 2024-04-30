import React from "react";
import { AiFillBulb } from "react-icons/ai";

function About() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/*セクションタイトル*/}
        <div className="inline-block">
          <p
            className="text-black text-5xl text  font-medium py-5 px-5 flex items-center  gap-2  "
            id="about"
          >
            AboutMe
          </p>
        </div>

        {/*メイン文*/}
        <div className="py-20 ">
          <p className=" px-20 text-gray-600 text-lg md:text-xl max-sm:text-sm  max-sm:px-1 max-sm:py-1 leading-9 ">
            東京都墨田区出身。
            <br />
            アメリカへダンス留学を経て約9年日本でダンサーとして活動。物流・貿易関連会社にてOL業にも従事、その後Java開発からスタート。
            現在はReact.js開発にてモーダルフォール開発、状態管理はRedux、Recoil、Hooksを扱うことができます。
            趣味はコーディング、筋トレ、麻雀、SNSサーフィン、カフェ巡り、たまにピアノ。
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
