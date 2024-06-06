import { Link, useLoaderData } from "react-router-dom";
import ToolTip from "../Components/Global/ToolTip";
import { FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import TechnologyIcon from "../assets/TechnologyIcon";

const Projects = () => {
    const loaderProjects = useLoaderData();
    const techIcon = (projectTech) => {
        const foundIcon = TechnologyIcon.find(
            (technology) => technology.name === projectTech
        );
        return foundIcon.icon;
    };
    return (
        <section className="section">
            <h1 className="mb-3 font-kanit text-2xl font-medium">
                Personal Projects
            </h1>
            <div className="mb-3 grid grid-cols-2 gap-5 max-tablet640:grid-cols-1">
                {loaderProjects.personalProjects.map((project, index) => {
                    return (
                        <Link
                            to={"/projects/" + project.pathname}
                            className="group w-full p-2 flex flex-col rounded-lg transition-colors animate-fadeUp2 hover:bg-components-buttonHover"
                            key={index}
                        >
                            <img
                                className="w-full rounded"
                                src={project.image[0].cover}
                                alt=""
                            />
                            <div className="pt-4 flex flex-1 flex-col justify-between">
                                <div className="flex justify-between">
                                    <h1 className="flex items-center font-kanit text-2xl">
                                        {project.name}
                                    </h1>
                                    <p className="min-w-[83px] mt-2 text-sm">
                                        {project.date}
                                    </p>
                                </div>
                                <p className="mt-1">{project.description[0]}</p>
                                <div className="mt-4 mb-0 flex justify-between items-center">
                                    <div className="flex">
                                        {project.technology.map(
                                            (technology, index) => {
                                                return (
                                                    <div
                                                        className="mr-4 p-1 text-2xl bg-gray-800 rounded-full"
                                                        key={index}
                                                    >
                                                        {techIcon(technology)}
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                    <span className="min-w-[120px] mr-4 flex items-center font-notosans opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                                        More Details{" "}
                                        <BsArrowRight className="ml-2" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <h1 className="mt-4 mb-3 font-kanit text-2xl font-medium">
                Mini Workshops
            </h1>
            <div className="pt-2 px-2 grid grid-cols-4 grid-rows-2 gap-3 max-tablet640:grid-cols-3 max-tablet640:grid-rows-3 max-mobile479:grid-cols-2 max-mobile479:grid-rows-4">
                {loaderProjects.miniWorkshops.map((workshop, index) => {
                    return (
                        <div
                            className="p-2 flex flex-col border border-components-buttonHover rounded-lg animate-fadeUp3"
                            key={index}
                        >
                            <h1 className="mb-4 font-opensans text-lg">
                                {workshop.name}
                            </h1>
                            <div className="mt-auto mb-0 flex justify-between items-center text-2xl">
                                <div className="w-[30px] h-[30px] p-0.5 bg-black rounded-full max-tablet991:hidden">
                                    <FaReact className="my-auto mx-auto text-2xl text-[#61dafb]" />
                                </div>
                                <div className="flex max-tablet991:w-full max-tablet991:justify-around">
                                    <ToolTip text="Github" position="top-3/4">
                                        <a
                                            href={workshop.githubURL}
                                            target="_blank"
                                        >
                                            <BsGithub className="text-3xl max-tablet991:text-5xl" />
                                        </a>
                                    </ToolTip>
                                    <ToolTip text="Demo" position="top-3/4">
                                        <a
                                            className="ml-2 text-components-button bg-components-font rounded-full"
                                            href={workshop.webURL}
                                            target="_blank"
                                        >
                                            <BsLink45Deg className="text-3xl max-tablet991:text-5xl" />
                                        </a>
                                    </ToolTip>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
