import React from "react";

export default function About() {
    return (
        <div id="about" className="AboutContainer">
            <div className="AboutTextContainer">
                <span className="AboutBigText">About</span>
                <br />
                <br />
                <p className="AboutSmallText">
                    Welcome to Sauga Detailing, your premier car detailing
                    service in the Greater Toronto Area (GTA). We are a team of
                    passionate car enthusiasts who deliver top-quality detailing
                    services to our clients.
                </p>
                <br />
                <p className="AboutSmallText">
                    Our mission at Sauga detailing is simple: to provide
                    high-quality services for our high valued clients. Our team
                    goes above and beyond to cater to each project’s specific
                    needs. Through open communication and exceptional service,
                    we hope you’ll find what you’re looking for with our Car
                    Detailing Service. For more information or general
                    inquiries, get in touch today.
                </p>
                <br />
                <p className="AboutSmallText">
                    At Sauga Detailing, we understand that your car is not just
                    a means of transportation, it's an extension of your
                    personality. That's why we offer a range of services
                    designed to help you maintain the appearance and value of
                    your car. Whether you need a simple wash and wax or a full
                    interior and exterior detailing, we've got you covered.
                </p>
            </div>
            <div>
                <img
                    src="./images/Lambo.jpg"
                    alt="Lambo"
                    className="AboutImage"
                />
            </div>
        </div>
    );
}
