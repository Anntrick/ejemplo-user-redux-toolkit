import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../userSlice";
import './Register.scss'

const Register = props => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(registerUser({
            email: event.target[0].value,
            password: event.target[1].value
        }))
    }

    return (
        <div className="Register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <input type="text" name="email" placeholder="Escribe tu email" />
                <input type="password" name="password" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Register