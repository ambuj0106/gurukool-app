import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { db } from "../../firebase";
import firebase from "firebase";
import { useAuth } from "../../contexts/AuthContext";
const AddParticipants = ({ roomId }) => {
  const [show, setShow] = useState(false);
  const [member, setMember] = useState("");
  const { currentUser } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (currentUser.isTeacher) setShow(true);
  };

  const handleAdd = async () => {
    let add = false;
    await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const cred = doc.data();
          if (cred.email == member) {
            add = true;
          }
        });
      });

    if (add) {
      await db
        .collection("rooms")
        .doc(roomId)
        .update({
          userEmails: firebase.firestore.FieldValue.arrayUnion(member),
        });
    } else {
      alert("No user Found");
    }

    handleClose();
  };

  return (
    <div>
      <>
        {currentUser.isTeacher && (
          <IconButton>
            <PersonAddIcon style={{ color: "white" }} onClick={handleShow} />
          </IconButton>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Members</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              value={member}
              onChange={(e) => setMember(e.target.value)}
              placeholder="Enter user Email"
              type="text"
            />
          </Modal.Body>
          {
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Add
              </Button>
            </Modal.Footer>
          }
        </Modal>
      </>
    </div>
  );
};

export default AddParticipants;
