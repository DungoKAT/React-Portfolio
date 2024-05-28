import PropTypes from "prop-types";

const ToolTip = ({ children, text, position }) => {
    return (
        <div className="group relative flex justify-center items-center">
            {children}
            <span
                className={
                    "absolute invisible my-5 mx-2 py-1.5 px-3 font-opensans text-base text-components-font bg-components-buttonHover whitespace-nowrap rounded opacity-0 scale-0 " +
                    "group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all " +
                    position
                }
            >
                {text}
            </span>
        </div>
    );
};

ToolTip.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default ToolTip;
