import { motion } from "framer-motion";
import Context from "../../Context/Context.jsx";
import { useContext } from "react";


function LeftAbout() {
    const { mouseEnter, mouseLeave } = useContext(Context)
    const description = "I am a Full Stack Developer with a strong focus on backend engineering and AI integration. Currently, I work as a Software Developer Intern at Findoc, architects of high-frequency trading platforms."
    const description2 = "I specialize in building scalable microservices using Golang, Python, and Docker. My work involves real-time data processing with WebSockets, optimizing database performance with PostgreSQL, and deploying AI models like Llama 3.2 and BART for intelligent automation and compliance."

    const animationValues = {
        duration: 0.4,
        y: 10,
        delay: 0.008
    }
    return (
        <div className={"gap-12 h-full max-w-2xl flex justify-center items-start p-5 flex-col text-white"}>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <h1 className={"text-3xl"} style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    about me.
                </h1>
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                className={"md:text-xl text-lg max-w-2xl font-medium"}>
                {description.split(" ").map((e, i) => {
                    return <motion.span
                        key={i}
                        initial={{
                            opacity: 0,
                            y: animationValues.y
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: animationValues.duration,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * animationValues.delay
                            }
                        }}
                        className={"inline-block px-0.5"}>{e} </motion.span>

                })}
                <br />
                <br />
                {description2.split(" ").map((e, i) => {
                    return <motion.span
                        key={i + 100}
                        initial={{
                            opacity: 0,
                            y: animationValues.y
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: animationValues.duration,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * animationValues.delay
                            }
                        }}
                        className={"inline-block px-0.5"}>{e} </motion.span>

                })}
                <br />

                <br />
                <br />
                <a href={"https://drive.google.com/file/d/1VzqS0eSuxZ1jE4qksIJthpl9ZxpDBd6k/view?usp=sharing"} target="_blank" className={"text-sm mt-16 rounded-full p-4 bg-[#545353] hover:bg-[#474040] duration-500 transition-colors"}>Download Resume</a>
            </div>
        </div>
    );
}

export default LeftAbout;
