import React from "react";
import featureIcon1 from "../assets/images/features-icon-3.png";
import featureIcon2 from "../assets/images/features-icon-2.png";
const Card = ({ id, heading, description, imgTag }) => {
  return (
    <div
      className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
      data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
    >
      <div className="features-item">
        <div className="features-icon">
          <h2>{id}</h2>
          <img src={imgTag} alt="Np" />
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <div>
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <Card
              id={"01"}
              heading={"Class Room"}
              description={
                "Robust communication options and strong support for groups make it easier to keep in touch, learn together, and work in teams.Use our chat feature to engage in real-time for messaging, discussions, social connections, and collaborative work."
              }
              imgTag={featureIcon1}
            />
            <Card
              id={"02"}
              heading={"TIMLINE"}
              description={
                "Timeline is the perfect assignment planner and scheduler to ensure that you never miss a due date again!. Use our Timeline feature and Organise your classes, tasks and exams & never forget a lecture or assignment again"
              }
              imgTag={featureIcon2}
            />
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}
    </div>
  );
};
