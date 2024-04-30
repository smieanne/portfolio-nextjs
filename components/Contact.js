"use client";

import React, { useRef } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import {
  AiFillBulb,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_257f1oc", "template_i0cphkw", form.current, {
        publicKey: "5Lc7Zevmt0LLYdKy4",
      })
      .then(
        (result) => {
          form.current.reset();
          console.log("SUCCESS!");
          alert("メールが送信されました");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="w-full h-fit px-[40px]  md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/**セクションタイトル */}
        <div className="inline-block">
          <p className="text-black text-5xl font-medium py-5 px-10 flex igap-2 max-sm:px-2">
            Contact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div>
            <p className="px-20 mt-12 max-xs:px-[20px]">
              お問い合わせはこちらからお気軽に連絡ください。
              <br />
              メッセージには可能な限り早く返信させて頂きます。
            </p>
            {/* <p className="px-20 mt-12 max-xs:px-[20px]">連絡先はこちら</p>
            <h4 className="text-lg font-medium text-pink-700 px-20 mt-0 max-xs:px-[20px]">
              sample@gmail.com
            </h4> */}
            {/*SNS */}
            <div className="mt-12 px-20">
              <div className="flex flex-col gap-2 max-xs:items-center">
                <h5>SNS </h5>
                <div className="flex gap-5 ">
                  <a
                    href="https://www.instagram.com/an820150?igsh=dHNpYW0zYnJkdTJp"
                    target="_blank"
                    className="text-3xl text-pink-700 hover:text-black"
                  >
                    <FaSquareInstagram />
                  </a>
                  <a
                    href="https://x.com/anne3829?t=M98eJR515ubdE-UY195Lkw&s=09"
                    target="_blank"
                    className="text-3xl text-pink-700 hover:text-black"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="https://www.tiktok.com/@anne1500820?_t=8ls2tIlNi6u&_r=1"
                    target="_blank"
                    className="text-3xl text-pink-700 hover:text-black"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*メールフォーム*/}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full pr-28 max-xs:px-10"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="お名前"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-pink-700"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="メールアドレス"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-pink-700"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="タイトル"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-pink-700"
              />
              <textarea
                name="message"
                id="message"
                rows={"7"}
                placeholder="内容"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-pink-700"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white  text-pink-700 font-medium py-3 px-6 rounded hover:shadow-lg hover:bg-black"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
