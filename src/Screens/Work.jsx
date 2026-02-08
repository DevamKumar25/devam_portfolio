import EachWorkCard from "../Components/Work/EachWorkCard.jsx";
import Context from "../Context/Context.jsx";
import { useContext } from "react";
import { useState } from "react";
import { Social } from "../Utilities/Links.jsx";
import { motion } from "framer-motion";
import ecommerce from "../assets/Projects/ecommerce.png"
import findoc from "../assets/Projects/findoc.png"
import baatcheet from "../assets/Projects/baatcheet.png"
import bgremove from "../assets/Projects/bgremove.png"
import healthcare from "../assets/Projects/healthcare.png"

function Work() {
    const { mouseEnter, mouseLeave } = useContext(Context)
    const [Active, setActive] = useState(1)
    const WorkData = [
        {
            name: "Findoc: Software Developer Intern",
            description: "Built and owned a production-grade Golang microservices backend using PostgreSQL, Docker, and JWT. Architected a real-time trading analytics platform using Django, WebSockets, and AI-driven analytics (Llama 3.2). Automates SEBI compliance using BART Transformers.",
            skills: [
                "Golang", "PostgreSQL", "Docker", "Microservices", "Django", "WebSockets", "AI/ML"
            ],
            github: Social.Github,
            live: "https://findoc.com",
            image: findoc
        },
        {
            name: "BAATCHEET: Language Exchange Platform",
            description: "Designed 1-on-1 and group video calls with screen sharing using Stream Video SDK. Optimized state with Zustand and TanStack Query, reducing API load times by 60%. Mobile-responsive with 32 UI themes.",
            skills: [
                "React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "Stream.io"
            ],
            github: "https://github.com/DevamKumar25/BaatCheet",
            live: "https://baatcheet-hz9b.onrender.com/",
            image: baatcheet
        },
        {
            name: "AI Background Removal Service",
            description: "AI-driven background removal platform utilizing Clip Drop API with 99% accuracy. Secure payments via Razorpay and Clerk authentication. Drag-and-drop React frontend.",
            skills: ["React.js", "Node.js", "ClipDrop API", "Razorpay", "Clerk", "Vercel"],
            github: "https://github.com/DevamKumar25/Bg_removal",
            live: "https://bg-removal-vna6.vercel.app/",
            image: bgremove
        },
        {
            name: "Healthcare System Backend API",
            description: "This project delivers a robust and secure backend system for a healthcare application, built with a modern Node.js, Express, and MongoDB (Mongoose) stack. It features JWT authentication for secure user management and provides comprehensive RESTful APIs for managing patient records, doctor information, and patient-doctor assignmentsDesigned with scalability and security in mind, this API provides a solid foundation for any healthcare-related application, ensuring data integrity and efficient operations",
            skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RESTful API", "bcryptjs"],
            github: "https://github.com/DevamKumar25/Healthcare_Backend",
            live: "https://github.com/DevamKumar25/Healthcare_Backend",
            image: healthcare
        },
        {
            name: "Ecommerce: Full-Stack Platform",
            description: "A responsive e-commerce website built with the MERN stack and JWT authentication. Features secure user login, product management, shopping cart, and order management.",
            skills: ["React", "Tailwind CSS", "MongoDB", "Express", "Node.js", "JWT"],
            github: "https://github.com/DevamKumar25/GaneshSalesAndSupplyCo.",
            live: "https://ganesh-sales-and-supply-co.vercel.app/",
            image: ecommerce
        },
    ]
    return (
        <div id={"work"} className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8 py-12 lg:px-36 px-5">
            <div
                className="rounded-lg lg:flex hidden flex-col items-center justify-start pt-20 gap-0">
                <a
                    href={Social.Github}
                    target={"_blank"}
                    onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                    className={"rounded-full bg-gray-200 mt-16 w-48 h-16 text-center flex items-center justify-center font-semibold rotate-90 hover:bg-gray-300 border-2 border-transparent hover:border-white transition-colors duration-500"}>
                    All Work
                </a>
            </div>
            <div className="rounded-lg">
                <h1 className={"text-3xl mb-8"} style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    Selected Works.
                </h1>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.3
                        }
                    }}
                    className="grid grid-cols-1 gap-10"
                >
                    {/* Show all projects in a grid or list instead of pagination for better overview on scroll */}
                    {WorkData.map((work, index) => {
                        return <EachWorkCard key={index} {...work} index={index} />
                    })}
                </motion.div>
            </div>
            <div
                className="rounded-lg flex lg:hidden flex-row items-center justify-center pt-5 gap-3">
                <a
                    href={Social.Github}
                    target={"_blank"}
                    onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                    className={"rounded-full mb-4 bg-gray-200 w-48 h-16 text-center flex items-center justify-center font-semibold hover:bg-gray-300 border-2 border-transparent hover:border-white transition-colors duration-500"}>
                    All Work
                </a>
            </div>
        </div>
    );
}

function EachPaginationButton({ page, isActive, setIsActive }) {
    const { mouseEnter, mouseLeave } = useContext(Context)
    return (
        <a
            href={"#work"}
            onClick={() => setIsActive(page)}
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            style={{
                backgroundColor: isActive ? "#3e3e3e" : ' rgb(229,231,235)',
                color: isActive ? "white" : 'black',
            }}
            className={"rounded-full bg-gray-200 mb-4 w-16 h-16 text-center flex items-center justify-center font-semibold hover:bg-[#f5e6d5] border-2 border-transparent hover:border-white transition-colors duration-500"}>
            {page}
        </a>
    );
}

export default Work;
