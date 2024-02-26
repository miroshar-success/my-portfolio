import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Nav from "./components/nav";
import Section from "./components/topSection";
import Main from "./components/main";
import Projects from "./components/projects";
import ContactUs from "./components/contactUs";
import Experience from "./components/experience";

function App() {
    return (
        <>
            <div className=" bg-black text-white ">
                <div className=" bg-black m-auto max-w-screen-xl">
                    <Nav />
                    <Section />
                    <Main />
                    <Experience />
                    <Projects />
                    <ContactUs />
                </div>
            </div>
            <Analytics />
        </>
    );
}

export default App;
