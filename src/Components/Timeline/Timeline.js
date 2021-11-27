import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Timeline.css";
import CustomCalendar from "./CustomCalendar";
import DueAssign from "./DueAssign";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { RedirectLogin } from "../RedirectLogin";

const Timeline = () => {
  const history = useNavigate();

  const [clickedDate, setDate] = useState(new Date());
  const changeDate = (pdate) => {
    setDate(pdate);
  };

  const { currentUser } = useAuth();
  const [allAssignment, setAllAssignment] = useState([]);
  const [assignDueDate, setAssignDueDate] = useState([]);

  const returnHome = () => {
    history("/");
  };
  useEffect(() => {
    let localAssign = [],
      localDates = [];

    currentUser &&
      currentUser.assignmentsId.map((id) => {
        const AssignRef = db.collection("assignments").doc(id);
        const assig = AssignRef.get()
          .then((tdata) => {
            if (tdata.exists) {
              localAssign = [...localAssign, tdata.data()];
              localDates = [...localDates, tdata.data().dueDate];
            }
          })
          .then(() => {
            setAllAssignment(localAssign);
            setAssignDueDate(localDates);
          });
      });
  }, [currentUser]);

  return currentUser ? (
    <div className="main">
      <div className="main_body container">
        <div onClick={returnHome} className="row main_heading">
          GURUKOOL
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-3 main_calendar">
            <CustomCalendar
              setDate={changeDate}
              assignDueDate={assignDueDate}
            />
          </div>
          <div className="col-md-12 col-lg-8 main_sidebar ">
            <DueAssign
              clickedDate={clickedDate}
              allAssignment={allAssignment}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <RedirectLogin />
  );
};

export default Timeline;
