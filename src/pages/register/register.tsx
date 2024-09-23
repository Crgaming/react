import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/login.css';

function Login() {
  return (
    <div className="container mt-5 ct mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-body">
              <ul className="nav nav-tabs mb-3" id="loginTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active "
                    id="tab-login"
                    data-bs-toggle="tab"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="tab-register"
                    data-bs-toggle="tab"
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form>
                    <div className="text-center mb-3">
                      <p>Sign in with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-facebook" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-google" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-twitter-x" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-github" />
                      </button>
                    </div>
                    <p className="text-center">or:</p>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input type="email" id="loginName" className="form-control" />
                      <label className="form-label" htmlFor="loginName">Email or username</label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input type="password" id="loginPassword" className="form-control" />
                      <label className="form-label" htmlFor="loginPassword">Password</label>
                    </div>

                    {/* 2 column grid layout */}
                    <div className="row mb-4">
                      <div className="col-md-6 d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check mb-3 mb-md-0">
                          <input className="form-check-input" type="checkbox" id="loginCheck" defaultChecked />
                          <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    {/* Submit button */}
                    <a href="/" type="submit" className="btn btn-primary btn-block mb-4">Sign in</a>

                    {/* Register buttons */}
                    <div className="text-center">
                      <p>Not a member? <a href="#!" data-bs-toggle="tab" data-bs-target="#pills-register">Register</a></p>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                >
                  <form>
                    <div className="text-center mb-3">
                      <p>Sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-facebook" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-google" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-twitter-x" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-github" />
                      </button>
                    </div>
                    <p className="text-center">or:</p>

                    {/* Name input */}
                    <div className="form-outline mb-4">
                      <input type="text" id="registerName" className="form-control" />
                      <label className="form-label" htmlFor="registerName">Name</label>
                    </div>

                    {/* Username input */}
                    <div className="form-outline mb-4">
                      <input type="text" id="registerUsername" className="form-control" />
                      <label className="form-label" htmlFor="registerUsername">Username</label>
                    </div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input type="email" id="registerEmail" className="form-control" />
                      <label className="form-label" htmlFor="registerEmail">Email</label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input type="password" id="registerPassword" className="form-control" />
                      <label className="form-label" htmlFor="registerPassword">Password</label>
                    </div>

                    {/* Repeat Password input */}
                    <div className="form-outline mb-4">
                      <input type="password" id="registerRepeatPassword" className="form-control" />
                      <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" id="registerCheck" defaultChecked aria-describedby="registerCheckHelpText" />
                      <label className="form-check-label" htmlFor="registerCheck">
                        I have read and agree to the terms
                      </label>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
