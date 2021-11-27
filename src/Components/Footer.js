import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer id="contact-us">
        <div class="container">
          <div class="footer-content">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="contact-form">
                  <form
                    id="contact"
                    action="mailto:ambujverma00@gmail.com"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            required=""
                            style={{
                              "background-color": "rgba(250,250,250,0.3);",
                            }}
                          />
                        </fieldset>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            placeholder="E-Mail Address"
                            required=""
                            style={{
                              "background-color": "rgba(250,250,250,0.3);",
                            }}
                          />
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            style={{
                              "background-color": "rgba(250,250,250,0.3);",
                            }}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            class="main-button"
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>
                  More About <em>Gurukool</em>
                </h2>
                <p>
                  Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                  leo auctor.Duis at finibus odio. Vivamus ut pharetra arcu, in
                  porta metus.Suspendisse blandit pulvinar ligula ut elementum.
                  If you need this contact form to send email to your inbox, you
                  may follow our{" "}
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/contact"
                    target="_parent"
                  >
                    contact
                  </a>{" "}
                  page for more detail.
                </p>
                <ul class="social">
                  <li>
                    <a href="https://www.facebook.com/ambuj.verma.140">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/ambuj00/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ambuj0106">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="sub-footer">
                <p>
                  Copyright &copy; 2021 Gurukool | Designed by{" "}
                  <a rel="nofollow" href="#">
                    Ambuj
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
