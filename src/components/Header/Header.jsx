import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = props => {
    return (
        <div className="Header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Perfil</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registro</NavLink>
        </div>
    )
}

export default Header