import { useEffect } from "react";
import {
    Outlet,
    useRouteError,
    useLocation,
    useNavigation,
} from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
// Page
import NotFound from "./Pages/NotFound";
// Components
import Navbar from "./Components/Nav&Footer/Navbar";
import Footer from "./Components/Nav&Footer/Footer";
import HeaderTopic from "./Components/Global/HeaderTopic";
// CSS
import "./App.css";

function App() {
    const error = useRouteError();
    const location = useLocation();
    const navigation = useNavigation();
    const [isDarkTheme] = useLocalStorage("isDarkTheme");
    useEffect(() => {
        const split = location.pathname.split("/").slice(1, 2);
        const page =
            split[0] !== ""
                ? split[0].charAt(0).toUpperCase() + split[0]?.slice(1)
                : "Home";
        const title = " | Punnaphat Dev";
        document.title = page + title;
    }, [location.pathname]);
    return (
        <div
            className={
                (isDarkTheme ? "dark" : "light") +
                " App dark relative w-screen h-screen flex flex-col bg-components-background transition-colors overflow-x-hidden overflow-y-scroll"
            }
            id="app"
        >
            <Navbar />
            <div className="pt-36 -z-50"></div>
            {navigation.state === "idle" ? (
                <main className="maxWidth800">
                    {location.pathname !== "/" && <HeaderTopic error={error} />}
                    {error ? <NotFound /> : <Outlet />}
                </main>
            ) : (
                <SkeletonLoadingPage />
            )}
            <Footer />
        </div>
    );
}

const SkeletonLoadingPage = () => {
    return (
        <div className="maxWidth800 opacity-50">
            <div className="w-full mb-10 grid grid-cols-2 gap-5 max-tablet640:grid-cols-1">
                <div className="p-2 flex flex-col bg-components-buttonHover rounded-lg">
                    <div className="w-full h-[210px] bg-components-fontHover rounded"></div>
                    <div className="pt-4 flex flex-1 flex-col justify-between">
                        <div className="w-[200px] h-[20px] bg-components-fontHover rounded-xl"></div>
                        <div className="mt-4 w-full h-[15px] bg-components-fontHover rounded-xl"></div>
                        <div className="mt-2 w-[150px] h-[15px] bg-components-fontHover rounded-xl"></div>
                        <div className="mt-2 flex">
                            <div className="mt-2 mr-2 w-8 h-8 bg-components-fontHover rounded-full"></div>
                            <div className="mt-2 mr-2 w-8 h-8 bg-components-fontHover rounded-full"></div>
                            <div className="mt-2 w-8 h-8 bg-components-fontHover rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex flex-col bg-components-buttonHover rounded-lg">
                    <div className="w-full h-[210px] bg-components-fontHover rounded"></div>
                    <div className="pt-4 flex flex-1 flex-col justify-between">
                        <div className="w-[200px] h-[20px] bg-components-fontHover rounded-xl"></div>
                        <div className="mt-4 w-full h-[15px] bg-components-fontHover rounded-xl"></div>
                        <div className="mt-2 w-[150px] h-[15px] bg-components-fontHover rounded-xl"></div>
                        <div className="mt-2 flex">
                            <div className="mt-2 mr-2 w-8 h-8 bg-components-fontHover rounded-full"></div>
                            <div className="mt-2 mr-2 w-8 h-8 bg-components-fontHover rounded-full"></div>
                            <div className="mt-2 w-8 h-8 bg-components-fontHover rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5 p-4 w-full flex flex-col bg-components-buttonHover rounded-lg">
                <div className="w-[200px] h-[25px] bg-components-fontHover rounded-full"></div>
                <div className="w-[500px] h-[15px] mt-4 bg-components-fontHover rounded-full"></div>
                <div className="w-[250px] h-[15px] mt-2 bg-components-fontHover rounded-full"></div>
                <div className="w-[100px] h-[10px] mt-5 bg-components-fontHover rounded-full"></div>
            </div>
            <div className="mb-3 p-4 w-full flex flex-col bg-components-buttonHover rounded-lg">
                <div className="w-[200px] h-[25px] bg-components-fontHover rounded-full"></div>
                <div className="w-[500px] h-[15px] mt-4 bg-components-fontHover rounded-full"></div>
                <div className="w-[250px] h-[15px] mt-2 bg-components-fontHover rounded-full"></div>
                <div className="w-[100px] h-[10px] mt-5 bg-components-fontHover rounded-full"></div>
            </div>
        </div>
    );
};

export default App;
