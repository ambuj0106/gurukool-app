import React from 'react'
import featureIcon from "../assets/images/features-icon-3.png"
const Card = () => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <div className="features-item">
                <div className="features-icon">
                    <h2>01</h2>
                    <img src={featureIcon} alt="Np" />
                    <h4>COMMUNICATIONS AND COLLABORATION</h4>
                    <p>Robust communication options and strong support for groups make it easier to keep in
                        touch, learn together, and work in teams.Use our chat feature to engage in real-time
                        for messaging, discussions, social connections, and collaborative work.</p>
                    <a href="#testimonials" className="main-button">
                        Read More
                    </a>
                </div>
            </div>
        </div >

    )
}

export const Features = () => {
    return (
        <div>
            <section className="section" id="about">
                <div className="container">
                    <div className="row">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </section>
            {/* <!-- ***** Features Big Item End ***** --> */}

        </div>
    )
}
