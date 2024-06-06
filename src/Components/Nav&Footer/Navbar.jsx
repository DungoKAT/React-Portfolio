import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import PropTypes from "prop-types";
// Components
import ToolTip from "../Global/ToolTip";
// Assets
import PortfolioIcon from "../../assets/Portfolio-Icon.svg";
import PortfolioIconBlack from "../../assets/Portfolio-Icon-Black.svg";
import {
    BsSun,
    BsMoonStars,
    BsArrowBarLeft,
    BsArrowBarRight,
} from "react-icons/bs";

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme", true);
    return (
        <nav className="fixed w-[calc(100%-10px)] z-10">
            <div className="absolute w-full h-[calc(100%-10px)] bg-components-background backdrop-blur-lg shadow-[0px_10px_10px_var(--background)] opacity-80 -z-10"></div>
            <div className="maxWidth1440 my-10 flex justify-between items-center text-white">
                <ToolTip text="Home" position="top-3/4">
                    <Link to="/">
                        <img
                            className="w-14 h-14 hover:invert-[30%]"
                            src={
                                isDarkTheme ? PortfolioIcon : PortfolioIconBlack
                            }
                            alt=""
                        />
                    </Link>
                </ToolTip>
                <NavDesktop
                    pathname={pathname}
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme}
                />
                <button
                    className="hidden w-14 h-14 text-5xl text-components-font max-tablet767:block"
                    onClick={() => setIsSideNavOpen(true)}
                >
                    <BsArrowBarLeft />
                </button>
            </div>
            <NavMobile
                isSideNavOpen={isSideNavOpen}
                setIsSideNavOpen={setIsSideNavOpen}
                pathname={pathname}
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
            />
        </nav>
    );
};

const NavDesktop = ({ pathname, isDarkTheme, setIsDarkTheme }) => {
    return (
        <>
            <div className="flex max-tablet767:hidden">
                <Link
                    to="/"
                    className={
                        (pathname === "/" &&
                            "underline underline-offset-8 decoration-2") +
                        " mr-6 ml-6 text-base font-notosans text-components-font transition-colors hover:text-components-fontHover"
                    }
                >
                    HOME
                </Link>
                <Link
                    to="/projects"
                    className={
                        (pathname.includes("projects") &&
                            "underline underline-offset-8 decoration-2") +
                        " mr-6 ml-6 text-base font-notosans text-components-font transition-colors hover:text-components-fontHover"
                    }
                >
                    PROJECTS
                </Link>
                <Link
                    to="/about"
                    className={
                        (pathname.includes("about") &&
                            "underline underline-offset-8 decoration-2") +
                        " mr-6 ml-6 text-base font-notosans text-components-font transition-colors hover:text-components-fontHover"
                    }
                >
                    ABOUT
                </Link>
                <Link
                    to="/contact"
                    className={
                        (pathname.includes("contact") &&
                            "underline underline-offset-8 decoration-2") +
                        " mr-6 ml-6 text-base font-notosans text-components-font transition-colors hover:text-components-fontHover"
                    }
                >
                    CONTACT ME
                </Link>
            </div>
            <button
                className="group w-14 h-14 text-center rounded-full hover:bg-components-buttonHover transition-colors max-tablet767:hidden"
                onClick={() => setIsDarkTheme(!isDarkTheme)}
            >
                <ToolTip
                    text={isDarkTheme ? "Switch to Light" : "Switch to Dark"}
                    position="top-full"
                >
                    {isDarkTheme ? (
                        <BsMoonStars className="mx-auto text-components-font text-4xl" />
                    ) : (
                        <BsSun className="mx-auto text-components-font text-4xl" />
                    )}
                </ToolTip>
            </button>
        </>
    );
};

NavDesktop.propTypes = {
    pathname: PropTypes.string.isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
    setIsDarkTheme: PropTypes.func.isRequired,
};

const NavMobile = ({
    pathname,
    isSideNavOpen,
    setIsSideNavOpen,
    isDarkTheme,
    setIsDarkTheme,
}) => {
    return (
        <div
            className={
                (isSideNavOpen ? "translate-x-0" : "translate-x-full") +
                " fixed hidden max-w-[300px] w-full h-screen p-10 top-0 right-0 left-auto flex-col items-start bg-components-font transition-all duration-500 max-tablet767:flex"
            }
        >
            <Link
                to="/"
                className={
                    (pathname === "/" &&
                        "underline underline-offset-8 decoration-2") +
                    " my-5 text-base font-notosans text-components-background transition-colors hover:text-components-fontHover"
                }
                onClick={() => setIsSideNavOpen(false)}
            >
                HOME
            </Link>
            <Link
                to="/projects"
                className={
                    (pathname.includes("projects") &&
                        "underline underline-offset-8 decoration-2") +
                    " my-5 text-base font-notosans text-components-background transition-colors hover:text-components-fontHover"
                }
                onClick={() => setIsSideNavOpen(false)}
            >
                PROJECTS
            </Link>
            <Link
                to="/about"
                className={
                    (pathname.includes("about") &&
                        "underline underline-offset-8 decoration-2") +
                    " my-5 text-base font-notosans text-components-background transition-colors hover:text-components-fontHover"
                }
                onClick={() => setIsSideNavOpen(false)}
            >
                ABOUT
            </Link>
            <Link
                to="/contact"
                className={
                    (pathname.includes("contact") &&
                        "underline underline-offset-8 decoration-2") +
                    " my-5 text-base font-notosans text-components-background transition-colors hover:text-components-fontHover"
                }
                onClick={() => setIsSideNavOpen(false)}
            >
                CONTACT ME
            </Link>
            <div className="w-full mt-auto mb-0 flex justify-between items-center">
                <button
                    className="w-14 h-14 text-center rounded-full hover:bg-components-buttonHoverInvert transition-colors"
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                >
                    <ToolTip
                        text={
                            isDarkTheme ? "Switch to Light" : "Switch to Dark"
                        }
                        position="bottom-full"
                    >
                        {isDarkTheme ? (
                            <BsMoonStars className="mx-auto text-4xl text-components-background" />
                        ) : (
                            <BsSun className="mx-auto text-4xl text-components-background" />
                        )}
                    </ToolTip>
                </button>
                <BsArrowBarRight
                    className="text-4xl text-components-background cursor-pointer"
                    onClick={() => setIsSideNavOpen(false)}
                />
            </div>
        </div>
    );
};

NavMobile.propTypes = {
    pathname: PropTypes.string.isRequired,
    isSideNavOpen: PropTypes.bool.isRequired,
    setIsSideNavOpen: PropTypes.func.isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
    setIsDarkTheme: PropTypes.func.isRequired,
};

export default Navbar;
