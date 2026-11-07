import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [register, setRegister] = useState({ name: "", email: "", password: "", number: "" })
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (register.name === "" && register.name === "" && register.email === "" && register.number === "") (
            navigate("/login")
        )
    }
    return (
        <div className="container d-flex justify-content-center align-items-left vh-80">
            <div className="border border-primary p-3 rounded-5 padding:20px " style={{ backgroundColor: "lightgrey" }}>
                <h2>Register Page</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" placeholder="Enter name" id="name" required />
                    <br />
                    <label htmlFor="name">Email</label>
                    <input className="form-control" type="text" placeholder="Enter email" id="email" required />
                    <br />
                    <label htmlFor="name">Password</label>
                    <input className="form-control" type="text" placeholder="Enter password" id="password" required />
                    <br />
                    <label htmlFor="name">Number</label>
                    <input className="form-control" type="number" placeholder="Enter number" id="number" required />
                    <br />
                    <div className="text-center">
                        <button className="text-center btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <span>Already have an account ?</span>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
export default Register;