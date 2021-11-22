import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import Chat from "./DiscussionRoom/Chat"
import Sidebar from './DiscussionRoom/Sidebar'
import { useAuth } from '../contexts/AuthContext'
import "./ChatRoom.css"


function ChatRoom() {
    const { currentUser } = useAuth();
    const { roomId } = useParams();
    const history = useNavigate();
    return (
        <>
            {
                (currentUser) ?
                    (<div className="app" >

                        <div className="app_body">
                            <Sidebar />
                            {(roomId) &&
                                <Chat />
                            }
                        </div>
                    </div>) : <Navigate to="/login" />
            }
        </>
    );
}

export default ChatRoom;
