import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Services from "./components/Services/Services";

export default function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <Services />
        </div>
    );
}
