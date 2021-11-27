import React, { useState } from 'react'
import { Alert, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { db } from '../firebase'
import firebase from 'firebase'

const AssignAssignment = () => {
    const history = useNavigate();

    const [task, setTask] = useState({
        title: "",
        desc: "",
        class: "",
        date: new Date(),
        link: ""
    })

    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState();

    const assignToUser = (id, cls) => {
        let add = false;
        db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const cred = doc.data();
                const uid = doc.id;
                if (cred.class === cls) {
                    db.collection('users').doc(uid).update({
                        assignmentsId: firebase.firestore.FieldValue.arrayUnion(id)
                    })
                }
            })
        })
    }

    // Sending req to DB to add assignment Id to specific user.
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        db.collection('assignments').add({
            Name: task.title,
            description: task.desc,
            class: task.class,
            dueDate: task.date,
            link: task.link
        }).then((docRef) => {
            setSuccess("Assigned successfully")
            const cls = task.class;
            assignToUser(docRef.id, cls)
            setLoading(false);
            setTask({
                title: "",
                desc: "",
                class: "",
                date: "",
                link: ""
            })
        })
    }

    const handleInput = (e) => {
        const tag = e.target.name;
        const value = e.target.value;
        console.log(tag, " ", value)
        setTask({ ...task, [tag]: value })
    }

    const toHome = () => {
        console.log("clicked h2")
        history("/");
    }
    return (
        <div>

            <section className="h-100 gradient-form" style={{ "background-color": "#eee;" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center heading">
                                                <h4 onClick={toHome} className="mt-1 mb-5 pb-1">Gurukool</h4>
                                            </div>
                                            {success && <Alert variant="success">{success}</Alert>}
                                            <form>
                                                <p>Add Assignments</p>

                                                {
                                                    // Title of assignment.
                                                }
                                                <div className="form-outline mb-4">
                                                    <input
                                                        value={task.title}
                                                        onChange={handleInput}
                                                        type="text"
                                                        name="title"
                                                        className="form-control"

                                                    />
                                                    <label className="form-label" >Title</label>
                                                </div>

                                                {
                                                    // Description of assignment.
                                                }
                                                <div className="form-outline mb-4">
                                                    <input
                                                        value={task.desc}
                                                        onChange={handleInput}
                                                        type="text"
                                                        name="desc"
                                                        className="form-control"

                                                    />
                                                    <label className="form-label" >Description</label>
                                                </div>

                                                {
                                                    // Class of assignment.
                                                }
                                                <div className="form-outline mb-4">
                                                    <input
                                                        value={task.class}
                                                        onChange={handleInput}
                                                        type="text"
                                                        name="class"
                                                        className="form-control"

                                                    />
                                                    <label className="form-label" >Class</label>
                                                </div>

                                                {
                                                    // Date of assignment.
                                                }
                                                <div className="form-outline mb-4">
                                                    <input
                                                        value={task.date}
                                                        onChange={handleInput}
                                                        type="date"
                                                        name="date"
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" >Date</label>
                                                </div>

                                                {
                                                    // Link of assignment.
                                                }
                                                <div className="form-outline mb-4">
                                                    <input
                                                        value={task.link}
                                                        onChange={handleInput}
                                                        type="text"
                                                        name="link"
                                                        className="form-control"

                                                    />
                                                    <label className="form-label" >Link</label>
                                                </div>

                                                {
                                                    // Automatically assign the assignment to the class.
                                                }
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        onClick={handleSubmit}
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="button"
                                                    >
                                                        Add Assignment
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Facts</h4>
                                            <p className="small mb-0"> Assignments create teaching and learning opportunities to think and learn about ideas, topics, events, and questions—about specific content in the curriculum. This is why a quality assignment is the hallmark of effective instruction.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AssignAssignment
