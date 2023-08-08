import React from "react";
import { NavLinks } from "./NavLinks";

import { createContext } from "react";
import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

function Navbar() {
    const [user, setUser] = React.useState({ name: "nidhi" });

    const logout = () => {
        setUser(null);
    };
    return (
        <NavbarContext.Provider value={{ user, logout }}>
            <nav className="navbar ">
                <h5>Navbar</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
}

export default Navbar;
