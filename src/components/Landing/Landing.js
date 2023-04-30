import React from "react";

export default function Landing() {
    const calendlyLink = "https://calendly.com/abrarmurad/30min?month=2023-04";

    return (
        <div className="HeroSection">
            <div className="HeroCenter">
                <div className="HeroText">
                    For a Clean You Can Count On - Choose Sauga Detailing in the
                    GTA
                </div>
                <div className="grid-container-element">
                    <a
                        href={calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="HeroButton"
                    >
                        <div className="HeroSubText">Book a Call</div>
                    </a>
                    <a href="#" className="HeroButton">
                        <div className="HeroSubText">Reviews</div>
                    </a>
                </div>
            </div>
        </div>
    );
}
