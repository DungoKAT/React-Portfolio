import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight, BsArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
    const loaderAllData = useLoaderData();
    // const recentlyBlog = loaderAllData.blogs.find(
    //     (blog) => blog.id === loaderAllData.blogs.length
    // );
    const recentlyProject = loaderAllData.projects.find(
        (project) => project.id === loaderAllData.projects.length
    );
    return (
        <section className="section">
            <header className="w-full mb-10 flex flex-col justify-center items-center">
                <div className="mb-10 font-arvo font-bold text-center">
                    <h1 className="text-5xl leading-tight animate-fadeUp1 max-tablet640:text-2xl max-tablet767:text-4xl">
                        Hi! I&apos;m Punnaphat,
                    </h1>
                    <h1 className="text-4xl leading-tight animate-fadeUp2 max-tablet640:text-xl max-tablet767:text-3xl">
                        a passionate Front End Developer
                    </h1>
                    <h1 className="text-4xl leading-tight animate-fadeUp3 max-tablet640:text-xl max-tablet767:text-3xl">
                        dedicated to creating exceptional <br />
                        user experiences.
                    </h1>
                </div>
                <Link
                    className="group relative py-4 px-5 flex items-center font-kanit text-components-font bg-components-button rounded-lg cursor-pointer animate-fadeUp4 transition-all hover:bg-components-buttonHover"
                    to="/about"
                >
                    <div className="absolute w-full h-full top-0 left-0 rounded-lg animate-shadowFadeInfinite"></div>
                    Let&apos;s get to know me
                    <BsArrowRightCircleFill className="ml-2 transition-transform animate-leftRightInfinite group-hover:translate-x-1" />
                </Link>
            </header>
            {/* <div className="mt-5 animate-fadeUp2">
                <h3 className="font-opensans font-bold">RECENT BLOG</h3>
            </div>
            <Link
                to={"/blogs/" + recentlyBlog.pathname}
                className="group w-full mt-3 mb-5 py-10 border-t border-b border-components-buttonHover transition-colors animate-fadeUp2 hover:bg-components-buttonHover"
            >
                <h2 className="flex items-center font-kanit text-2xl font-semibold">
                    {recentlyBlog.name}{" "}
                    <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </h2>
                <p className="mt-1 text-components-fontHover">
                    {recentlyBlog.description}
                </p>
                <p className="mt-4 font-notosans text-sm text-components-fontHover">
                    {recentlyBlog.date}
                </p>
            </Link> */}
            <div className="mt-5 animate-fadeUp3">
                <h3 className="font-opensans font-bold">RECENT PROJECT</h3>
            </div>
            <Link
                to={"/projects/" + recentlyProject.pathname}
                className="group w-full mt-3 mb-5 py-10 border-t border-b border-components-buttonHover transition-colors animate-fadeUp3 hover:bg-components-buttonHover"
            >
                <h2 className="flex items-center font-kanit text-2xl font-semibold">
                    {recentlyProject.name}
                    <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </h2>
                <p className="mt-1 text-components-fontHover">
                    {recentlyProject.description[0]}
                </p>
                <p className="mt-1 text-components-fontHover">
                    {recentlyProject.description[1]}
                </p>
                <p className="mt-4 font-notosans text-sm text-components-fontHover">
                    {recentlyProject.date}
                </p>
            </Link>
        </section>
    );
};

export default Home;
