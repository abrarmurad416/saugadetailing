import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";

export default function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
        </div>
    );
}
