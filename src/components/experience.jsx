import { useContext } from "react"
import { ThemeContext } from "./theme"
import ParticleBackground from "./particales"
import { FaCode, FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaCertificate } from "react-icons/fa"

function Experience() {
    const { theme } = useContext(ThemeContext)

    const experienceData = [
        {
            id: 1,
            title: "Frontend Developer Intern",
            company: "Info Devin Technologies",
            duration: "December 2024 - April 2025",
            location: "Surat, Gujarat",
            type: "Internship",
            icon: FaCode,
            achievements: [
                "Worked on a e-commerce website",
                "Collaborated with senior developers on projects",
                "Tech Stack used - Html, Css, Bootstrap, Javascript"
            ]
        },
        {
            id: 2,
            title: "Web Development Intern",
            company: "Techno Hacks Solution",
            duration: "April 2025 - May 2025",
            location: "Remote",
            type: "Internship",
            icon: FaLaptopCode,
            achievements: [
                "Submitted previous projects for review and implemented improvements based on feedback",
                "Tech Stack used - Html, Css, Javascript"
            ]
        }
    ]

    return <>
        <ParticleBackground />
        <div className={`py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#0A0A0A] text-[#fff]"} z-3`} id="experience">

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`font-bold text-2xl md:text-3xl ${theme === "light" ? "text-[#000]" : "text-[#fff]"} mb-2`}>
                        Experience
                    </h1>
                    <h4 className={`text-center text-md md:text-lg ${theme === "light" ? "text-[#000000a7]" : "text-gray-300"}`}>
                        Professional journey and internship experience
                    </h4>
                </div>

                {/* Experience Cards */}
                <div className="space-y-8 mb-16">
                    {experienceData.map((exp, index) => {
                        const IconComponent = exp.icon

                        return (
                            <div
                                key={exp.id}
                                className={`transform transition-all duration-500 hover:scale-[1.02] cursor-pointer group`}
                                style={{
                                    animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`
                                }}
                            >
                                <div className={`flex flex-col lg:flex-row gap-6 p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${theme === "light"
                                    ? "bg-white shadow-lg border border-gray-100 hover:shadow-blue-100/50 hover:border-blue-200"
                                    : "bg-gray-800 border border-gray-700 hover:shadow-2xl hover:border-gray-600 hover:bg-gray-750"
                                    }`}>

                                    {/* Left Section - Icon & Type */}
                                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:min-w-[120px]">
                                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${theme === "light" ? "bg-blue-50 group-hover:bg-blue-100" : "bg-blue-900/30 group-hover:bg-blue-900/50"
                                            }`}>
                                            <IconComponent className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 ${theme === "light" ? "text-blue-600 group-hover:text-blue-700" : "text-blue-400 group-hover:text-blue-300"
                                                }`} />
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105 ${theme === "light"
                                            ? "bg-blue-100 text-blue-800 group-hover:bg-blue-200"
                                            : "bg-blue-900/50 text-blue-300 group-hover:bg-blue-900/70"
                                            }`}>
                                            {exp.type}
                                        </span>
                                    </div>

                                    {/* Right Section - Content */}
                                    <div className="flex-1">
                                        <div className="mb-4">
                                            <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-600 ${theme === "light" ? "text-gray-900" : "text-white group-hover:text-blue-400"
                                                }`}>
                                                {exp.title}
                                            </h3>

                                            <div className="flex flex-wrap items-center gap-4 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <FaBuilding className={`w-4 h-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"
                                                        }`} />
                                                    <span className={`text-lg font-medium ${theme === "light" ? "text-gray-800" : "text-gray-200"
                                                        }`}>
                                                        {exp.company}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FaCalendarAlt className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"
                                                        }`} />
                                                    <span className={`${theme === "light" ? "text-gray-700" : "text-gray-300"
                                                        }`}>
                                                        {exp.duration}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <FaMapMarkerAlt className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"
                                                        }`} />
                                                    <span className={`${theme === "light" ? "text-gray-700" : "text-gray-300"
                                                        }`}>
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Achievements */}
                                        <div>
                                            <h4 className={`text-sm font-semibold mb-3 ${theme === "light" ? "text-gray-800" : "text-gray-200"
                                                }`}>
                                                Key Achievements:
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <li
                                                        key={achIndex}
                                                        className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
                                                        style={{
                                                            animation: `fadeInLeft 0.5s ease-out ${achIndex * 0.1 + 0.3}s both`
                                                        }}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-125 ${theme === "light" ? "bg-blue-500 group-hover:bg-blue-600" : "bg-blue-400 group-hover:bg-blue-300"
                                                            }`}></div>
                                                        <span className={`text-sm leading-relaxed transition-all duration-300 ${theme === "light" ? "text-gray-700 group-hover:text-gray-800" : "text-gray-300 group-hover:text-white"
                                                            }`}>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Experience Summary */}
                <div className={`text-center p-8 rounded-2xl ${theme === "light"
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
                    : "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
                    }`}>
                    <FaCertificate className={`w-12 h-12 mx-auto mb-4 ${theme === "light" ? "text-blue-600" : "text-blue-400"
                        }`} />
                    <h3 className={`text-xl font-bold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"
                        }`}>
                        Building Experience Through Learning
                    </h3>
                    <p className={`text-sm max-w-2xl mx-auto ${theme === "light" ? "text-gray-700" : "text-gray-300"
                        }`}>
                        Through hands-on internships, I've gained valuable experience in web development,
                        working with modern technologies and learning industry best practices.
                    </p>

                    <div className="flex justify-center gap-8 mt-6">
                        <div className="text-center">
                            <div className={`text-2xl font-bold ${theme === "light" ? "text-blue-600" : "text-blue-400"
                                }`}>
                                2
                            </div>
                            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"
                                }`}>
                                Internships
                            </div>
                        </div>
                        <div className="text-center">
                            <div className={`text-2xl font-bold ${theme === "light" ? "text-blue-600" : "text-blue-400"
                                }`}>
                                5
                            </div>
                            <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"
                                }`}>
                                Months
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* Enhanced hover effects */
                .group:hover .w-16 {
                    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
                }

                /* Smooth pulse animation for achievement dots */
                .group:hover .w-2 {
                    animation: pulse 1s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                }
            `}</style>
        </div>
    </>
}

export default Experience