import { useContext } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ThemeContext } from './theme';
import ParticleBackground from './particales';
import project1Image from '../assets/project-1-image.jpg'
import project2Image from '../assets/project-2-image.jpg'
import firebaseAuth from '../assets/Firebase-auth.png'
import firebaseLogo from '../assets/Firebase.png'
import firebaseRealtimeDB from '../assets/Firebase-Realtime-DB.png'
import tailwindcssLogo from '../assets/tailwindcss-logo.svg'

// Import your actual project images
const project3Image = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&auto=format";

const projectImages = {
    1: project1Image,
    2: project2Image,
    3: project3Image
};

function Projects() {
    const { theme } = useContext(ThemeContext)

    const projectsData = [
        {
            id: 1,
            title: "Inventory Management App",
            description: "Developed a React + TailwindCSS app with Firebase backend and API integration to manage products, track stock, and update inventory in real time; version controlled with Git.",
            techStack: ["React", "Tailwindcss", "API INTEGRATION", "Git", 'Firebase', 'Firebase Realtime Database'],
            liveDemo: "https://inventory-tracking-mehulnawal.netlify.app/",
            github: "https://github.com/mehulnawal/react-inventoryTracking",
            image: projectImages[1]
        },
        {
            id: 2,
            title: "🎬 Firebase Login System",
            description: "Firebase Login System – Built a secure React authentication system using Firebase (Email/Password & Google Sign-In) with protected routes and deployed on Netlify.",
            techStack: ["Javascript", "HTML", "Css", "Tailwindcss", "API INTEGRATION", "Git", 'Firebase-Auth'],
            liveDemo: "https://github.com/mehulnawal/React-Login-System",
            github: "https://react-login-system-mehul.netlify.app/",
            image: projectImages[2]
        },
        // {
        //     id: 3,
        //     title: "Real time Chat App",
        //     description: "Real-time COVID-19 tracking application with global and country-specific statistics. Features interactive charts, daily updates, and vaccination progress tracking with clean data visualization.",
        //     techStack: ["Javascript", "HTML", "Css", "Tailwindcss", "API INTEGRATION", "Git"],
        //     liveDemo: "https://corona-api-js-project.netlify.app/",
        //     github: "https://github.com/mehulnawal/corona-Api-js-project",
        //     image: projectImages[3]
        // }
    ];

    // Tech stack with logos from CDN
    const getTechStackWithLogos = (projectTechStack) => {
        const techLogos = {
            "React": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            "Javascript": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            "HTML": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            "Css": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            "Tailwindcss": {
                logo: tailwindcssLogo,
            },
            "API INTEGRATION": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
            },
            "Bootstrap": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
            "Git": {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            "Firebase-Auth": {
                logo: firebaseAuth
            },
            "Firebase": {
                logo: firebaseLogo
            },
            "Firebase Realtime Database": {
                logo: firebaseRealtimeDB
            }
        };

        return projectTechStack.map(tech => ({
            name: tech,
            ...techLogos[tech] || { logo: null, color: "bg-gray-500" }
        }));
    };

    const isLargeScreen = window.innerWidth >= 1024;

    return <>
        <div className={`py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#0A0A0A] text-[#fff]"} z-3`} id="projects">
            <ParticleBackground />

            {/* header */}
            <div className="text-center mb-16" id='header'>
                <h1 className={`font-bold text-2xl md:text-3xl ${theme === "light" ? "text-[#000]" : "text-[#fff]"}`}>
                    Selected Projects
                </h1>

                <h4 className={`text-center text-md md:text-lg ${theme === "light" ? "text-[#000000a7]" : "text-gray-300"}`}>
                    Professional journey and internship experience
                </h4>
            </div>

            {/* Projects Container */}
            <div className="relative">
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className={`sticky lg:w-[85%] mx-auto mb-16 ${theme === "light" ? "bg-white/90 border-gray-200 text-black" : "bg-gray-800/90 border-gray-700 text-white"} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:scale-[1.01]`}
                        style={{
                            top: isLargeScreen
                                ? `${150 + index * 20}px`
                                : index === 0
                                    ? "40px"
                                    : `${80 + index * 20}px`,
                            zIndex: 50 + index,
                            paddingBottom: "2rem",
                            marginBottom: index === projectsData.length - 1 ? "4rem" : "1rem",
                        }}

                    // className={`sticky lg:w-[85%] mx-auto mb-16 ${theme === "light" ? "bg-white/90 border-gray-200 text-black" : "bg-gray-800/90 border-gray-700 text-white"} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:scale-[1.01]`}
                    // style={{
                    //     top: `${130 + (index * 20)}px`,
                    //     zIndex: 50 + index,
                    //     marginBottom: '4rem'
                    // }}
                    >
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                            {/* Left Content */}
                            <div className="flex-1 space-y-4 lg:space-y-6">
                                <div>
                                    <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${theme === "light" ? "text-black" : "text-white"}`}>
                                        {project.title}
                                    </h2>
                                    <p className={`text-base lg:text-lg leading-relaxed ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="space-y-3">
                                    <h3 className={`text-lg lg:text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2 lg:gap-3">
                                        {getTechStackWithLogos(project.techStack).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#141414] text-[#fff]"}  shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105`}
                                            >
                                                {tech.logo && (
                                                    <img
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        className="w-4 h-4 lg:w-5 lg:h-5"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                )}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons - Smaller Size */}
                                <div className="flex gap-3 pt-2 lg:pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 group ${theme === "light"
                                            ? "bg-gray-100 hover:bg-gray-200 text-black border border-gray-300"
                                            : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                                            }`}
                                    >
                                        <FiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 group"
                                    >
                                        <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-80 xl:w-96">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="relative w-full h-full lg:h-64 xl:h-72 object-contain rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-600/50"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom spacing for proper scrolling */}
            {/* <div className="h-96"></div> */}
        </div>
    </>;
}

export default Projects;