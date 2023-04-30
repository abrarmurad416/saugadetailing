import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterSocials">
                <a
                    href="https://www.instagram.com/sauga_detailing/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram size={32} color="white" />
                </a>
            </div>
            <a className="FooterEmail" href="saugadetailing905@gmail.com">
                Email us 📩
            </a>
            <br />
            <p className="FooterTrademark">Sauga Detailing | abrar.murad416</p>
        </div>
    );
}
