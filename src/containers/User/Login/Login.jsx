import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../userSlice";
import './Login.scss'

const Login = props => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(loginUser({
            email: event.target[0].value,
            password: event.target[1].value
        }))
    }

    return (
        <div className="Login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="text" name="email" placeholder="Escribe tu usuario" />
                <input type="password" name="password" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login