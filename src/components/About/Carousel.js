import React, { useState, useEffect } from "react";

export default function Carousel() {
    const [slideIndex, setSlideIndex] = useState(1);

    const plusSlides = (n) => {
        if (slideIndex === 7 && n > 0) {
            setSlideIndex(1);
        } else if (slideIndex === 1 && n < 0) {
            setSlideIndex(7);
        } else {
            setSlideIndex(slideIndex + n);
        }
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showSlides = () => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slideIndex > slides.length) {
            setSlideIndex(1);
        }

        if (slideIndex < 1) {
            setSlideIndex(slides.length);
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

    useEffect(() => {
        showSlides();
    }, [slideIndex]);

    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext">1 / 7</div>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Benz.jpg"}
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 7</div>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/Mclareninside.jpg"
                        }
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 7</div>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Porsche.jpg"}
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">4 / 7</div>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/Porscheinside.jpg"
                        }
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">5 / 7</div>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Corvette.jpg"}
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">6 / 7</div>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Dodgeinside.jpg"}
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">7 / 7</div>
                    <img
                        src={process.env.PUBLIC_URL + "/images/BMW.jpg"}
                        style={{ width: "100%" }}
                    />
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div style={{ textAlign: "center" }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
                <span className="dot" onClick={() => currentSlide(4)}></span>
                <span className="dot" onClick={() => currentSlide(5)}></span>
                <span className="dot" onClick={() => currentSlide(6)}></span>
                <span className="dot" onClick={() => currentSlide(7)}></span>
            </div>
        </div>
    );
}
