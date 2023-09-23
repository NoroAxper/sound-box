import { useState } from "react"
import axios from "axios"

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/", {
                email, password
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <section className="login">
            <h1>Register</h1>
            <form action="POST">
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                <input type="submit" onClick={submit}/>
            </form>
            <br/>
            <button>Login</button>
        </section>
        </>
    )
}

export default RegisterForm;