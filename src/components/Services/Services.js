import React from "react";
import ServicesData from "./ServicesData";

export default function Services() {
    return (
        <div className="ServicesBackground">
            <br />
            <br />
            <div id="services" className="ServicesBigText">
                Services
            </div>
            <div className="ServicesContainer">
                <div className="ServicesGrid">
                    {ServicesData.map((item, index) => (
                        <div className="ServicesCard" key={index}>
                            <img src={item.image} alt={item.alt} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
