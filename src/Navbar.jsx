import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Phong Dev</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create" className="create-button">
                    New blog
                </a>
            </div>
        </div>
    );
};

export default Navbar;
