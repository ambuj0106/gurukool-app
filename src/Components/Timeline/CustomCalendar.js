import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { useAuth } from '../../contexts/AuthContext';
import "./CustomCalendar.css"
const CustomCalendar = ({ setDate, assignDueDate }) => {
    const [newDate, setNewDate] = useState();


    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    const isSameDay = (dDate, date) => {
        // console.log(dDate)

        // const temp = date.getTime() / 1000;
        // console.log(temp, " ", dDate.seconds)
        return dDate === formatDate(date.toString());
    }

    function tileClassName({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (assignDueDate.find(dDate => isSameDay(dDate, date))) {

                return 'specialDay';
            }
        }
    }

    useEffect(() => {
    }, [assignDueDate])

    useEffect(() => {
        setDate(newDate);
    }, [newDate])

    return (
        <div>
            <Calendar onChange={setNewDate} value={newDate} tileClassName={tileClassName} />
        </div>
    )
}

export default CustomCalendar
