import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css'
import { Navbar } from '../Navbar';
import CustomCalendar from './CustomCalendar';
import DueAssign from './DueAssign';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { fontFamily } from '@mui/system';
const Timeline = () => {
    const [clickedDate, setDate] = useState(new Date());
    const changeDate = (pdate) => {
        setDate(pdate)
    }
    const { currentUser } = useAuth();
    const [isAdded, setisAdded] = useState(0);
    const [allAssignment, setAllAssignment] = useState([]);
    const [assignDueDate, setAssignDueDate] = useState([]);

    useEffect(() => {
        let localAssign = [], localDates = [];

        (currentUser) &&
            currentUser.assignmentsId.map((id) => {
                const AssignRef = db.collection("assignments").doc(id);
                const assig = AssignRef.get().then((tdata) => {
                    if (tdata.exists) {
                        localAssign = [...localAssign, tdata.data()];
                        localDates = [...localDates, tdata.data().dueDate];
                    }
                }).then(() => {
                    setAllAssignment(localAssign);
                    setAssignDueDate(localDates);
                })
            })
    }, [currentUser])
    useEffect(() => {
        console.log(assignDueDate)
    }, [assignDueDate])
    return (
        <div className="main ">
            <div className="main_body container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 main_calendar">
                        <CustomCalendar setDate={changeDate} assignDueDate={assignDueDate} />
                    </div>
                    <div className="col-md-12 col-lg-8 main_sidebar ">
                        <DueAssign clickedDate={clickedDate} allAssignment={allAssignment} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
