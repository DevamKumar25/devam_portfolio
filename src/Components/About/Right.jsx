import { motion } from "framer-motion";
import Context from "../../Context/Context.jsx";
import { useContext } from "react";
import { useMemo } from "react";
import {
    TbBrandGolang,
    TbBrandPython,
    TbBrandCpp,
    TbSql,
    TbBrandJavascript,
    TbBrandReact,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandTailwind,
    TbBrandDjango,
    TbBrandNodejs,
    TbBrandDocker,
    TbBrandGit,
    TbBrandGithub,
    TbBrain,
    TbCpu,
    TbSchema,
    TbSparkles,
    TbCertificate,
    TbExternalLink
} from "react-icons/tb";
import {
    BiSolidServer,
    BiLogoPostgresql,
    BiLogoMongodb,
    BiLogoFlask
} from "react-icons/bi";
import {
    SiExpress,
    SiMysql,
    SiLinux,
    SiPostman,
    SiK6,
    SiMetabase,
    SiSpacy
} from "react-icons/si";

function RightSkills() {
    const { mouseEnter, mouseLeave } = useContext(Context)
    const skillIconSize = 30;

    // Categorizing skills for better display
    const languages = useMemo(() => [
        { name: "Golang", description: "Language", icon: <TbBrandGolang size={skillIconSize} /> },
        { name: "Python", description: "Language", icon: <TbBrandPython size={skillIconSize} /> },
        { name: "JavaScript", description: "Language", icon: <TbBrandJavascript size={skillIconSize} /> },
        { name: "C++", description: "Language", icon: <TbBrandCpp size={skillIconSize} /> },
        { name: "SQL", description: "Query Language", icon: <TbSql size={skillIconSize} /> },
    ], [])

    const frontend = useMemo(() => [
        { name: "React.js", description: "Library", icon: <TbBrandReact size={skillIconSize} /> },
        { name: "HTML5", description: "Structure", icon: <TbBrandHtml5 size={skillIconSize} /> },
        { name: "CSS3", description: "Style", icon: <TbBrandCss3 size={skillIconSize} /> },
        { name: "Tailwind CSS", description: "Framework", icon: <TbBrandTailwind size={skillIconSize} /> },
        { name: "Django Templates", description: "Template Engine", icon: <TbBrandDjango size={skillIconSize} /> },
    ], [])

    const backend = useMemo(() => [
        { name: "Node.js", description: "Runtime", icon: <TbBrandNodejs size={skillIconSize} /> },
        { name: "Express.js", description: "Framework", icon: <SiExpress size={skillIconSize} /> },
        { name: "Django", description: "Framework", icon: <TbBrandDjango size={skillIconSize} /> },
        { name: "Flask", description: "Framework", icon: <BiLogoFlask size={skillIconSize} /> },
        { name: "PostgreSQL", description: "Database", icon: <BiLogoPostgresql size={skillIconSize} /> },
        { name: "MongoDB", description: "Database", icon: <BiLogoMongodb size={skillIconSize} /> },
        { name: "MySQL", description: "Database", icon: <SiMysql size={skillIconSize} /> },
        { name: "RESTful APIs", description: "Architecture", icon: <BiSolidServer size={skillIconSize} /> },
    ], [])

    const tools = useMemo(() => [
        { name: "Docker", description: "Containerization", icon: <TbBrandDocker size={skillIconSize} /> },
        { name: "Postman", description: "API Testing", icon: <SiPostman size={skillIconSize} /> },
        { name: "Linux", description: "OS", icon: <SiLinux size={skillIconSize} /> },
        { name: "Git", description: "Version Control", icon: <TbBrandGit size={skillIconSize} /> },
        { name: "GitHub", description: "Collaboration", icon: <TbBrandGithub size={skillIconSize} /> },
        { name: "K6", description: "Load Testing", icon: <SiK6 size={skillIconSize} /> },
        { name: "Metabase", description: "BI Tool", icon: <SiMetabase size={skillIconSize} /> },
        { name: "n8n", description: "Automation", icon: <TbSchema size={skillIconSize} /> },
    ], [])

    const ai = useMemo(() => [
        { name: "Ollama", description: "LLM Runner", icon: <TbCpu size={skillIconSize} /> },
        { name: "spaCy", description: "NLP Library", icon: <SiSpacy size={skillIconSize} /> },
        { name: "Transformers", description: "Hugging Face", icon: <TbBrain size={skillIconSize} /> },
        { name: "LLM Integration", description: "Generative AI", icon: <TbSparkles size={skillIconSize} /> },
    ], [])

    const certifications = useMemo(() => [
        {
            name: "Data Structures & Algo (C++)",
            issuer: "GeeksforGeeks",
            date: "Jan 2025",
            link: "https://drive.google.com/file/d/1IsOkA5l2fKStXb3K-xkT8pM_hxVp31fh/view?usp=sharing",
            icon: <TbCertificate size={skillIconSize} />
        },
        {
            name: "Cloud Computing",
            issuer: "NPTEL (IIT Kharagpur)",
            date: "Oct 2024",
            link: "https://drive.google.com/file/d/1iR9a9RQl3SHAhePbIA_o8giQg9C6UXje/view?usp=sharing",
            icon: <TbCertificate size={skillIconSize} />
        }
    ], [])

    return (
        <div className={"gap-8 h-full w-full flex justify-start items-start p-5 md:pl-[10%] px-5 flex-col text-black overflow-y-auto"}>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <h1 className={"text-3xl mb-4"} style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    Technical Skills.
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2">Languages</h3>
                    {languages.map((skill, i) => <EachSkillCard key={i} {...skill} />)}

                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mt-4">Tools</h3>
                    {tools.map((skill, i) => <EachSkillCard key={i} {...skill} />)}

                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mt-4">AI & ML</h3>
                    {ai.map((skill, i) => <EachSkillCard key={i} {...skill} />)}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2">Frontend</h3>
                    {frontend.map((skill, i) => <EachSkillCard key={i} {...skill} />)}

                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mt-4">Backend & DB</h3>
                    {backend.map((skill, i) => <EachSkillCard key={i} {...skill} />)}

                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mt-4">Certifications</h3>
                    {certifications.map((cert, i) => <EachCertificationCard key={i} {...cert} />)}
                </div>
            </div>
        </div>
    );
}

function EachSkillCard({ name, description, icon }) {
    return (
        <div className={"flex gap-4 items-center group"}>
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                {icon}
            </div>
            <div>
                <motion.h1
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                    className={"text-md font-semibold"}>{name}</motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } }}
                    className={"text-xs text-gray-600"}>{description}</motion.p>
            </div>
        </div>
    )
}

function EachCertificationCard({ name, issuer, date, link, icon }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={"flex gap-4 items-center group hover:bg-gray-50 p-2 rounded-lg transition-all"}>
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200">
                {icon}
            </div>
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                    className="flex justify-between items-center w-full"
                >
                    <h1 className={"text-md font-semibold group-hover:text-blue-600 transition-colors"}>{name} <TbExternalLink className="inline text-xs ml-1 opacity-50 group-hover:opacity-100" /></h1>
                </motion.div>
                <div className="flex justify-between items-center text-xs text-gray-600">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } }}
                    >{issuer}</motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } }}
                        className="text-gray-400"
                    >{date}</motion.span>
                </div>
            </div>
        </a>
    )
}

export default RightSkills;
