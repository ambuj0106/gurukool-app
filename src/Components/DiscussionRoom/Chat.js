import React, { useState, useEffect, useReducer, useRef } from 'react'
import './Chat.css'
import { IconButton, Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useParams } from 'react-router';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import firebase from 'firebase';
import Filter from 'bad-words';
import AddParticipants from './AddParticipants';

import RemoveParticipants from './RemoveParticipants';

const Chat = ({ }) => {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState(1);
    const [roomName, setRoomName] = useState("");
    const [roomMessages, setRoomMessages] = useState([]);
    const { roomId } = useParams();

    const { currentUser } = useAuth();

    const filter = new Filter();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });
            db.collection("rooms")
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setRoomMessages(snapshot.docs.map((doc) => doc.data())))

        }

    }, [roomId]);
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // To scroll to bottom.
    useEffect(() => {
        scrollToBottom()
    }, [roomMessages])

    // Function for sending a message in DB and updating the chat.
    const sendMessage = (e) => {
        e.preventDefault();
        if (input.length > 0) {
            const modInput = filter.clean(input);
            db.collection("rooms").doc(roomId).collection('messages').add({
                message: modInput,
                name: currentUser.name,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src="" />
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <AddParticipants roomId={roomId} />
                    </IconButton>
                    <IconButton>
                        <RemoveParticipants roomId={roomId} />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {
                    roomMessages.map((m) => (
                        <p className={`chat_message ${m.name === currentUser.name && "chat_receiver"}`} >
                            <span className="chat_name">
                                {m.name}
                            </span>
                            <span>
                                {m.message}
                            </span>
                            < span className="chat_timestamp" >
                                {
                                    new Date(m.timestamp?.toDate()).toUTCString()
                                }
                            </span>
                        </p>
                    ))
                }
                <div ref={messagesEndRef} />
            </div >

            <div className="chat_footer">

                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>

            </div>
        </div >
    )
}

export default Chat;
