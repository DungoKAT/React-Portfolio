import { useState } from "react";
import PropTypes from "prop-types";
import ToolTip from "../Components/Global/ToolTip";
import MyselfSuit from "../assets/MyselfSuit.png";
import TechnologyIcon from "../assets/TechnologyIcon";

const About = () => {
    const [tabSelected, setTabSelected] = useState("Profile");
    return (
        <section className="w-full py-10 flex text-components-font animate-fadeIn">
            <div className="w-full grid grid-cols-6 gap-5 max-tablet767:block">
                <div className="col-span-2 flex flex-col items-center max-tablet767:w-full">
                    <img
                        className="max-w-[240px] w-full rounded-full object-cover max-mobile479:max-w-[250px] max-tablet640:max-w-[300px] max-tablet767:max-w-[350px]"
                        src={MyselfSuit}
                        alt=""
                    />
                    <h5 className="mt-5 font-kanit text-xl font-semibold text-center max-mobile479:text-xl max-mobile479:max-w-[350px] max-tablet640:text-2xl max-tablet640:max-w-[500px] max-tablet767:max-w-[600px] max-tablet767:text-4xl">
                        Hi! I&apos;m Punnaphat,
                        <br /> a passionate Front End Developer dedicated to
                        creating exceptional user experiences.
                    </h5>
                    <a
                        className="mt-4 py-2 px-4 bg-white font-kanit text-black shadow-lg rounded-lg transition-colors hover:bg-[#c3c3c3] max-tablet767:mt-6 max-tablet767:py-3 max-tablet767:px-6 max-tablet767:text-2xl"
                        href="https://portfolio-api-dungokats-projects.vercel.app/docs/Punnaphat Phiamtanapuwanon.pdf"
                        target="_blank"
                    >
                        Get a resume
                    </a>
                </div>
                <div className="col-span-4 px-5 max-tablet767:hidden">
                    <div className="w-full flex items-center border-b border-components-buttonHover">
                        <TabButton
                            tabText="Profile"
                            tabSelected={tabSelected}
                            setTabSelected={setTabSelected}
                        />
                        <TabButton
                            tabText="Skills"
                            tabSelected={tabSelected}
                            setTabSelected={setTabSelected}
                        />
                        <TabButton
                            tabText="Experience"
                            tabSelected={tabSelected}
                            setTabSelected={setTabSelected}
                        />
                    </div>
                    {tabSelected === "Profile" ? (
                        <Profile />
                    ) : tabSelected === "Skills" ? (
                        <Skills />
                    ) : (
                        tabSelected === "Experience" && <Experience />
                    )}
                </div>
                <div className="w-full mt-20 hidden max-tablet767:block">
                    <h3 className="pb-2 font-opensans text-2xl font-semibold border-b border-components-buttonHover">
                        Profile
                    </h3>
                    <Profile />
                    <h3 className="pb-2 font-opensans text-2xl font-semibold border-b border-components-buttonHover">
                        Skills
                    </h3>
                    <Skills />
                    <h3 className="pb-2 font-opensans text-2xl font-semibold border-b border-components-buttonHover">
                        Experience
                    </h3>
                    <Experience />
                </div>
            </div>
        </section>
    );
};

const TabButton = ({ tabText, tabSelected, setTabSelected }) => {
    return (
        <>
            <button
                className={
                    (tabSelected === tabText
                        ? "font-semibold text-components-font border-components-font"
                        : "text-components-fontHover border-transparent") +
                    " -mb-0.5 px-5 py-2 font-opensans border-b-2 transition-all hover:bg-components-buttonHover"
                }
                onClick={() => setTabSelected(tabText)}
            >
                {tabText}
            </button>
            {tabText !== "Experience" && (
                <span className="w-px h-6 bg-components-buttonHover"></span>
            )}
        </>
    );
};

