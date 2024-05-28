import React from "react";
import ReactDOM from "react-dom/client";
// Components
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Blog from "./Pages/Blog.jsx";
import Projects from "./Pages/Projects.jsx";
import Project from "./Pages/Project.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const baseURL =
    "https://3e0f25d7-710a-4932-a71e-427637d1e25a-00-2h90iehkb3zlp.spock.replit.dev";
const loaderDataParams = async (pathname, { params }) => {
    const res = await fetch(`${baseURL}/${pathname}/${params.pathname}`);
    if (res.status === 404) {
        throw new Response("Not Found", { status: 404 });
    }
    return res.json();
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
                async loader() {
                    return await fetch(`${baseURL}/blogs`).then((response) =>
                        response.json()
                    );
                },
            },
            {
                path: "/blogs/:pathname",
                element: <Blog />,
                loader({ params }) {
                    return loaderDataParams("blogs", { params });
                },
            },
            {
                path: "/projects",
                element: <Projects />,
                async loader() {
                    return await fetch(`${baseURL}/projects`).then((response) =>
                        response.json()
                    );
                },
            },
            {
                path: "/projects/:pathname",
                element: <Project />,
                loader({ params }) {
                    return loaderDataParams("projects", { params });
                },
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
