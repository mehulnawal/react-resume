import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./theme";
import ParticleBackground from "./particales";

function About() {
    const { theme } = useContext(ThemeContext)

    return <>
        <section className={`py-0 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#0A0A0A] text-[#fff]"}`} id="about">
            <ParticleBackground />

            <h1 className={`font-bold text-2xl md:text-3xl text-center ${theme == "light" ? "text-[#000]" : "text-[#fff]"}`}>About Me</h1>

            <h4 className={`text-center text-md md:text-lg lg:text-lg my-4 ${theme == "light" ? "text-[#000000a7]" : "text-gray-300"} text-lg`}>Behind the code</h4>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 px-6 mt-15">

                {/* Left side - Text */}
                <div className="md:w-1/2 text-lg leading-relaxed">
                    <p className="mb-4">
                        I’m <span className={`font-semibold ${theme == "light" ? "text-black" : "text-white"}`}>
                            <span className="text-xl text-center text-[#3B82F6] font-bold">Mehul Nawal</span></span> — a creative <span className="text-[#3B82F6] font-bold">Frontend</span> developer turning ideas into sleek, interactive, and impactful digital experiences.
                    </p>

                    <p className={`${theme == "light" ? "text-[#000000a7]" : "text-gray-300"}`}>
                        For me, every project is a chance to blend design, code, and creativity into something unforgettable.
                    </p>

                    <div id="socialLinksCard" className="mt-3 flex items-center gap-2 text-white">
                        <a target="_blank" href="https://github.com/mehulnawal" className="socialLinks bg-[#202020] py-3 px-3 rounded-full w-fit">
                            <LuGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/mehul-nawal-2b1492244/" target="_blank" className="socialLinks bg-[#202020] py-3 px-3 rounded-full w-fit">
                            <SlSocialLinkedin />
                        </a>

                        <a target="_blank" href="mailto:mehulnawal2904@gmail.com" className="socialLinks bg-[#202020] py-3 px-3 rounded-full w-fit">
                            <CiMail />
                        </a>

                        <a target="_blank" href="https://wa.me/9879216262?text=Hello, I saw your portfolio, I saw your Portfolio" className="socialLinks bg-[#202020] py-3 px-3 rounded-full w-fit"><BsWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Right side - Spline Embed */}
                <div className="md:w-1/2 w-full md:block hidden">
                    <div className="relative w-full pb-[56.25%] md:pb-[40%] overflow-hidden rounded-lg spline-container">
                        <iframe
                            src="https://my.spline.design/genkubgreetingrobot-MucxLwoWNYAWgZqkRNPYd7Il/"
                            loading="lazy"
                            className="spline-iframe absolute top-0 left-0 w-full h-full"
                            title="3D Model"
                            style={{
                                width: "100%",
                                height: "calc(100% + 110px)", // taller to crop watermark
                                top: "-45px", // moves iframe up to hide bottom watermark
                                border: "none",
                            }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default About;
