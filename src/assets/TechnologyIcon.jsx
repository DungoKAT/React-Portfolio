import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman, SiRedux, SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import PythonIconPNG from "../assets/python.png";
import JavaIconPNG from "../assets/JavaIcon.png";

const TechnologyIcon = [
    {
        name: "HTML",
        icon: <FaHtml5 className="text-[#e44d26]" />,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt className="text-[#1572b6]" />,
    },
    {
        name: "JavaScript",
        icon: <RiJavascriptFill className="text-[#f7df1e]" />,
    },
    {
        name: "ReactJS",
        icon: <FaReact className="text-[#61dafb]" />,
    },
    {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-[#16becb]" />,
    },
    {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-[#2c78c6]" />,
    },
    {
        name: "NodeJS",
        icon: <FaNodeJs className="text-[#7fbc00]" />,
    },
    {
        name: "Python",
        icon: <img className="w-9" src={PythonIconPNG} alt="" />,
    },
    {
        name: "Java",
        icon: <img className="h-9" src={JavaIconPNG} alt="" />,
    },
    {
        name: "Postman",
        icon: <SiPostman className="text-[#fc6b34]" />,
    },
    {
        name: "Express",
        icon: <SiExpress className="text-white" />,
    },
    {
        name: "Redux",
        icon: <SiRedux className="text-[#7549bb]" />,
    },
];

export default TechnologyIcon;
