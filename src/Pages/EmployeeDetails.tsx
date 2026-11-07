import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

function EmployeeDetails() {
    const { id } = useParams()
    const employees = [
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
    ]
    const employee = employees.find(
        (emp) => emp.id === Number(id)
    )
    if (!employee) {
        return (
            <div className="container mt-5">
                <h4>Employee not found</h4>
                <Link to="/profile" className="btn btn-primary">Back to profile</Link>
            </div>
        )
    }
    return (
        <div className="container-fluid bg-light min-vh-100">
            <div className="row">
                <div className="col-md-3"><Sidebar /></div>
                <div className="col-md-9 p-4">
                    <h2 className="fw-bold">Employee Details</h2>
                    <p className="text-muted">Complete employee information</p>
                    <div className="card shadow-sm border-rounded rounded-4">
                        <div className="card-header bg-primary text-white p-4">
                            <h3>{employee.name}</h3>
                            <p>{employee.designation}</p>
                        </div>
                        <div className="card-body p-4">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="text-muted">Employee ID</label>
                                    <h5>{employee.id}</h5>
                                </div>
                                <div className="col-md-6">
                                    <label className="text-muted">Name</label>
                                    <h5>{employee.name}</h5>
                                </div>
                                <div className="col-md-6">
                                    <label className="text-muted">Email</label>
                                    <h5>{employee.email}</h5>
                                </div>
                                <div className="col-md-6">
                                    <label className="text-muted">Phone number</label>
                                    <h5>{employee.phone}</h5>
                                </div>
                                <div className="col-md-6">
                                    <label className="text-muted">Department</label>
                                    <h5>{employee.department}</h5>
                                </div>
                                <div className="col-md-6">
                                    <label className="text-muted">Designation</label>
                                    <h5>{employee.designation}</h5>
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                <Link to = "/profile" className="btn btn-outline-primary">Back to employee profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EmployeeDetails