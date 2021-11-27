import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");

  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      const successLogin = await login(email, password);
      history("/");
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <>
      {
        <section
          className="h-100 gradient-form"
          style={{ "background-color": "#eee;" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center heading">
                          <h4
                            onClick={() => {
                              history("/");
                            }}
                            className="mt-1 mb-5 pb-1"
                          >
                            Gurukool
                          </h4>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <form>
                          <p>Please login to your account</p>

                          <div className="form-outline mb-4">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              className="form-control"
                            />
                            <label className="form-label">Email</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              className="form-control"
                            />
                            <label className="form-label">Password</label>
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              onClick={handleSubmit}
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                            >
                              Log in
                            </button>
                            <Link to="/forgotPassword" className="text-muted">
                              Forgot password?
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">Gurukool</h4>
                        <p className="small mb-0">
                          Gurukool is built to make teaching and learning easier
                          for everyone, from the littlest learners to college
                          faculty to business leaders. Our only moto is to make
                          learning fun and easy for everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
}
