import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import './SidebarChat.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
const SidebarChat = ({ id, name, addNewChat }) => {
    const { currentUser } = useAuth();
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    useEffect(() => {
        if (id) {
            // db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>
            //     snapshot)
        }
    }, [id]);
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // do some clever stuff
            db.collection("rooms").add({
                name: roomName,
                userEmails: [currentUser.email]
            });
        }
    }
    return !addNewChat ? (

        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                </div>
            </div >
        </Link>

    ) : (currentUser.isTeacher) && (


        < div onClick={createChat} className="sidebarChat_info" >
            <h2> Add New Chat</h2>
        </div >

    )
}

export default SidebarChat;
