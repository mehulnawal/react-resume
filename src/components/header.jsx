import bannerImg from '../assets/banner-img.jpg'
import resume from '../assets/MehulNawalResume.pdf'

// Icons
import { MdOutlineWbSunny, MdOutlineMenu } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { FaRegCircleXmark, FaUserTie } from "react-icons/fa6";
import { LuMoon } from "react-icons/lu";

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './theme';

import ParticleBackground from "./particales";

import { ActiveClass } from './activeClass';
// import Error404 from '../assets/Error404.gif'

// 
// import ScrollspyNav from 'react-scrollspy-nav';
import ScrollSpy from 'react-scrollspy-navigation';

function Header() {

  const { theme, setTheme } = useContext(ThemeContext)
  const [showMenuInMobile, setShowMenuInMobile] = useState(false);
  // const { active, setActive } = useContext(ActiveClass)
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, [])

  function handleTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  function handleActive() {
    // // e.preventDefault();
    // setActive(e);
    // document.getElementById(e).scrollIntoView({ behavior: "smooth" });
  }

  return <>
    <div className={`min-h-screen max-h-fit py-0 lg:py-10 flex flex-col ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#0A0A0A] text-[#fff]"}`} id='home'>
      <ParticleBackground />


      {/* navbar after lg */}
      <div id="navBar" className="!mx-auto border-gray-400 border-[0.3px] py-3 xl:w-[70%] w-[100%] rounded-xl backdrop-blur-[50px] px-5 items-center justify-between hidden lg:flex fixed left-1/2 -translate-x-1/2 z-100">

        <div id="navLeft" className='flex gap-3 items-center w-fit'>
          <div id="bannerImage" className='h-fit'>
            <img src={bannerImg} id="image" className='h-14 w-14 rounded-[100%] object-fill object-center'></img>
          </div>
          <div id="leftBannerText" className={`text-[17px] ${theme == "light" ? "text-[#3B82F6] font-bold" : "text-stone-300"}`}>Built with Love & Logic</div>
        </div>

        {/* navRight */}
        <ScrollSpy activeClass={theme === "dark" ? "active-light" : "active-dark"} offsetTop={40}>
          <div id="navRight" className='flex items-center justify-between gap-6 text-lg'>
            <ul className={`flex items-start gap-6 ${theme == "light" ? "text-black" : " text-stone-300"}`}>

              <li onClick={() => () => handleActive("Home")} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#home">Home</a>
              </li>

              <li onClick={() => () => handleActive("About")} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#about">About</a>
              </li>

              <li onClick={() => handleActive} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#experience">Experience</a>
              </li>

              <li onClick={() => handleActive} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#education">Education</a>
              </li>

              <li onClick={() => handleActive} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#projects">Projects</a>
              </li>
            </ul>

            <div id='themeIcons' className='flex items-center gap-3 text-xl' onClick={handleTheme}>
              {theme == "light" ? <LuMoon className='cursor-pointer ' /> : <MdOutlineWbSunny className='cursor-pointer' />
              }
            </div>
            <MdOutlineMenu id='menuButhrefn' className='text-2xl cursor-pointer hidden d-md-block' />
          </div>
        </ScrollSpy>
      </div>

      {/* navbar before lg */}
      <div id="navBar" className="relative mx-auto border-b-gray-400 border-b-[0.3px] py-5 w-[100%] px-5 outline-none items-center justify-between flex lg:hidden">

        <div id="navLeft" className='flex gap-3 items-center w-fit'>
          <div id="bannerImage" className='h-fit'>
            <img src={bannerImg} id="image" className='h-14 w-14 rounded-[100%] object-fill object-center'></img>
          </div>
          <div id="leftBannerText" className={`text-[17px] ${theme == "light" ? "text-[#3B82F6] font-bold" : "text-stone-300"}`}>Built with Love & Logic</div>
        </div>

        <div id="navRight" className='hidden md:flex items-center justify-between gap-6 text-lg'>
          <ul className={`flex items-start gap-6 ${theme == "light" ? "text-black" : " text-stone-300"}`}>
            <li className={`active ${theme == "light" ? "hover:bg-[#000000d1]" : "hover:text-white"}`}>
              <a href="/">Home</a>
            </li>

            <li className='hover:text-white'>
              <a href="/about">About</a>
            </li>

            <li className='hover:text-white'>
              <a href="/experience">Experience</a>
            </li>

            <li className='hover:text-white'>
              <a href="/education">Education</a>
            </li>

            <li className='hover:text-white'>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          {/* theme toggle */}
          <div id='themeIcons' className='flex items-center gap-3 text-xl' onClick={handleTheme}>
            {theme == "light" ? <LuMoon className='cursor-pointer ' /> : <MdOutlineWbSunny className='cursor-pointer' />
            }
          </div>

          <div className='text-2xl cursor-pointer md:hidden d-md-block' onClick={() => setShowMenuInMobile(!showMenuInMobile)}>
            {showMenuInMobile ? <FaRegCircleXmark /> : <MdOutlineMenu id='menuButhrefn' />}
          </div>
        </div>
      </div>

      {/* mobile navbar  */}
      {showMenuInMobile && <div className='md:hidden border px-3 w-full flex items-center justify-between gap-6 text-lg'>
        <ScrollSpy activeClass={theme === "dark" ? "active-light" : "active-dark"} offsetTop={40}>
          <div className='flex items-center gap-6 text-lg'>
            <ul className={`flex-col flex items-start gap-2 ${theme == "light" ? "text-black" : " text-stone-300"}`}>

              <li onClick={() => () => handleActive("Home")} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#home">Home</a>
              </li>

              <li onClick={() => () => handleActive("About")} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#about">About</a>
              </li>

              <li onClick={() => handleActive} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#experience">Experience</a>
              </li>

              <li onClick={() => handleActive} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#education">Education</a>
              </li>

              <li onClick={() => handleActive} className={`${theme == "light" ? "!text-black !hover:text-[#000000d1]" : "!hover:text-white !text-white"}`}>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </ScrollSpy>
      </div>}

      {/* banner */}
      <div id='banner' className="container mx-auto w-[70%] min-h-fit max-h-screen  gap-4 items-center mb-0 relative py-20 lg:mt-13">
        <div id="centerBanner" className={`mx-auto w-full`}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-[#3B82F6] font-bold">Mehul Nawal</h1>
          <p className="mt-2 text-center text-md md:text-lg lg:text-lg">Frontend Developer</p>
          <p className="mt-6 text-stone-400 text-center text-md md:text-lg lg:text-lg ">Code. Build. Optimize. Repeat</p>

          <div id="actionButtons" className='flex gap-4 justify-center mt-6 flex-wrap'>

            <a href='#projects' className={`py-2.5 px-7 rounded-lg cursor-pointer group flex items-center  ${theme == "dark" ? "bg-[#fff] text-[#000] hover:bg-[#E2E2E2]" : "bg-[#0A0A0A] text-[#fff] hover:bg-[#000000d1]"}`}>View Projects
              <BsArrowRightShort className='group-hover:translate-x-1 inline-block text-2xl transition-all ease-in-out ml-2' />
            </a>

            <a href={resume} download="Mehul Nawal Resume.pdf" className={`py-2.5 px-9 bg-transparent border-1 border-stone-500 rounded-lg cursor-pointer group flex items-center ${theme == "light" ? "text-[#000]" : "text-[#fff]"}`}>Download Resume
              <IoMdCloudDownload className='group-hover:translate-x-1 inline-block text-sm transition-all ease-in-out mb-0 ml-2' />
            </a>
          </div>
        </div>
      </div>

      {/* scroll down */}
      <a href='#about' id='scrollDownBtn' className={`mx-auto w-fit text-center mt-10 h-fit block cursor-pointer text-lg ${theme == "light" ? "text-[#000000a7] hover:text-gray-800" : "text-zinc-400 hover:text-zinc-300"}`}>Scroll Down</a>
    </div >

    {loader == true && <Loader />}
  </>
}

