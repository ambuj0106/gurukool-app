import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Chat from "./DiscussionRoom/Chat";
import Sidebar from "./DiscussionRoom/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import "./ChatRoom.css";
import { RedirectLogin } from "./RedirectLogin";
import { db } from "../firebase";

function ChatRoom() {
  const [room, setRoom] = useState([]);
  const { currentUser } = useAuth();
  const { roomId } = useParams();
  useEffect(() => {
    const RoomRef = db.collection("rooms").doc(roomId);
    console.log(
      RoomRef.get().then((doc) => {
        if (doc.exists) setRoom(doc.data().userEmails);
      })
    );
  });

  return (
    <>
      {currentUser ? (
        <div className="app">
          <div className="app_body">
            <Sidebar />
            {(room.includes(currentUser.email) || currentUser.isTeacher) &&
              roomId && <Chat />}
          </div>
        </div>
      ) : (
        <RedirectLogin />
      )}
    </>
  );
}

export default ChatRoom;
