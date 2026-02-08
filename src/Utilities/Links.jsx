import { FaLinkedinIn, FaQuora } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export const Social = {
  Linkedin: "https://www.linkedin.com/in/devamkumar758",
  Github: "https://github.com/DevamKumar25",
  Leetcode: "https://leetcode.com/u/Devam25kumar/",
  GFG: "https://www.geeksforgeeks.org/user/devamkumar758/",
  Email: "devamkumar758@gmail.com",
  Phone: "+91-6202121925"
};

export const socials = [
  {
    name: "LinkedIn",
    link: Social.Linkedin,
    icon: <FaLinkedinIn size={20} color="white" />,
  },
  {
    name: "GitHub",
    link: Social.Github,
    icon: <FiGithub size={20} color="white" />,
  },
  {
    name: "LeetCode",
    link: Social.Leetcode,
    icon: <SiLeetcode size={20} color="white" />,
  },
  {
    name: "GeeksforGeeks",
    link: Social.GFG,
    icon: <SiGeeksforgeeks size={20} color="white" />,
  },
];
