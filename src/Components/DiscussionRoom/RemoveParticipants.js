import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { db } from '../../firebase';
import firebase from 'firebase'
import { useAuth } from '../../contexts/AuthContext';
import Select from 'react-select';
const RemoveParticipants = ({ roomId }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [roomUsers, setRoomUsers] = useState([]);
    const [userRemoved, setUserRemoved] = useState(true)
    const [show, setShow] = useState(false);
    const { currentUser } = useAuth();
    const handleClose = () => {
        setShow(false)
        setSelectedUser(null);
    };

    const handleShow = () => {
        if (currentUser.isTeacher)
            setShow(true);
    }

    const handleRemove = () => {
        if (selectedUser) {
            db.collection('rooms').doc(roomId).update({
                userEmails: firebase.firestore.FieldValue.arrayRemove(selectedUser.value)
            }).then(() => {
                setUserRemoved(!userRemoved);
            });
        }
        handleClose();
    }

    useEffect(() => {
        let tempEmails = []
        const RoomRef = db.collection("rooms").doc(roomId);
        RoomRef.get().then((tdata) => {
            if (tdata.exists) {
                tdata.data().userEmails.map((email) => {
                    tempEmails = [...tempEmails, { value: email, label: email }]
                })

            }
        }).then(() => {
            setRoomUsers(tempEmails)
        })

    }, [roomId, userRemoved]);

    return (
        <div>

            <>
                {
                    (currentUser.isTeacher) &&
                    <IconButton>
                        <PersonRemoveIcon style={{ "color": "white" }} onClick={handleShow} />
                    </IconButton>
                }
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remove Member</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Select
                            value={selectedUser}
                            onChange={setSelectedUser}
                            options={roomUsers}
                            placeholder="Enter memeber name"
                        />
                    </Modal.Body>
                    {
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={handleRemove} variant="primary" >
                                Remove
                            </Button>
                        </Modal.Footer>
                    }
                </Modal>
            </>
        </div >
    )
}

export default RemoveParticipants
