import { useState } from "react";
import PropTypes from "prop-types";
import EmailJS from "@emailjs/browser";
import ToolTip from "../Components/Global/ToolTip";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    const [fromFirstName, setFromFirstName] = useState("");
    const [fromLastName, setFromLastName] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [fromMessage, setFromMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        EmailJS.sendForm(
            "service_vd5m9p8",
            "template_lvxap7o",
            e.currentTarget,
            {
                publicKey: "1IBLyM4LoyTzbsA-z",
            }
        ).then(
            (result) => {
                console.log("SUCCESS!", result);
                setFromFirstName("");
                setFromLastName("");
                setFromEmail("");
                setFromMessage("");
                alert("Email sent successfully");
            },
            (error) => {
                console.log("FAILED...", error.text);
            }
        );
    };

    return (
        <section className="w-full py-10 text-components-font animate-fadeIn">
            <div className="grid grid-cols-10 gap-3">
                <form
                    className="w-full col-span-9 grid gap-5 max-tablet767:col-span-10"
                    onSubmit={sendEmail}
                >
                    <div className="w-full grid grid-cols-2 gap-8 max-mobile479:grid-cols-none max-mobile479:gap-5">
                        <InputForm
                            labelText="First name"
                            placeholderText="Punnaphat"
                            type="text"
                            name="from_firstname"
                            fromText={fromFirstName}
                            setFromText={setFromFirstName}
                        />
                        <InputForm
                            labelText="Last name"
                            placeholderText="Phiamtanapuwanon"
                            type="text"
                            name="from_lastname"
                            fromText={fromLastName}
                            setFromText={setFromLastName}
                        />
                    </div>
                    <InputForm
                        labelText="Email address"
                        placeholderText="email@gmail.com"
                        type="email"
                        name="from_email"
                        fromText={fromEmail}
                        setFromText={setFromEmail}
                    />
                    <InputForm
                        labelText="Your message"
                        placeholderText="Enter your message here."
                        name="message"
                        fromText={fromMessage}
                        setFromText={setFromMessage}
                    />
                    <button
                        className="p-2 w-full font-opensans text-components-button font-semibold bg-components-font rounded-md transition-colors hover:bg-components-fontHover"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <div className="mx-2 py-4 col-span-1 flex flex-col justify-between items-center bg-components-buttonHover rounded-full max-tablet767:hidden">
                    <ul className="grid gap-5">
                        <ToolTip
                            text="Facebook"
                            position="left-[calc(100%+15px)]"
                        >
                            <a
                                className="text-2xl transition-colors hover:text-components-fontHover"
                                href="https://www.facebook.com/punnaphat.phiamtanapuwanon/"
                                target="_blank"
                            >
                                <BsFacebook />
                            </a>
                        </ToolTip>
                        <ToolTip
                            text="Instagram"
                            position="left-[calc(100%+15px)]"
                        >
                            <a
                                className="text-2xl transition-colors hover:text-components-fontHover"
                                href="https://www.instagram.com/ppliebert/"
                                target="_blank"
                            >
                                <BsInstagram />
                            </a>
                        </ToolTip>
                        <ToolTip text="X" position="left-[calc(100%+15px)]">
                            <a
                                className="text-2xl transition-colors hover:text-components-fontHover"
                                href="https://x.com/Dung25156789"
                                target="_blank"
                            >
                                <FaXTwitter />
                            </a>
                        </ToolTip>
                        <ToolTip text="Email" position="left-[calc(100%+15px)]">
                            <a
                                className="text-2xl transition-colors hover:text-components-fontHover"
                                href="mailto:punnaphat.phiam@gmail.com"
                                target="_blank"
                            >
                                <MdEmail />
                            </a>
                        </ToolTip>
                    </ul>
                    {/* <div className="w-px h-full my-5 bg-black"></div> */}
                    <ul className="grid gap-5">
                        <ToolTip
                            text="Github"
                            position="left-[calc(100%+15px)]"
                        >
                            <a
                                className="text-2xl transition-colors hover:text-components-fontHover"
                                href="https://github.com/DungoKAT"
                                target="_blank"
                            >
                                <BsGithub />
                            </a>
                        </ToolTip>
                        <ToolTip
                            text="LinkedIn"
                            position="left-[calc(100%+15px)]"
                        >
                            <a
                                className="text-2xl transition-colors hover:text-components-fontHover"
                                href="https://www.linkedin.com/in/punnaphat-phiamtanapuwanon-165100299/"
                                target="_blank"
                            >
                                <BsLinkedin />
                            </a>
                        </ToolTip>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between mt-5 max-mobile479:flex-col">
                <div className="mr-3 flex items-center text-lg max-mobile479:mb-3">
                    <MdEmail className="mr-3" />
                    <p>punnaphat.phiam@gmail.com</p>
                </div>
                <div className="flex items-center text-lg">
                    <BsFillTelephoneFill className="mr-3" />
                    <p>098-351-6540</p>
                </div>
            </div>
            <div className="mt-3 py-3 col-span-1 hidden justify-between items-center max-tablet767:flex">
                <ul className="grid grid-cols-4 gap-5">
                    <a
                        className="text-2xl transition-colors hover:text-components-fontHover"
                        href="https://www.facebook.com/punnaphat.phiamtanapuwanon/"
                        target="_blank"
                    >
                        <BsFacebook />
                    </a>
                    <a
                        className="text-2xl transition-colors hover:text-components-fontHover"
                        href="https://www.instagram.com/ppliebert/"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        className="text-2xl transition-colors hover:text-components-fontHover"
                        href="https://x.com/Dung25156789"
                        target="_blank"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        className="text-2xl transition-colors hover:text-components-fontHover"
                        href="mailto:punnaphat.phiam@gmail.com"
                        target="_blank"
                    >
                        <MdEmail />
                    </a>
                </ul>
                <ul className="grid grid-cols-2 gap-5">
                    <a
                        className="text-2xl transition-colors hover:text-components-fontHover"
                        href="https://github.com/DungoKAT"
                        target="_blank"
                    >
                        <BsGithub />
                    </a>
                    <a
                        className="text-2xl transition-colors hover:text-components-fontHover"
                        href="https://www.linkedin.com/in/punnaphat-phiamtanapuwanon-165100299/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                </ul>
            </div>
        </section>
    );
};

const InputForm = ({
    labelText,
    type,
    name,
    placeholderText,
    fromText,
    setFromText,
}) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2 font-opensans font-semibold" htmlFor="">
                {labelText}
            </label>
            {labelText !== "Your message" ? (
                <input
                    className="px-3.5 py-2 text-components-font placeholder-components-fontHover border border-components-buttonHover bg-components-buttonHover rounded-md"
                    type={type}
                    name={name}
                    placeholder={placeholderText}
                    value={fromText}
                    onChange={(e) => setFromText(e.currentTarget.value)}
                    required
                />
            ) : (
                <textarea
                    className="px-3.5 py-2 text-components-font placeholder-components-fontHover border border-components-buttonHover bg-components-buttonHover rounded-md"
                    type="text"
                    name={name}
                    placeholder={placeholderText}
                    value={fromText}
                    onChange={(e) => setFromText(e.currentTarget.value)}
                    rows={11}
                    required
                />
            )}
        </div>
    );
};

InputForm.propTypes = {
    labelText: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    fromText: PropTypes.string.isRequired,
    setFromText: PropTypes.func.isRequired,
};

export default Contact;
