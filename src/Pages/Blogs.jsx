import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
    const loaderBlogs = useLoaderData();
    return (
        <section className="section">
            {loaderBlogs.map((blog, index) => {
                return (
                    <Link
                        to={"/blogs/" + blog.pathname}
                        className="group w-full mb-3 p-4 border border-components-buttonHover rounded-lg transition-colors animate-fadeUp2 hover:bg-components-buttonHover"
                        key={index}
                    >
                        <h1 className="flex items-center font-kanit text-2xl font-medium">
                            {blog.name}
                            <BsArrowRight className="ml-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1" />
                        </h1>
                        <p className="mt-1 text-components-fontHover">
                            {blog.description}
                        </p>
                        <p className="mt-4 font-notosans text-sm text-components-fontHover">
                            {blog.date}
                        </p>
                    </Link>
                );
            })}
        </section>
    );
};

export default Blogs;
