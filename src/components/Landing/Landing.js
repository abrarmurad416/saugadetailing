import React from "react";

export default function Landing() {
    const calendlyLink = "https://calendly.com/abrarmurad/30min?month=2023-04";

    return (
        <div className="HeroSection">
            <div className="HeroCenter">
                <div className="HeroText" id="landing">
                    The Difference Is In The Details
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
                        <div
                            className="HeroSubText"
                            onClick={() =>
                                window.scrollTo({
                                    top: document.getElementById("reviews")
                                        .offsetTop,
                                    behavior: "smooth",
                                })
                            }
                        >
                            See what people say
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
