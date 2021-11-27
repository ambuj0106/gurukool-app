import React from "react";

export const Banner = () => {
  return (
    <div>
      <div className="welcome-area" id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Simple App that we <em>CREATE</em>
                </h1>
                <p>
                  Gurukool is built to make teaching and learning easier for
                  everyone, from the littlest learners to college faculty to
                  business leaders. Our only moto is to make learning fun and
                  easy for everyone.
                </p>
                <a href="#about" className="main-button-slider">
                  KNOW US BETTER
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/*  <!-- ***** Welcome Area End ***** --> */}
    </div>
  );
};
