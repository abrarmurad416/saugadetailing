import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <Services />
            {/* <Reviews /> */}
            <Footer />
        </div>
    );
}
