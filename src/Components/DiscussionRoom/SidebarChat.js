import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
const SidebarChat = ({ id, name, addNewChat }) => {
  const { currentUser } = useAuth();
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please Enter the name of the new room");
    if (roomName) {
      // do some clever stuff
      db.collection("rooms").add({
        name: roomName,
        userEmails: [],
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/jdenticon/${seed}.svg`}
        />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  ) : (
    currentUser.isTeacher && (
      <div onClick={createChat} className="sidebarChat_info">
        <button>Add New Room</button>
      </div>
    )
  );
};

export default SidebarChat;
