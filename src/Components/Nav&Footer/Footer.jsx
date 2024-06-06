import { useLocalStorage } from "@uidotdev/usehooks";
import PortfolioIcon from "../../assets/Portfolio-Icon.svg";
import PortfolioIconBlack from "../../assets/Portfolio-Icon-Black.svg";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const [isDarkTheme] = useLocalStorage("isDarkTheme");
    return (
        <footer className="w-[90%] mt-auto mb-0 mx-auto py-5 px-10 border-t border-components-buttonHover">
            <div className="flex justify-between max-tablet991:flex-col">
                <div className="flex justify-center items-center order-1 max-tablet991:my-3">
                    <img
                        className="w-6 h-6 mr-2"
                        src={isDarkTheme ? PortfolioIcon : PortfolioIconBlack}
                        alt=""
                    />
                    <h1 className="font-arvo text-lg text-components-font leading-6">
                        Punnaphat.dev
                    </h1>
                </div>
                <p className="font-opensans text-center text-components-font order-2 max-tablet991:my-3 max-tablet991:order-3">
                    © 2024 · Punnaphat Phiamtanapuwanon · All Rights Reserved
                </p>
                <div
                    className={
                        (location.pathname === "/contact" ? "hidden" : "flex") +
                        " items-center justify-center text-xl order-3 max-tablet991:my-3 max-tablet991:order-2"
                    }
                >
                    <a
                        className="ml-4 text-components-font transition-colors hover:text-components-fontHover"
                        href="https://www.facebook.com/punnaphat.phiamtanapuwanon/"
                        target="_blank"
                    >
                        <BsFacebook />
                    </a>
                    <a
                        className="ml-4 text-components-font transition-colors hover:text-components-fontHover"
                        href="https://www.instagram.com/ppliebert/"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        className="ml-4 text-components-font transition-colors hover:text-components-fontHover"
                        href="https://github.com/DungoKAT"
                        target="_blank"
                    >
                        <BsGithub />
                    </a>
                    <a
                        className="ml-4 text-components-font transition-colors hover:text-components-fontHover"
                        href="https://www.linkedin.com/in/punnaphat-phiamtanapuwanon-165100299/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
