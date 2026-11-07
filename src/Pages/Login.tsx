import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [login, setLogin] = useState({ email: "", password: "" })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLogin({
            ...login, [id]: value
        })
    }
    const handleSubmit = () => {
        if (login.password === "123") {
            localStorage.setItem("token", "dummy-token")
            navigate("/dashboard")
        } else {
            alert("Invalid credential")
        }
    }
    return (
        <>
            <div className="container d-flex justify-content-center vh-90">
                <div className="border border-primary rounded-5 p-3" style={{ backgroundColor: "lightgrey" }}>
                    <form>
                        <h2 className="text-center">Login</h2>
                        <label htmlFor="email">Email</label>
                        <input className="form-control" value={login.email} type="email" placeholder="Enter email" onChange={handleChange} id="email" required />
                        <br />
                        <label htmlFor="password">Password</label>
                        <div className="password-field">
                            <input
                                className="form-control"
                                type={showPassword ? "text" : "password"}
                                value={login.password}
                                onChange={handleChange}
                                id="password"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <br />
                        <div className="text-center">
                            <button className=" text-center btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                    <span>Don't have an account ?</span>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Login;