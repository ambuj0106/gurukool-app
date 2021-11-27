import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"

export default function Signup() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        class: "",
        assignmentsId: ""
    })

    const { signup } = useAuth()
    const [error, setError] = useState("")

    const history = useNavigate()
    const { currentUser } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(student)
        let originalUser = auth.currentUser;
        if (student.password !== student.passwordConfirm) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            await signup(student.email, student.password, student.name, student.class)
            await auth.updateCurrentUser(originalUser)
            history("/")
        } catch {
            setError("Failed to create an account")
        }
    }

    const handleInput = (e) => {
        const tag = e.target.name;
        const value = e.target.value;
        setStudent({ ...student, [tag]: value })
    }
    return (
        <>
            {(currentUser) && (currentUser.isTeacher) &&
                <section className="h-100 gradient-form" style={{ "background-color": "#eee;" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">

                                                <div className="text-center heading">
                                                    <h4 onClick={() => { history("/") }} className="mt-1 mb-5 pb-1">Gurukool</h4>
                                                </div>
                                                {error && <Alert variant="danger">{error}</Alert>}
                                                <form>
                                                    <p>Add New Student</p>

                                                    {
                                                        // Input Name.
                                                    }
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            value={student.name}
                                                            onChange={handleInput}
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name"
                                                            name="name"
                                                        />
                                                        <label className="form-label" >Name</label>
                                                    </div>


                                                    {
                                                        // Input Email.
                                                    }
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            value={student.email}
                                                            onChange={handleInput}
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            name="email"
                                                        />
                                                        <label className="form-label" >Email</label>
                                                    </div>

                                                    {
                                                        // Input Password.
                                                    }
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            value={student.password}
                                                            onChange={handleInput}
                                                            type="password"
                                                            name="password"
                                                            className="form-control"
                                                        />
                                                        <label className="form-label" >Password</label>
                                                    </div>

                                                    {
                                                        // Input PasswordConfirm.
                                                    }
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            value={student.passwordConfirm}
                                                            onChange={handleInput}
                                                            name="passwordConfirm"
                                                            type="password"
                                                            className="form-control"
                                                        />
                                                        <label className="form-label" >Confirm Password</label>
                                                    </div>

                                                    {
                                                        // Input Class.
                                                    }
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            value={student.class}
                                                            onChange={handleInput}
                                                            type="text"
                                                            name="class"
                                                            className="form-control"
                                                        />
                                                        <label className="form-label" >Class</label>
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            onClick={handleSubmit}
                                                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="button">
                                                            Add Student
                                                        </button>

                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">Gurukool</h4>
                                                <p className="small mb-0">Gurukool is built to make teaching and learning easier for everyone, from the littlest learners to college faculty to business leaders. Our only moto is to make learning fun and easy for everyone.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            }
        </>
    )
}