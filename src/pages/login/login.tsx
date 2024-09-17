import React from 'react';

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-body">
              <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="tab-register" data-mdb-pill-init href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
              </ul>

              <div className="tab-content">
                {/* Login tab */}
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                  {/* Login form */}
                  <form>
                    {/* Social media buttons */}
                    {/* ... */}

                    {/* Email and password inputs */}
                    {/* ... */}

                    {/* Remember me and Forgot password */}
                    {/* ... */}

                    {/* Sign in button */}
                    {/* ... */}

                    {/* Register link */}
                    {/* ... */}
                  </form>
                </div>

                {/* Register tab */}
                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                  {/* Register form */}
                  <form>
                    {/* Social media buttons */}
                    {/* ... */}

                    {/* Name, username, email, password, and repeat password inputs */}
                    {/* ... */}

                    {/* Terms and conditions checkbox */}
                    {/* ... */}

                    {/* Sign up button */}
                    {/* ... */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;