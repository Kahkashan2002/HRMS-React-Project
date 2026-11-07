import { Link } from "react-router-dom";

function Sidebar() {
    return(
        <div className="bg-dark text-white vh-100 p-3">
            <h4 className="mb-4">Employee Management</h4>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/employes" className="nav-link text-white">Employess</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/profile" className="nav-link text-white">Profile</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/login" className="nav-link text-danger">Logout</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;