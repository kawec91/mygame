import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email,password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <section>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Login and enjoy our game.</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <input type="email" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
                <input type="password" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange} />
                <button type="submit">Submit</button>
            </form>
        </section>
    </>
  )
}

export default Login