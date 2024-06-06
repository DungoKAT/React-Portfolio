import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import ToolTip from "../Components/Global/ToolTip";
import TechnologyIcon from "../assets/TechnologyIcon";
import { BsGithub, BsLink45Deg, BsBoxArrowUpRight } from "react-icons/bs";

const Project = () => {
    const loaderProject = useLoaderData();
    const [isShowAll, setShowAll] = useState(false);
    const techIcon = (projectTech) => {
        const foundIcon = TechnologyIcon.find(
            (technology) => technology.name === projectTech
        );
        return foundIcon.icon;
    };

    return (
        <section className="section">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="font-notosans">{loaderProject.date}</h1>
                <div className="flex">
                    <ToolTip text="Github" position="bottom-3/4">
                        <a
                            className="p-1 flex justify-center items-center bg-components-font rounded-full transition-colors cursor-pointer hover:bg-components-fontHover"
                            href={loaderProject.githubURL}
                            target="_blank"
                        >
                            <BsGithub className="text-2xl text-components-button" />
                        </a>
                    </ToolTip>
                    <div className="pr-2"></div>
                    <ToolTip text="Demo" position="bottom-3/4">
                        <a
                            className="p-1 flex justify-center items-center bg-components-font rounded-full transition-colors cursor-pointer hover:bg-components-fontHover"
                            href={loaderProject.webURL}
                            target="_blank"
                        >
                            <BsLink45Deg className="text-2xl text-components-button" />
                        </a>
                    </ToolTip>
                </div>
            </div>
            <h1 className="mb-4 font-notosans text-3xl font-bold">
                {loaderProject.name}
            </h1>
            {loaderProject.description.map((text, index) => {
                return (
                    <p className="text-xl" key={index}>
                        {text}
                    </p>
                );
            })}
            <h3 className="mt-5 mb-4 font-notosans text-2xl font-bold">
                Technology Usage
            </h3>
            <div className="flex">
                {loaderProject.technology.map((technology, index) => {
                    return (
                        <ToolTip
                            text={technology}
                            position="top-3/4"
                            key={index}
                        >
                            <div className="mx-2 p-2 text-4xl bg-gray-800 rounded-full">
                                {techIcon(technology)}
                            </div>
                        </ToolTip>
                    );
                })}
            </div>
            <div
                className={
                    (loaderProject.image.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-2") +
                    " mt-10 mb-5 grid gap-5 overflow-hidden max-tablet640:grid-cols-1"
                }
            >
                {loaderProject.image.slice(0, 2).map((image, index) => {
                    return <ImageCard image={image} key={index} />;
                })}
            </div>
            <div
                className={
                    (isShowAll
                        ? "mb-5 grid-rows-[1fr]"
                        : "mb-0 grid-rows-[0fr]") +
                    " grid transition-all duration-500"
                }
            >
                <div className="grid grid-cols-2 gap-5 overflow-hidden max-tablet640:grid-cols-1">
                    {loaderProject.image
                        .slice(2, loaderProject.image.length)
                        .map((image, index) => {
                            return <ImageCard image={image} key={index} />;
                        })}
                </div>
            </div>
            {loaderProject.image.length > 2 && (
                <button
                    className="py-3 px-5 self-center font-notosans font-semibold bg-components-button rounded-lg transition-colors hover:bg-components-buttonHover"
                    onClick={() => setShowAll(!isShowAll)}
                >
                    {isShowAll ? "Show Less" : "Show All"}
                </button>
            )}
        </section>
    );
};

const ImageCard = ({ image }) => {
    return (
        <div>
            <img className="rounded" src={image.cover} alt="" />
            <div className="py-3 flex justify-between items-center">
                <h5 className="font-opensans font-semibold text-components-font">
                    {image.name}
                </h5>
                <a
                    className="flex items-center text-components-linkFont transition-colors hover:text-components-linkFontHover"
                    href={image.fullsize}
                    target="_blank"
                >
                    Full size
                    <BsBoxArrowUpRight className="ml-2" />
                </a>
            </div>
        </div>
    );
};

ImageCard.propTypes = {
    image: PropTypes.object.isRequired,
};

export default Project;
