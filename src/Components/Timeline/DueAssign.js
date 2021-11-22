import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import Assignment from './Assignment'
import "./DueAssign.css"
const DueAssign = ({ clickedDate, allAssignment }) => {
    const { currentUser } = useAuth();
    // const [hasAssign, sethasAssign] = useState(0);
    let hasAssign = 0;
    const setHasAssign = () => {
        hasAssign = 1;
    }
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
        return dDate === formatDate(date.toString());
    }
    return (
        < div className="dueAssign" >
            <h1 className="dueAssign_heading">Assignments due on {clickedDate.toLocaleDateString()} till {clickedDate.toLocaleTimeString()}</h1>
            <ul className="dueAssign_tasks">
                {
                    (currentUser) &&
                    allAssignment.map((obj) => {
                        return (
                            <>
                                {
                                    (isSameDay(obj.dueDate, clickedDate)) && (
                                        < li >
                                            {
                                                setHasAssign()

                                            }
                                            <Assignment Assign={obj} />
                                        </li>
                                    )
                                }
                            </>
                        )
                    })

                }
                {
                    (hasAssign == 0) && (
                        <h3>No assignment</h3>
                    )
                }
            </ul>
        </div >
    )
}

DueAssign.defaultProps = {
    clickedDate: new Date()
}
export default DueAssign
