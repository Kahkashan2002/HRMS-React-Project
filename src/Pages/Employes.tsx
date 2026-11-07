import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "../Components/Sidebar";

function Employes() {
    const [row, setRow] = useState([
        { id: 1, name: "Ana", email: "abc@gamil.com", phone: "123456789", department: "Accounts", designation: "Accounts executive" },
        { id: 2, name: "Bob", email: "pqr@gmail.com", phone: "012345678", department: "Tech", designation: "Front end developer" },
        { id: 3, name: "Cane", email: "xyz@gmail.com", phone: "987654321", department: "Package", designation: "Senior-tour" }
    ])
    const [showAddModal, setShowAddModal] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [department, setDepartment] = useState("")
    const [designation, setDesignation] = useState("")

    const [search, setSearch] = useState("")
    const filteredEmployee = () => {
        return (
            row.filter((employee) =>
                employee.name.toLowerCase().includes(search.toLowerCase()) ||
                employee.email.toLowerCase().includes(search.toLowerCase()) ||
                employee.phone.includes(search) ||
                employee.department.toLowerCase().includes(search.toLowerCase()) ||
                employee.designation.toLowerCase().includes(search.toLowerCase())
            ))
    }

    const addRow = () => {
        setRow([
            ...row, { id: row.length + 1, name, email, phone, department, designation }
        ])
        setShowAddModal(false)
        setName("")
        setEmail("")
        setPhone("")
        setDepartment("")
        setDesignation("")
    }
    const openAddModal = () => {
        setShowAddModal(true)
    }

    const [showEditModal, setEditModal] = useState(false)
    const [editId, setEditId] = useState(0)
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editPhone, setEditPhone] = useState("")
    const [editDepartment, setEditDepartment] = useState("")
    const [editDesignation, setEditDesignation] = useState("")

    const openEditModal = (row: {
        id: number
        name: string
        email: string
        phone: string
        department: string
        designation: string
    }) => {
        setEditModal(true)
        setEditId(row.id)
        setEditName(row.name)
        setEditEmail(row.email)
        setEditPhone(row.phone)
        setEditDepartment(row.department)
        setEditDesignation(row.designation)
    }
    const saveEdit = () => {
        setRow(
            row.map(data =>
                data.id === editId ? {
                    ...data,
                    name: editName,
                    email: editEmail,
                    phone: editPhone,
                    department: editDepartment,
                    designation: editDesignation
                } : data
            )
        )
        setEditModal(false)
    }
    const deleteRow = (id: number) => {
        setRow(
            row.filter(data =>
                data.id !== id
            ))
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"><Sidebar /></div>
                    <div className="col-9">
                        <h2>Employee data</h2>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <input
                                className="form-control w-50"
                                placeholder="Search employee"
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search} />
                            <br />
                            <button className="btn btn-success" onClick={openAddModal}>Add Employee</button>
                        </div>
                        <table className="table table-stripe align-items text-center">
                            <thead className="table table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Designation</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployee().map(data => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.department}</td>
                                        <td>{data.designation}</td>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                                <button className="btn btn-danger" onClick={() => deleteRow(data.id)}>Delete</button>
                                                <button className="btn btn-warning" onClick={() => openEditModal(data)}>Edit</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {showEditModal &&
                            <div className="modal show" style={{ display: "block" }} aria-modal="true" role="dialog">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header text-center">
                                            <h2 className="align-item-center">Edit employee details</h2>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-1 text-center">
                                                <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="text" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
                                            </div>

                                            <div className="mb-1 text-center">
                                                <input type="number" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="text" value={editDepartment} onChange={(e) => setEditDepartment(e.target.value)} />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="text" value={editDesignation} onChange={(e) => setEditDesignation(e.target.value)} />
                                            </div>
                                            <div className="d-flex justify-content-center gap-3">
                                                <button className="btn btn-primary mr-3" onClick={() => saveEdit()}>Save</button>
                                                <button className="btn btn-secondary" onClick={() => setEditModal(false)}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {showAddModal &&
                            <div className="modal show" style={{ display: "block" }}>
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header  justify-content-center">
                                            <h2>Add employee</h2>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-1 text-center">
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter department" />
                                            </div>
                                            <div className="mb-1 text-center">
                                                <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter designation" />
                                            </div>
                                            <div className="d-flex justify-content-center gap-3">
                                                <button className="btn btn-primary" onClick={() => addRow()}>Save</button>
                                                <br />
                                                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Employes;