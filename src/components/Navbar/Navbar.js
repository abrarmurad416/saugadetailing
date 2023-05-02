import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="NavbarContainer">
                    <div className="NavLogo">Sauga Detailing</div>
                    <div className="NavMenu">
                        <div className="NavLinks">
                            <p
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("about")
                                            .offsetTop,
                                        behavior: "smooth",
                                    })
                                }
                                className="NavItem"
                            >
                                About
                            </p>
                            <p
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("services")
                                            .offsetTop,
                                        behavior: "smooth",
                                    })
                                }
                                className="NavItem"
                            >
                                Services
                            </p>
                            <p
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("reviews")
                                            .offsetTop,
                                        behavior: "smooth",
                                    })
                                }
                                className="NavItem"
                            >
                                Reviews
                            </p>
                            <p
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("team")
                                            .offsetTop,
                                        behavior: "smooth",
                                    })
                                }
                                className="NavItem"
                            >
                                Team
                            </p>
                            <p
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("contact")
                                            .offsetTop,
                                        behavior: "smooth",
                                    })
                                }
                                className="NavItem"
                            >
                                Contact
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
