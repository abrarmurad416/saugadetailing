import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function ContactBigText() {
    return (
        <div id="contact" className="ContactBackground">
            <div className="ContactBigText">Contact</div>
        </div>
    );
}

export default function Contact(props) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="ContactBackground">
            <article className="question">
                <header>
                    <h4>{props.question}</h4>
                    <button
                        className="btn"
                        onClick={() => setShowInfo(!showInfo)}
                    >
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {showInfo && <p>{props.answer}</p>}
            </article>
        </div>
    );
}

export function ContactGoogle() {
    return (
        <div className="ContactBackground">
            <iframe
                className="ContactGoogleMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11531.77984782483!2d-79.633894!3d437324702!3m2!1i1024!2i768!4f13!3m3!1m2!1s0x882b3bfffba61d23%3A0xd7de284ea2f5f449!2sSauga%20Detailing!5e0!3m2!1sen!2sca!4v1682994051311!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
