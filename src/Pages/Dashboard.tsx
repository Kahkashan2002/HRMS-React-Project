// import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3"><Sidebar /></div>
                    <div className="col-md-9">
                        <h2>Welcome back , Admin !</h2>
                        <p>Here's your employee management overview.</p>
                        <div className="row mt-4">
                            <div className="col-md-6 col-lg-3"
                            >
                                <div className="card shadow-sm p-3"
                                    style={{ background: "linear-gradient(135deg, #0d6efd, #6f42c1)" }}
                                >
                                    <h6>Total employes</h6>
                                    <h2>3</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm p-3"
                                    style={{ background: "linear-gradient(135deg, #0d6efd, #6f42c1)" }}
                                >
                                    <h6>Department</h6>
                                    <h2>3</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm p-3"
                                    style={{ background: "linear-gradient(135deg, #0d6efd, #6f42c1)" }}
                                >
                                    <h6>New employes</h6>
                                    <h2>0</h2>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm p-3"
                                    style={{ background: "linear-gradient(135deg, #0d6efd, #6f42c1)" }}
                                >
                                    <h6>Designation</h6>
                                    <h2>3</h2>
                                </div>
                            </div>
                            <div className="card shadow-sm p-3 mt-4">
                                <h5>Department Overview</h5>
                                <div className="d-flex justify-content-between">
                                    <span>Accounts</span>
                                    <span>1 Employee</span>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-primary"
                                        style={{ width: "33.33%" }}
                                    ></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Tech</span>
                                    <span>1 Employee</span>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-primary"
                                        style={{ width: "33.33%" }}
                                    ></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Package</span>
                                    <span>1 Employee</span>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-primary"
                                        style={{ width: "33.33%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;