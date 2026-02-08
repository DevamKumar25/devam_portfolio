import myImage from "../../../assets/images/devam1.png";
import { motion } from "framer-motion";
function Image() {
    return (
        <motion.div
            initial={{
                y: 50,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1]
                }
            }}
            className="h-2/3 w-[85%] bg-gray-200 rounded-3xl relative left-[-100px] shadow-md">
            <motion.img
                initial={{
                    y: 50,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1]
                    }
                }}
                src={myImage} alt="Devam Kumar" className="rounded-2xl w-full h-full object-cover" />
        </motion.div>
    );
}

export default Image;
