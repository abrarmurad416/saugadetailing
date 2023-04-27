import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="NavbarContainer">
                    <div className="NavLogo">Sauga Detailing</div>
                    <div className="NavMenu">
                        <div className="NavLinks">
                            <p className="NavItem">About</p>
                            <p className="NavItem">Services</p>
                            <p className="NavItem">Reviews</p>
                            <p className="NavItem">Team</p>
                            <p className="NavItem">Contact</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
