import { useContext } from "react";
import Context from "../Context/Context.jsx";
import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaUniversity } from "react-icons/fa";

function Achievements() {
    const { mouseEnter, mouseLeave } = useContext(Context);

    const achievements = [
        {
            title: "3rd Place, Block Bash 2.0 Hackathon",
            description: "Ranked 3rd out of 1000+ participants for architecting a decentralized application on the Internet Computer Protocol (ICP).",
            icon: <FaTrophy size={40} className="text-yellow-500" />
        },
        {
            title: "Top Performer in DSA",
            description: "Solved 500+ coding problems across LeetCode and GeeksforGeeks, demonstrating strong algorithmic problem-solving skills.",
            icon: <FaCode size={40} className="text-blue-500" />
        },
        {
            title: "Ranked 2nd in University Quiz",
            description: "Demonstrated strong analytical skills and composure under pressure against 400+ competitors.",
            icon: <FaUniversity size={40} className="text-red-500" />
        }
    ];

    return (
        <div id="achievements" className="bg-[#f9f9f9] py-20 lg:px-36 px-5">
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <h1 className="text-3xl mb-12" style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    Achievements.
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, delay: index * 0.2 }
                        }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-4"
                    >
                        <div className="p-4 bg-gray-50 rounded-full">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
