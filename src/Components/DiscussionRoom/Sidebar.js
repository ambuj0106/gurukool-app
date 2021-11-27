import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Avatar } from "@mui/material";
import SidebarChat from "./SidebarChat";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((docs) => ({
          id: docs.id,
          data: docs.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton>
          <Link to="/">
            <HomeIcon />
          </Link>
        </IconButton>
        {
          // <div className="sidebar_headerRight">
          //     <IconButton>
          //         <DonutLargeIcon />
          //     </IconButton>
          //     <IconButton>
          //         <ChatIcon />
          //     </IconButton>
          //     <IconButton>
          //         <MoreVertIcon />
          //     </IconButton>
          // </div>
        }
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {currentUser &&
          rooms.map(
            (room) =>
              (room.data.userEmails.includes(currentUser.email) ||
                currentUser.isTeacher) && (
                <SidebarChat key={room.id} id={room.id} name={room.data.name} />
              )
          )}
      </div>
    </div>
  );
};

export default Sidebar;
