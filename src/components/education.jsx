import { useContext } from "react"
import { FaGraduationCap, FaCode, FaLaptopCode, FaUniversity, FaSun } from "react-icons/fa"
import { ThemeContext } from "./theme"
import ParticleBackground from "./particales"

function Education() {
    const { theme } = useContext(ThemeContext)

    const educationData = [
        {
            id: 1,
            title: "MSC IT",
            subtitle: "Master of Science in Information Technology",
            duration: "2025 - 2027",
            institution: "Swarnim University, Ghandhinagar (External)",
            status: "Current",
            icon: FaUniversity,
            grade: "Pursuing"
        },
        {
            id: 2,
            title: "Web Development Course",
            subtitle: "Full Stack Web Development",
            duration: "2024 - 2025",
            institution: "Red & White Skill Education, Surat",
            status: "Current",
            icon: FaCode,
            grade: "Certified"
        },
        {
            id: 3,
            title: "BCA",
            subtitle: "Bachelor of Computer Applications",
            duration: "2021 - 2024",
            institution: "SD Jain International College, Surat",
            status: "Completed",
            icon: FaGraduationCap,
            grade: "First Class - 75 CGPA"
        },
        {
            id: 4,
            title: "12th Standard",
            subtitle: "Higher Secondary Certificate",
            duration: "2020 - 2021",
            institution: "SBR Maheshwari vidyapeeth, Surat",
            status: "Completed",
            icon: FaLaptopCode,
            grade: "85.5%"
        }
    ]

    return (
        <div className={`py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#0A0A0A] text-[#fff]"} relative overflow-hidden`} id="education">

            <ParticleBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h1 className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ${theme == "light" ? "text-[#000]" : "text-[#fff]"} mb-2 sm:mb-4`}>
                        Education
                    </h1>
                    <h4 className={`text-center text-sm sm:text-md md:text-lg lg:text-xl ${theme == "light" ? "text-[#000000a7]" : "text-gray-300"} max-w-2xl mx-auto px-4`}>
                        Academic background and qualifications
                    </h4>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Line - Responsive positioning */}
                    <div className={`absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 ${theme === "light" ? "bg-gray-300" : "bg-gray-600"}`}></div>

                    {/* Education Items */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                        {educationData.map((edu, index) => {
                            const IconComponent = edu.icon
                            const isEven = index % 2 === 0

                            return (
                                <div
                                    key={edu.id}
                                    className={`relative flex items-start ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
                                    style={{
                                        animation: `slideInFromLeft 0.6s ease-out ${index * 0.2}s both`
                                    }}
                                >
                                    {/* Timeline Icon - Responsive positioning */}
                                    <div className={`absolute left-2 sm:left-4 md:left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full ${edu.status === "Current"
                                        ? "bg-blue-500"
                                        : theme === "light"
                                            ? "bg-green-500"
                                            : "bg-green-400"
                                        } shadow-lg`}>
                                        <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-12 sm:ml-16 md:ml-20 lg:ml-0 ${isEven
                                        ? 'lg:mr-auto lg:pr-8 xl:pr-16'
                                        : 'lg:ml-auto lg:pl-8 xl:pl-16'
                                        } lg:w-1/2 w-full`}>
                                        <div className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${theme === "light"
                                            ? "bg-white shadow-md border border-gray-100 hover:shadow-lg"
                                            : "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                                            } relative transition-all duration-300 hover:transform hover:scale-105`}>

                                            {/* Status Badge - Responsive sizing */}
                                            <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${edu.status === "Current"
                                                ? "bg-blue-500 text-white"
                                                : "bg-green-500 text-white"
                                                }`}>
                                                {edu.status}
                                            </div>

                                            {/* Arrow pointing to timeline - Hidden on mobile */}
                                            <div className={`hidden lg:block absolute top-4 md:top-6 ${isEven ? '-right-2' : '-left-2'
                                                } w-0 h-0 border-t-6 border-b-6 sm:border-t-8 sm:border-b-8 border-transparent ${isEven
                                                    ? `border-l-6 sm:border-l-8 ${theme === "light" ? "border-l-white" : "border-l-gray-800"}`
                                                    : `border-r-6 sm:border-r-8 ${theme === "light" ? "border-r-white" : "border-r-gray-800"}`
                                                }`}></div>

                                            <div>
                                                <h3 className={`text-lg sm:text-xl md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 ${theme === "light" ? "text-gray-900" : "text-white"
                                                    }`}>
                                                    {edu.title}
                                                </h3>
                                                <p className={`text-xs sm:text-sm md:text-base mb-1 sm:mb-2 ${theme === "light" ? "text-gray-600" : "text-gray-300"
                                                    } leading-relaxed`}>
                                                    {edu.subtitle}
                                                </p>
                                                <p className={`text-xs sm:text-sm md:text-base mb-2 sm:mb-3 ${theme === "light" ? "text-gray-700" : "text-gray-400"
                                                    } break-words`}>
                                                    📍 {edu.institution}
                                                </p>
                                                <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-0">
                                                    <span className={`text-xs sm:text-sm md:text-base font-medium ${theme === "light" ? "text-blue-600" : "text-blue-400"
                                                        }`}>
                                                        📅 {edu.duration}
                                                    </span>
                                                    <span className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-gray-200"
                                                        } whitespace-nowrap`}>
                                                        {edu.grade}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Animations and Responsive Styles */}
            <style jsx>{`
                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) translateY(0);
                    }
                }

                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) translateY(0);
                    }
                }

                /* Mobile-first approach - all items slide from left on mobile */
                @media (max-width: 1023px) {
                    .space-y-6 > div,
                    .space-y-8 > div,
                    .space-y-10 > div,
                    .space-y-12 > div {
                        animation: slideInFromLeft 0.6s ease-out calc(var(--index) * 0.15s) both;
                    }
                }

                /* Desktop - alternating animation */
                @media (min-width: 1024px) {
                    .space-y-6 > div:nth-child(odd),
                    .space-y-8 > div:nth-child(odd),
                    .space-y-10 > div:nth-child(odd),
                    .space-y-12 > div:nth-child(odd) {
                        animation: slideInFromLeft 0.6s ease-out calc(var(--index) * 0.15s) both;
                    }
                    
                    .space-y-6 > div:nth-child(even),
                    .space-y-8 > div:nth-child(even),
                    .space-y-10 > div:nth-child(even),
                    .space-y-12 > div:nth-child(even) {
                        animation: slideInFromRight 0.6s ease-out calc(var(--index) * 0.15s) both;
                    }
                }

                /* Ensure text doesn't overflow on very small screens */
                @media (max-width: 320px) {
                    .break-words {
                        word-break: break-all;
                        hyphens: auto;
                    }
                }

                /* Custom responsive utilities */
                @media (min-width: 475px) {
                    .xs\\:flex-row {
                        flex-direction: row;
                    }
                    .xs\\:items-center {
                        align-items: center;
                    }
                    .xs\\:gap-0 {
                        gap: 0;
                    }
                }

                /* Smooth scrolling for anchor links */
                html {
                    scroll-behavior: smooth;
                }

                /* Enhanced hover effects for touch devices */
                @media (hover: hover) {
                    .hover\\:transform:hover {
                        transform: translateY(-2px);
                    }
                    
                    .hover\\:scale-105:hover {
                        transform: scale(1.02);
                    }
                }

                /* Reduce motion for users who prefer it */
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default Education