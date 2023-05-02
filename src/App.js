import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { ContactBigText } from "./components/Contact/Contact";
import { ContactGoogle } from "./components/Contact/Contact";
import ContactData from "./components/Contact/ContactData";
import Team from "./components/Team/Team";

export default function App() {
    const ContactElements = ContactData.map((contact) => {
        return (
            <Contact
                key={contact.id}
                question={contact.question}
                answer={contact.answer}
            />
        );
    });
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <Services />
            <Reviews />
            {/* <Team /> */}
            <ContactBigText />
            {ContactElements}
            <ContactGoogle />
            <Footer />
        </div>
    );
}
