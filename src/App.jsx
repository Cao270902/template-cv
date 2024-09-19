import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { CiBrightnessDown } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";

import {
  FaHome,
  FaBriefcase,
  FaUser,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa"; // Import icons

function App() {
  return (
    <>
      <div className="mx-auto flex w-[1440px] max-w-[calc(100%-0px)]">
        <div className="bg-gradient fixed left-0 top-0 z-[-1] h-[100vh] w-full">
          <div className="blur-background animate-first_animate_bg blur-bg absolute hidden h-[clamp(400px,20vw,60vw)] w-[calc(clamp(400px,30vw,70vw)*1.1)] rounded-[900px] tablet:block"></div>

          <div className="blur-background animate-second_animate_bg blur-bg absolute h-[clamp(400px,20vw,60vw)] w-[calc(clamp(400px,30vw,70vw)*1.1)] rounded-[900px]"></div>

          <div className="blur-background animate-third_animate_bg blur-bg absolute h-[clamp(400px,20vw,60vw)] w-[calc(clamp(400px,30vw,70vw)*1.1)] rounded-[900px]"></div>
        </div>
        <div className="left w-[33%] bg-transparent">
          <div className="avatar fixed ml-[80px] mt-[50px] h-[800px] w-[400px] rounded-[36px] border border-[#303033] bg-[#161616] p-[50px]">
            {/* <div className="fixed"> */}
            <div className="avatar-logo mb-[20px] flex gap-[20px]">
              <div className="logo-image flex h-[75px] w-[75px] items-end justify-center rounded-[30px] border-[1px] border-[#E4BBBF]">
                <i className="fa-solid fa-cat bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-[43px] text-transparent"></i>
              </div>
              <div className="logo-caption font-syne text-[36px] font-bold leading-[38.16px]">
                <p className="text-[#E9E9F1]">
                  Đỗ Hoành <br /> Cao
                </p>
              </div>
            </div>
            <div className="avatar-image">
              <img
                src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                alt=""
                className="h-[300px] w-[300px] rounded-[30px]"
              />
            </div>
            <div className="avatar-block mt-[35px]">
              <div className="font-syne text-[15px] font-normal">
                <p className="text-[#C7C6D3]">Specialization:</p>
              </div>
              <div className="font-syne text-[18px] font-bold">
                <p className="text-[#E9E9F1]">
                  UI/UX designer <br /> and frontend developer
                </p>
              </div>
              <div className="mt-[27px] font-syne text-[15px] font-normal">
                <p className="text-[#C7C6D3]">Based in:</p>
              </div>
              <div className="font-syne text-[18px] font-bold">
                <p className="text-[#E9E9F1]">Odesa, Ukraine</p>
              </div>
            </div>
            <div className="socials-square mb-[10px] mt-[27px]">
              <div className="flex justify-between gap-2">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[40%] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}

                    <FaFacebook className="fa-brands fa-facebook text-[#E9E9F1]" />
                  </a>
                </div>
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[40%] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <FaInstagramSquare className="fa-brands fa-facebook text-[#E9E9F1]" />
                  </a>
                </div>
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[40%] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <FaYoutube className="fa-brands fa-facebook text-[#E9E9F1]" />
                  </a>
                </div>
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[40%] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <BsBrowserEdge className="fa-brands fa-facebook text-[#E9E9F1]" />
                  </a>
                </div>
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[40%] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <RiMessage2Fill className="fa-brands fa-facebook text-[#E9E9F1]" />
                  </a>
                </div>
              </div>
            </div>

            <button className="h-[50px] w-[300px] rounded-[22px] border-[1px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] font-syne text-[16px] font-bold leading-[50px] text-[#000000]">
              Let's Work Together!
            </button>
          </div>
        </div>
        <div className="right w-[67%] bg-transparent">
          <div className="main mr-[30px] p-[50px]">
            <div className="header fixed top-[50px] flex items-center justify-between">
              <div className="header-nav">
                <div className="menu">
                  <ul className="menu-list flex gap-[10px] tablet:gap-7">
                    <li className="menu-item rounded-[22px] backdrop-blur-[6px]">
                      <a href="" className="menu-link">
                        <span className="menu-icon hidden text-custom-xl text-[#E9E9F1] tablet:inline-block">
                          <FaHome />
                        </span>
                        <span className="menu-caption inline-block h-[50px] w-[97px] rounded-[22px] pb-0 pl-[21px] pr-[21px] pt-0 font-syne text-[16px] font-bold leading-[50px] text-[#8B8A91] hover:border hover:border-[#303033] hover:text-[#E9E9F1] tablet:hidden">
                          Home
                        </span>
                        {/* <span className="menu-caption text-custom-xl rounded-3xl border pb-[20px] pl-[20px] pr-[30px] pt-[20px] font-syne font-bold text-[#E9E9F1]">
                          Home
                        </span> */}
                      </a>
                    </li>
                    <li className="menu-item rounded-[22px] backdrop-blur-[6px]">
                      <a href="" className="menu-link">
                        <span className="menu-icon hidden text-custom-xl text-[#E9E9F1] tablet:inline-block">
                          <FaBriefcase />
                        </span>
                        <span className="menu-caption inline-block h-[50px] w-[118px] rounded-[22px] pb-0 pl-[21px] pr-[21px] pt-0 font-syne text-[16px] font-bold leading-[50px] text-[#8B8A91] hover:border hover:border-[#303033] hover:text-[#E9E9F1] tablet:hidden">
                          <a href="#portfolio">Portfolio</a>
                        </span>
                      </a>
                    </li>
                    <li className="menu-item rounded-[22px] backdrop-blur-[6px]">
                      <a href="" className="menu-link">
                        <span className="menu-icon hidden text-custom-xl text-[#E9E9F1] tablet:inline-block">
                          <FaUser />
                        </span>
                        <span className="menu-caption inline-block h-[50px] w-[129px] whitespace-nowrap rounded-[22px] pb-0 pl-[21px] pr-[21px] pt-0 font-syne text-[16px] font-bold leading-[50px] text-[#8B8A91] hover:border hover:border-[#303033] hover:text-[#E9E9F1] tablet:hidden">
                          <a href="#about">About Me</a>
                        </span>
                      </a>
                    </li>
                    <li className="menu-item rounded-[22px] backdrop-blur-[6px]">
                      <a href="" className="menu-link">
                        <span className="menu-icon hidden text-custom-xl text-[#E9E9F1] tablet:inline-block">
                          <FaFileAlt />
                        </span>
                        <span className="menu-caption inline-block h-[50px] w-[116px] rounded-[22px] pb-0 pl-[21px] pr-[21px] pt-0 font-syne text-[16px] font-bold leading-[50px] text-[#8B8A91] hover:border hover:border-[#303033] hover:text-[#E9E9F1] tablet:hidden">
                          <a href="#resume">Resume</a>
                        </span>
                      </a>
                    </li>
                    <li className="menu-item rounded-[22px] backdrop-blur-[6px]">
                      <a href="" className="menu-link">
                        <span className="menu-icon hidden text-custom-xl text-[#E9E9F1] tablet:inline-block">
                          <FaEnvelope />
                        </span>
                        <span className="menu-caption inline-block h-[50px] w-[115px] rounded-[22px] pb-0 pl-[21px] pr-[21px] pt-0 font-syne text-[16px] font-bold leading-[50px] text-[#8B8A91] hover:border hover:border-[#303033] hover:text-[#E9E9F1] tablet:hidden">
                          <a href="#contact">Contact</a>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-controls ml-[10px] flex h-[50px] w-[205px] gap-[10px]">
                <div>
                  <span className="menu-icon hidden text-custom-xl tablet:inline-block">
                    <CiBrightnessDown className="ml-[28px] text-custom-lg text-[#E9E9F1]" />
                  </span>
                </div>
                <div className="flex h-[50px] w-[50px] items-center justify-center">
                  <button>
                    {/* <i className="fa-regular fa-moon"></i> */}
                    <CiBrightnessDown className="text-custom-lg text-[#A1A1AF] tablet:hidden" />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <span className="menu-icon hidden text-custom-xl text-[#E9E9F1] tablet:inline-block">
                    <i className="fa-regular fa-message"></i>
                  </span>
                </div>
                <div className="">
                  <button
                    href=""
                    className="h-[50px] w-[145px] rounded-[22px] border-[1px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] font-syne text-[16px] font-bold leading-[50px] text-[#000000]"
                  >
                    Let's Talk <i className="fa-regular fa-message"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-[19px] mt-[294px]">
              <a
                href=""
                className="inline-flex h-[34px] w-[130px] items-center justify-center whitespace-nowrap rounded-[15px] border border-[#303033] bg-[#111111] pb-0 pl-[15px] pr-[15px] pt-0 font-syne text-[13px] font-bold text-[#C7C6D3]"
              >
                <i className="fa-solid fa-rocket mr-[10px]"></i>
                Let's meet!
              </a>
            </div>
            <h1 className="mb-[51px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[70px] font-bold leading-[84px] text-transparent">
              I'm Alex Walker <br />
              Digital designer and <br />
              illustrator.
            </h1>
            <div className="flex gap-[10px]">
              <div className="">
                <a
                  href=""
                  className="inline-flex h-[50px] w-[153px] items-center justify-center whitespace-nowrap rounded-[22px] border border-[#303033] bg-[#111111] pb-0 pl-[20px] pr-[20px] pt-0 font-syne text-[16px] font-bold text-[#C7C6D3]"
                >
                  My Works
                  <i className="fa-solid fa-laptop-file ml-[10px]"></i>
                </a>
              </div>
              <div className="">
                <a
                  href=""
                  className="inline-flex h-[50px] w-[185px] items-center justify-center whitespace-nowrap rounded-[22px] bg-[#111111] pb-0 pl-[20px] pr-[20px] pt-0 font-syne text-[16px] font-bold text-[#8B8A91]"
                >
                  Download CV
                  <i className="fa-solid fa-download ml-[10px]"></i>
                </a>
              </div>
            </div>
            <div id="portfolio" className="mb-[15px] pt-[170px]">
              <a
                href=""
                className="inline-flex h-[34px] w-[130px] items-center justify-center whitespace-nowrap rounded-[15px] border border-[#303033] bg-[#111111] pb-0 pl-[15px] pr-[15px] pt-0 font-syne text-[13px] font-bold text-[#C7C6D3]"
              >
                <i className="fa-solid fa-rocket mr-[10px]"></i>
                Portfolio
              </a>
            </div>
            <h2 className="mb-[51px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[54px] font-bold leading-[64.8px] text-transparent">
              Check out my featured <br />
              projects
            </h2>

            <div className="mb-[50px] flex justify-between">
              <div>
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[390px] w-[390px] rounded-[36px]"
                />
              </div>
              <div>
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[390px] w-[390px] rounded-[36px]"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[390px] w-[390px] rounded-[36px]"
                />
              </div>
              <div>
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[390px] w-[390px] rounded-[36px]"
                />
              </div>
            </div>
            <div id="about" className="mb-[15px] pt-[170px]">
              <a
                href=""
                className="inline-flex h-[34px] w-[130px] items-center justify-center whitespace-nowrap rounded-[15px] border border-[#303033] bg-[#111111] pb-0 pl-[15px] pr-[15px] pt-0 font-syne text-[13px] font-bold text-[#C7C6D3]"
              >
                <i className="fa-solid fa-rocket mr-[10px]"></i>
                About Me
              </a>
            </div>
            <h2 className="mb-[51px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[54px] font-bold leading-[64.8px] text-transparent">
              Turning complex problems <br />
              into simple design
            </h2>

            <div className="mb-[60px] flex items-center justify-between">
              <div className="flex h-[181.19px] w-[243.33px] flex-col items-center justify-center rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <span className="text-[70px] lining-nums leading-[70px]">
                  40+
                </span>
                <p className="mt-[5px] text-[18px] leading-[21.6px]">
                  Happy clients
                </p>
              </div>
              <div className="flex h-[181.19px] w-[243.33px] flex-col items-center justify-center rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <span className="text-[70px] lining-nums leading-[70px]">
                  2+
                </span>
                <p className="mt-[5px] text-[18px] leading-[21.6px]">
                  Years of <br /> experience
                </p>
              </div>
              <div className="flex h-[181.19px] w-[243.33px] flex-col items-center justify-center rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <span className="text-[70px] lining-nums leading-[70px]">
                  50+
                </span>
                <p className="mt-[5px] text-[18px] leading-[21.6px]">
                  Projects done
                </p>
              </div>
            </div>

            <div className="mb-[31px] flex items-start justify-between">
              <div className="w-[536.66px]">
                <p className="font-syne text-[22px] font-normal leading-[30.8px] text-[#C7C6D3]">
                  I wonder if I've been changed in the night? Let me think. Was
                  I the same when I got up this morning? I almost think I can
                  remember feeling a little different. But if I'm not the same,
                  the next question is 'Who in the world am I?' Ah, that's the
                  great puzzle!
                  <br />
                  <br />
                  Be what you would seem to be - or, if you'd like it put more
                  simply - never imagine yourself not to be otherwise than what
                  it might appear to others that what you were or might have
                  been was not otherwise than what you had been would have
                  appeared to them to be otherwise.
                </p>
              </div>
              <div className="mt-[7px] flex w-[243.33px] flex-col items-start justify-between">
                <div className="">
                  <p className="font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                    Name
                  </p>
                  <p className="font-syne text-[18px] font-bold leading-[21.6px] text-[#E9E9F1]">
                    Alex Walker
                  </p>
                </div>
                <br />
                <div className="">
                  <p className="font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                    Phone
                  </p>
                  <p className="font-syne text-[18px] font-bold leading-[21.6px] text-[#E9E9F1]">
                    +1 212-708-9400
                  </p>
                </div>
                <br />
                <div className="">
                  <p className="font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                    Email
                  </p>
                  <p className="font-syne text-[18px] font-bold leading-[21.6px] text-[#E9E9F1]">
                    hello@yourdomain.com
                  </p>
                </div>
                <br />
                <div className="">
                  <p className="font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                    Location
                  </p>
                  <p className="font-syne text-[18px] font-bold leading-[21.6px] text-[#E9E9F1]">
                    Odesa, Ukraine
                  </p>
                </div>
              </div>
            </div>

            <button className="mb-[196px] h-[50px] w-[185px] rounded-[22px] border-[1px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] font-syne text-[16px] font-bold leading-[50px] text-[#121319]">
              Download CV
              <i className="fa-solid fa-download ml-[10px]"></i>
            </button>

            <div className="flex items-center justify-between">
              <div className="h-[620px] w-[390px] rounded-[36px] border border-[#303033] font-syne text-[#111111]">
                <div className="h-[297.98px] p-[50px]">
                  <h3 className="text-[30px] font-bold leading-[36px] text-[#E9E9F1]">
                    Front end development
                  </h3>
                  <div className="mt-[8px] flex items-center justify-start gap-[10px]">
                    <div className="h-[34px] w-[119px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      UI/UX Design
                    </div>
                    <div className="h-[34px] w-[131px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Design to Code
                    </div>
                    <div></div>
                  </div>
                  <p className="mt-[27.4px] font-syne text-[18px] font-normal leading-[25.2px] text-[#C7C6D3]">
                    I work with HTML/CSS, Framer and WordPress.
                  </p>
                </div>
                <div className="">
                  <img
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                    alt=""
                    className="h-[320.62px] w-[388px] rounded-b-[36px]"
                  />
                </div>
              </div>
              <div className="h-[620px] w-[390px] rounded-[36px] border border-[#303033] font-syne text-[#111111]">
                <div className="h-[297.98px] p-[50px]">
                  <h3 className="text-[30px] font-bold leading-[36px] text-[#E9E9F1]">
                    Digital art and graphic design
                  </h3>
                  <div className="mt-[8px] flex items-center justify-start gap-[10px]">
                    <div className="h-[34px] w-[119px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Illustrations
                    </div>
                    <div className="h-[34px] w-[131px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Experiments
                    </div>
                    <div></div>
                  </div>
                  <p className="mt-[27.4px] font-syne text-[18px] font-normal leading-[25.2px] text-[#C7C6D3]">
                    I use Adobe Photoshop, Fresco and Blender to create
                    illustrations and 3D renders for my clients and stocks.
                  </p>
                </div>
                <div className="">
                  <img
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                    alt=""
                    className="h-[320.62px] w-[388px] rounded-b-[36px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[50px] flex items-center justify-between">
              <div className="h-[620px] w-[390px] rounded-[36px] border border-[#303033] font-syne text-[#111111]">
                <div className="h-[383.95px] p-[50px]">
                  <h3 className="text-[30px] font-bold leading-[36px] text-[#E9E9F1]">
                    SEO/Digital marketing solutions
                  </h3>
                  <div className="mt-[8px] flex items-center justify-start gap-[10px]">
                    <div className="h-[34px] w-[119px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Media
                    </div>
                    <div className="h-[34px] w-[131px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Analytics
                    </div>
                    <div></div>
                  </div>
                  <p className="mt-[27.4px] font-syne text-[18px] font-normal leading-[25.2px] text-[#C7C6D3]">
                    Social media content plans, media monitoring, email and text
                    messaging and search engine optimization.
                  </p>
                </div>
                <div className="">
                  <img
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                    alt=""
                    className="h-[236.05px] w-[388px] rounded-b-[36px]"
                  />
                </div>
              </div>
              <div className="h-[620px] w-[390px] rounded-[36px] border border-[#303033] font-syne text-[#111111]">
                <div className="h-[297.98px] p-[50px]">
                  <h3 className="text-[30px] font-bold leading-[36px] text-[#E9E9F1]">
                    Brand <br /> identity
                  </h3>
                  <div className="mt-[8px] flex items-center justify-start gap-[10px]">
                    <div className="h-[34px] w-[119px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Logo Design
                    </div>
                    <div className="h-[34px] w-[131px] whitespace-nowrap rounded-[15px] border border-[#303033] pb-[10px] pl-[15px] pr-[15px] pt-[9px] font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                      Style Guides
                    </div>
                    <div></div>
                  </div>
                  <p className="mt-[27.4px] font-syne text-[18px] font-normal leading-[25.2px] text-[#C7C6D3]">
                    I help my clients to develop a personality and brand voice,
                    design the brand look and logo.
                  </p>
                </div>
                <div className="">
                  <img
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                    alt=""
                    className="h-[320.62px] w-[388px] rounded-b-[36px]"
                  />
                </div>
              </div>
            </div>

            <div id="resume" className="mb-[15px] pt-[170px]">
              <a
                href=""
                className="inline-flex h-[34px] w-[130px] items-center justify-center whitespace-nowrap rounded-[15px] border border-[#303033] bg-[#111111] pb-0 pl-[15px] pr-[15px] pt-0 font-syne text-[13px] font-bold text-[#C7C6D3]"
              >
                <i className="fa-solid fa-rocket mr-[10px]"></i>
                Resume
              </a>
            </div>
            <h2 className="mb-[51px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[54px] font-bold leading-[64.8px] text-transparent">
              Education and practical <br />
              experience
            </h2>
            <p className="font-syne text-[22px] font-normal leading-[30.8px] text-[#C7C6D3]">
              Be what you would seem to be - or, if you'd like it put more
              simply - never imagine yourself not to be otherwise than what it
              might appear to others that what you were or might have been was
              not otherwise than what you had been would have appeared to them
              to be otherwise.
            </p>

            <h2 className="mb-[51px] mt-[145.6px] font-syne text-[38px] font-bold leading-[45.6px] text-[#E9E9F1]">
              My education
            </h2>
            <div className="flex items-start justify-between border-b border-t border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[138.33px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  2015-2016
                </p>
              </div>

              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                  Drawing Concentration
                </p>
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  Course by 
                  <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                    New York Academy of Art
                  </span>
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#C7C6D3]">
                  Intensive drawing courses that present the <br />
                  fundamental principles of drawing.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[138.33px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  2019-2021
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                  UI/UX Design <br /> Specialization
                </p>
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  Course by 
                  <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                      California Institute of Arts
                  </span>
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#C7C6D3]">
                  Research, design, and prototype effective, <br />
                  visually-driven websites and apps.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[138.33px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  2022
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                  UI/UX Designer
                </p>
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  Course by 
                  <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                    Coursera
                  </span>
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#C7C6D3]">
                  This cource is about how to complete the <br />
                  design process from beginning to end.
                </p>
              </div>
            </div>

            <h2 className="mb-[51px] mt-[145.6px] font-syne text-[38px] font-bold leading-[45.6px] text-[#E9E9F1]">
              Work experience
            </h2>
            <div className="flex items-start justify-between border-b border-t border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[138.33px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  2018-2019
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                  Illustrator
                </p>
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  in the
                  <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                    Creative Mind
                  </span>
                  agency
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#C7C6D3]">
                  I created original images for a range of <br /> digital and
                  printed products.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[138.33px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  2019-2021
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                  Graphic Designer
                </p>
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  in the
                  <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                      Moon Light
                  </span>
                  agency
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#C7C6D3]">
                  My job was to create adverts, branding, <br /> signage and
                  other media products.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[138.33px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  2021-now
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                  UI/UX Designer
                </p>
                <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                  in the 
                  <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                    Moon Light
                  </span>
                  agercy
                </p>
              </div>
              <div className="w-[345.83px]">
                <p className="whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#C7C6D3]">
                  I am actively involved in creating user <br />
                  interfaces for mobile apps and websites.
                </p>
              </div>
            </div>

            <h2 className="mb-[51px] mt-[145.6px] font-syne text-[38px] font-bold leading-[45.6px] text-[#E9E9F1]">
              My favourite tools
            </h2>

            <div className="mb-[20px] flex items-center justify-between">
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] leading-[21.6px]">
                  Photoshop
                </p>
              </div>
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] leading-[21.6px]">Figma</p>
              </div>
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] leading-[21.6px]">
                  Illustrator
                </p>
              </div>
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] leading-[21.6px]">Sketch</p>
              </div>
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] leading-[21.6px]">Blender</p>
              </div>
            </div>
            <div className="mb-[60px] flex items-center justify-start gap-[20px]">
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] lining-nums leading-[21.6px]">
                  HTML5
                </p>
              </div>
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] lining-nums leading-[21.6px]">
                  CSS3
                </p>
              </div>
              <div className="flex h-[155px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[36px] border border-[#303033] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-center font-syne font-bold text-transparent">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[59.93px] w-[61.47px]"
                />
                <p className="mt-[5px] text-[18px] leading-[21.6px]">Notion</p>
              </div>
            </div>

            <div className="mb-[15px] mt-[170px]">
              <a
                href=""
                className="inline-flex h-[34px] w-[130px] items-center justify-center whitespace-nowrap rounded-[15px] border border-[#303033] bg-[#111111] pb-0 pl-[15px] pr-[15px] pt-0 font-syne text-[13px] font-bold text-[#C7C6D3]"
              >
                <i className="fa-solid fa-rocket mr-[10px]"></i>
                Testimonials
              </a>
            </div>
            <h2 className="mb-[51px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[54px] font-bold leading-[64.8px] text-transparent">
              Clients say about me
            </h2>
            <div className="flex flex-col items-start justify-between gap-[38.5px] rounded-[36px] border border-[#303033] p-[50px]">
              <div className="flex gap-[20px]">
                <img
                  src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-003.jpg"
                  alt=""
                  className="h-[100px] w-[100px] rounded-[36px]"
                />
                <div className="">
                  <p className="whitespace-nowrap font-syne text-[22px] font-bold leading-[26.4px] text-[#E9E9F1]">
                    Jenny Pineapple
                  </p>
                  <p className="whitespace-nowrap font-syne text-[15px] font-normal leading-[15px] text-[#C7C6D3]">
                    SEO in
                    <span className="mx-1 whitespace-nowrap font-syne text-[15px] font-bold leading-[26.4px] text-[#E9E9F1]">
                      Creative People
                    </span>
                  </p>
                  <div className="flex items-center justify-start gap-[8px]">
                    <i className="fa-solid fa-star h-[18px] w-[18px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star h-[18px] w-[18px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star h-[18px] w-[18px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star h-[18px] w-[18px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-transparent"></i>
                    <i className="fa-solid fa-star h-[18px] w-[18px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text text-transparent"></i>
                  </div>
                </div>
              </div>

              <p className="font-syne text-[22px] font-normal leading-[30.8px] text-[#C7C6D3]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud. Dolore magna aliquam.
              </p>

              <p className="font-syne text-[16px] font-bold leading-[16px] text-[#E9E9F1]">
                Project Page <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>

            <div className="mt-[20px] flex items-center justify-start gap-[10px]">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[22px] border-[1px] border-solid border-[#4B4B51]">
                <i className="fa-solid fa-arrow-left h-[14px] w-[14px] text-[#E9E9F1]"></i>
              </div>
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[22px] border-[1px] border-solid border-[#4B4B51]">
                <i className="fa-solid fa-arrow-right h-[14px] w-[14px] text-[#E9E9F1]"></i>
              </div>
            </div>

            <div id="contact" className="mb-[15px] pt-[170px]">
              <a
                href=""
                className="inline-flex h-[34px] w-[130px] items-center justify-center whitespace-nowrap rounded-[15px] border border-[#303033] bg-[#111111] pb-0 pl-[15px] pr-[15px] pt-0 font-syne text-[13px] font-bold text-[#C7C6D3]"
              >
                <i className="fa-solid fa-rocket mr-[10px]"></i>
                Contact
              </a>
            </div>
            <h2 className="mb-[51px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[54px] font-bold leading-[64.8px] text-transparent">
              Let's make <br />
              something <br />
              awesome togethers!
            </h2>
            <div className="flex items-center justify-between">
              <div className="h-[57px] w-[390px] border-b border-[#303033] pb-[18px] pl-[4px] pr-[4px] pt-[15px]">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="bg-transparent font-syne text-[20px] font-bold leading-[24px] text-[#58585E]"
                />
              </div>
              <div className="h-[57px] w-[390px] border-b border-[#303033] pb-[18px] pl-[4px] pr-[4px] pt-[15px]">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-transparent font-syne text-[20px] font-bold leading-[24px] text-[#58585E]"
                />
              </div>
            </div>

            <div className="mt-[30px] flex items-center justify-between">
              <div className="h-[57px] w-[390px] border-b border-[#303033] pb-[18px] pl-[4px] pr-[4px] pt-[15px]">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="bg-transparent font-syne text-[20px] font-bold leading-[24px] text-[#58585E]"
                />
              </div>
              <div className="h-[57px] w-[390px] border-b border-[#303033] pb-[18px] pl-[4px] pr-[4px] pt-[15px]">
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className="bg-transparent font-syne text-[20px] font-bold leading-[24px] text-[#58585E]"
                />
              </div>
            </div>

            <div className="mt-[30px] flex items-center justify-between">
              <div className="h-[160px] w-[880px] border-b border-[#303033] pb-[18px] pl-[4px] pr-[4px] pt-[15px]">
                <input
                  type="text"
                  placeholder="A Few Words*"
                  className="bg-transparent font-syne text-[20px] font-bold leading-[24px] text-[#58585E]"
                />
              </div>
            </div>

            <button className="mt-[30px] h-[50px] w-[185px] rounded-[22px] border-[1px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] font-syne text-[16px] font-bold leading-[50px] text-[#121319]">
              Send Message
              <i className="fa-solid fa-paper-plane ml-1"></i>
            </button>

            <div className="socials-square mt-[170px]">
              <div className="flex items-center justify-between">
                <div className="flex h-[122px] w-[150px] items-center justify-center rounded-[36px] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}

                    <FaFacebook className="fa-brands fa-facebook h-[50.63px] w-[50.63px] text-[#58585E]" />
                  </a>
                </div>
                <div className="flex h-[122px] w-[150px] items-center justify-center rounded-[36px] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <FaInstagramSquare className="fa-brands fa-facebook h-[50.63px] w-[50.63px] text-[#58585E]" />
                  </a>
                </div>
                <div className="flex h-[122px] w-[150px] items-center justify-center rounded-[36px] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <FaYoutube className="fa-brands fa-facebook h-[50.63px] w-[50.63px] text-[#58585E]" />
                  </a>
                </div>
                <div className="flex h-[122px] w-[150px] items-center justify-center rounded-[36px] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <BsBrowserEdge className="fa-brands fa-facebook h-[50.63px] w-[50.63px] text-[#58585E]" />
                  </a>
                </div>
                <div className="flex h-[122px] w-[150px] items-center justify-center rounded-[36px] border-[1px] border-solid border-[#303033]">
                  <a href="">
                    {/* <i className="fa-brands fa-facebook"></i> */}
                    <RiMessage2Fill className="fa-brands fa-facebook h-[50.63px] w-[50.63px] text-[#58585E]" />
                  </a>
                </div>
              </div>
            </div>

            <p className="mb-[51px] mt-[47px] bg-gradient-to-r from-[#E4BBBF] to-[#CEC4EF] bg-clip-text font-syne text-[38px] font-bold leading-[45.6px] text-transparent">
              Want to know more about me, tell me about your project or just to
              say hello? Drop me a line and I'll get back as soon as possible.
            </p>

            <div className="flex items-start justify-between border-t border-[#303033] pb-[45px] pt-[45px]">
              <div className="w-[276.67px]">
                <p className="whitespace-nowrap font-syne text-[16px] font-bold leading-[19.2px] text-[#E9E9F1]">
                  Location
                </p>
                <p className="whitespace-nowrap font-syne text-[16px] font-normal leading-[22.4px] text-[#A1A1AF]">
                  Odesa, Ukraine
                </p>
              </div>
              <div className="w-[276.67px]">
                <p className="whitespace-nowrap font-syne text-[16px] font-bold leading-[19.2px] text-[#E9E9F1]">
                  Phone
                </p>
                <p className="whitespace-nowrap font-syne text-[16px] font-normal lining-nums leading-[22.4px] text-[#A1A1AF]">
                  +1 212-708-9400
                </p>
              </div>
              <div className="w-[276.67px]">
                <p className="whitespace-nowrap font-syne text-[16px] font-bold leading-[19.2px] text-[#E9E9F1]">
                  Email
                </p>
                <p className="whitespace-nowrap font-syne text-[16px] font-normal leading-[22.4px] text-[#A1A1AF]">
                  hello@alexwalker.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
