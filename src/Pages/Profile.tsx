import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "../Components/Sidebar";

function Profile() {
    const navigate = useNavigate();

    const [row, setRow] = useState([
        {
            id: 1,
            name: "Ana",
            email: "abc@gmail.com",
            phone: "123456789",
            department: "Accounts",
            designation: "Accounts executive"
        },
        {
            id: 2,
            name: "Bob",
            email: "pqr@gmail.com",
            phone: "012345678",
            department: "Tech",
            designation: "Front end developer"
        },
        {
            id: 3,
            name: "Cane",
            email: "xyz@gmail.com",
            phone: "987654321",
            department: "Package",
            designation: "Senior-tour"
        }
    ]);

    return (
        <div className="container-fluid bg-light min-vh-100">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9 px-md-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="fw-bold mb-1">Employee Profiles</h2>
                            <p className="text-muted mb-0">
                                Manage and view employee information
                            </p>
                        </div>
                        <span className="badge bg-primary rounded-pill px-3 py-2">
                            Total Employees: {row.length}
                        </span>
                    </div>

                    <div className="row g-4">
                        {row.map((employee) => (
                            <div className="col-12 col-sm-6 col-xl-4" key={employee.id}>
                                <div
                                    className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
                                    style={{
                                        transition: "transform 0.2s ease, box-shadow 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 10px 25px rgba(0,0,0,0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow =
                                            "0 2px 6px rgba(0,0,0,0.08)";
                                    }}>

                                    <div
                                        className="text-center py-4"
                                        style={{
                                            background: "linear-gradient(135deg, #0d6efd, #6f42c1)"
                                        }}
                                    >
                                        <div
                                            className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center mx-auto mb-3 fw-bold"
                                            style={{
                                                width: "75px",
                                                height: "75px",
                                                fontSize: "30px",
                                                border: "3px solid rgba(255,255,255,0.7)"
                                            }}
                                        >
                                            {employee.name.charAt(0).toUpperCase()}
                                        </div>
                                        <h5 className="text-white fw-bold mb-1">
                                            {employee.name}
                                        </h5>
                                        <p className="text-white-50 mb-0">
                                            {employee.designation}
                                        </p>
                                    </div>

                                    <div className="card-body p-4">

                                        <div className="mb-3">
                                            <small className="text-muted d-block mb-1">
                                                EMAIL ADDRESS
                                            </small>

                                            <div className="fw-medium text-break">
                                                {employee.email}
                                            </div>
                                        </div>
                                        <hr className="text-muted opacity-25" />
                                        <div className="mb-3">
                                            <small className="text-muted d-block mb-1">
                                                PHONE NUMBER
                                            </small>
                                            <div className="fw-medium">
                                                {employee.phone}
                                            </div>
                                        </div>
                                        <hr className="text-muted opacity-25" />
                                        <div>
                                            <small className="text-muted d-block mb-2">
                                                DEPARTMENT
                                            </small>

                                            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                                                {employee.department}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="card-footer bg-white border-0 px-4 pb-4 pt-0">
                                        <button
                                            className="btn btn-outline-primary w-100 rounded-3"
                                            onClick={() => navigate(`/employee/${employee.id}`)}
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
