import React from "react";
import { FaInstagram } from "react-icons/fa";

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
                saugadetailing905@gmail.com 📩
            </a>
            <br />
            <p>Call us at (437) 234-5250 📞</p>
            <br />
            <p className="FooterTrademark">
                <small>Built with 🧰 by @abrar.murad416</small>
            </p>
        </div>
    );
}
