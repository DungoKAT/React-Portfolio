import TomMeme from "../assets/TomMeme.jpg";
const NotFound = () => {
    return (
        <div className="w-full py-10 animate-fadeUp">
            <img className="mt-auto mx-auto" src={TomMeme} alt="" />
        </div>
    );
};

export default NotFound;