export default Header

export function Loader() {

  return (
    <div className="fixed w-full inset-0 flex items-center justify-center bg-[#141414] text-[#444] z-200">
      <style>{`
        *,:after,:before{box-sizing:border-box}

        .loader {
          color: #FFF;
          position: relative;
          display: inline-block;
          margin-top: 40px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 48px;
          letter-spacing: 4px;
          box-sizing: border-box;
        }
        .loader::before {
          content: '';  
          position: absolute;
          right: 70px;
          bottom: 10px;
          height: 28px;
          width: 5.15px;
          background: currentColor;
          box-sizing: border-box;
          animation: animloader1 1s linear infinite alternate;
        }
        .loader::after {
          content: '';  
          width: 10px;
          height: 10px;
          position: absolute;
          left: 125px;
          top: 2px;
          border-radius: 50%;
          background: red;
          box-sizing: border-box;
          animation: animloader 1s linear infinite alternate;
        }

        @keyframes animloader {
          0% {
            transform: translate(0px, 0px) scaleX(1);
          }
          14% {
            transform: translate(-12px, -16px) scaleX(1.05);
          }
          28% {
            transform: translate(-27px, -28px) scaleX(1.07);
          }
          42% {
            transform: translate(-46px, -35px) scaleX(1.1);
          }
          57% {
            transform: translate(-70px, -37px) scaleX(1.1);
          }
          71% {
            transform: translate(-94px, -32px) scaleX(1.07);
          }
          85% {
            transform: translate(-111px, -22px) scaleX(1.05);
          }
          100% {
            transform: translate(-125px, -9px) scaleX(1);
          }
        }

        .loader1 {
          width: 48px;
          height: 48px;
          margin: auto;
          position: relative;
        }

        .loader1:before {
            content: '';
            width: 48px;
            height: 5px;
            background: #000;
            opacity: 0.25;
            position: absolute;
            top: 60px;
            left: 0;
            border-radius: 50%;
            animation: shadow 0.5s linear infinite;
          }
          .loader1:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #fff;
            animation: bxSpin 0.5s linear infinite;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
          }
        @keyframes bxSpin {
          17% {
            border-bottom-right-radius: 3px;
          }
          25% {
            transform: translateY(9px) rotate(22.5deg);
          }
          50% {
            transform: translateY(18px) scale(1, .9) rotate(45deg);
            border-bottom-right-radius: 40px;
          }
          75% {
            transform: translateY(9px) rotate(67.5deg);
          }
          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes shadow {
          0%, 100% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.2, 1);
          }
        }
      
      `}</style>

      {/* Loader Container */}
      <div className="relative flex flex-col">
        <span className="loader1 !mb-12"></span>
        {/* <span className="loader">Load&nbsp;ng</span> */}
      </div>
    </div>
  );
}
