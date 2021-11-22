import Button from '@restart/ui/esm/Button'
import React, { useRef, useState } from 'react'
import { Alert, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { db } from '../firebase'
import firebase from 'firebase'

const AssignAssignment = () => {

    const titleRef = useRef()
    const descRef = useRef()
    const classRef = useRef()
    const dateRef = useRef()
    const linkRef = useRef()
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState();
    const assignToUser = (id, cls) => {
        let add = false;

        db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc);
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




    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        db.collection('assignments').add({
            Name: titleRef.current.value,
            description: descRef.current.value,
            class: classRef.current.value,
            dueDate: dateRef.current.value,
            link: linkRef.current.value
        }).then((docRef) => {
            setSuccess("Assigned successfully")
            console.log(classRef.current.value, " yes")
            const cls = classRef.current.value;
            assignToUser(docRef.id, cls)
            // console.log(dateRef.current.value.getSeconds());

            setLoading(false); e.target.reset();
        })


    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Add Assignment</h2>
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="name" ref={titleRef} required />
                        </Form.Group>
                        <Form.Group id="">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" ref={descRef} required />
                        </Form.Group>
                        <Form.Group id="">
                            <Form.Label>Class</Form.Label>
                            <Form.Control type="text" ref={classRef} required />
                        </Form.Group>
                        <Form.Group id="dueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" ref={dateRef} required />
                        </Form.Group>
                        <Form.Group id="link">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" ref={linkRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Add Student
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AssignAssignment
