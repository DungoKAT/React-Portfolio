import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BsArrowLeft } from "react-icons/bs";

const HeaderTopic = ({ error }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.split("/").slice(1, 3);
    const topic1 = pathname[0].charAt(0).toUpperCase() + pathname[0].slice(1);
    const topic2 =
        pathname[1]?.charAt(0).toUpperCase() + pathname[1]?.slice(1) || null;
    const topicText =
        topic1 + (topic2 ? " / " + topic2.replaceAll("-", " ") : "");
    const notfoundText = "Not found what you finding. Please turn back.";
    return (
        <div className="w-full h-10 pb-4 flex items-center border-b border-components-buttonHover">
            {(error || topic2) && (
                <BsArrowLeft
                    className="mr-5 text-3xl text-components-font cursor-pointer"
                    onClick={() => navigate(-1)}
                />
            )}
            <h1 className="font-kanit text-3xl font-bold text-components-font">
                {error ? notfoundText : topicText}
            </h1>
        </div>
    );
};

HeaderTopic.propTypes = {
    error: PropTypes.object,
};

export default HeaderTopic;