const Profile = () => {
    const profileInfomation = [
        {
            strong: "Full Name :",
            text: "Punnaphat Phiamtanapuwanon",
        },
        {
            strong: "Nickname :",
            text: "Dung",
        },
        {
            strong: "Now I'm :",
            text: "23 years old",
        },
        {
            strong: "Education :",
            text: "Graduated in Information Technology from King Mongkut's Institute of Technology Ladkrabang since 2023",
        },
        {
            strong: "I live in :",
            text: "Kanchanaburi 71000, Thailand",
        },
        {
            strong: "Email :",
            text: "punnaphat.phiam@gmail.com",
        },
        {
            strong: "Phone :",
            text: "098-351-6540",
        },
    ];
    return (
        <div className="w-full py-10 animate-fadeIn">
            {profileInfomation.map((item, index) => {
                return (
                    <div
                        className="mb-4 grid grid-cols-4 max-mobile479:block"
                        key={index}
                    >
                        <h3 className="col-span-1 font-notosans font-semibold">
                            {item.strong}
                        </h3>
                        <p className="col-span-3 font-opensans">{item.text}</p>
                    </div>
                );
            })}
        </div>
    );
};

const Skills = () => {
    return (
        <div className="w-full py-10 animate-fadeIn">
            <h3 className="font-notosans font-semibold text-components-font">
                Basic - Intermediate
            </h3>
            <div className="mt-3 mb-5 flex flex-wrap">
                {TechnologyIcon.slice(0, TechnologyIcon.length - 2).map(
                    (tech, index) => {
                        return (
                            <ToolTip
                                text={tech.name}
                                position="top-3/4"
                                key={index}
                            >
                                <div className="m-2 p-2 text-4xl bg-gray-800 rounded-full">
                                    {tech.icon}
                                </div>
                            </ToolTip>
                        );
                    }
                )}
            </div>
            <h3 className="font-notosans font-semibold text-components-font">
                Learning
            </h3>
            <div className="mt-3 mb-5 flex flex-wrap">
                {TechnologyIcon.slice(
                    TechnologyIcon.length - 2,
                    TechnologyIcon.length
                ).map((tech, index) => {
                    return (
                        <ToolTip
                            text={tech.name}
                            position="top-3/4"
                            key={index}
                        >
                            <div className="m-2 p-2 text-4xl bg-gray-800 rounded-full">
                                {tech.icon}
                            </div>
                        </ToolTip>
                    );
                })}
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="w-full py-10 animate-fadeIn">
            <h3 className="font-notosans font-semibold text-components-font">
                Internship
            </h3>
            <div className="mt-4">
                <p className="mt-0 text-sm text-components-fontHover font-light">
                    August - November 2022 (4 months)
                </p>
                <h2 className="font-opensans text-lg font-bold">
                    CODER COMPANY LIMITED
                </h2>
                <p className="mb-2 font-opensans font-bold">
                    Full Stack Developer
                </p>
                <ul className="pl-6 font-opensans list-disc">
                    <li className="mb-2">
                        Develop UI using React and Ant Design from the designed
                        UI Prototype to support the CRUD system.
                    </li>
                    <li className="mb-2">
                        Create relational database tables from the ER Diagram to
                        be used for developing the API service.
                    </li>
                    <li className="mb-2">
                        Develop REST API services using Java Spring Boot and
                        test HTTP requests with Postman, followed by system
                        testing with Java Unit Test before further development
                        on the client side.
                    </li>
                    <li className="mb-2">
                        Use Axios for HTTP requests on the client side and Redux
                        Saga for managing various states within the app.
                    </li>
                    <li className="mb-2">
                        Display data from the API through the UI and test
                        adding, editing, and deleting data according to the
                        developed functions.
                    </li>
                </ul>
            </div>
        </div>
    );
};

TabButton.propTypes = {
    tabText: PropTypes.string.isRequired,
    tabSelected: PropTypes.string.isRequired,
    setTabSelected: PropTypes.func.isRequired,
};

export default About;
