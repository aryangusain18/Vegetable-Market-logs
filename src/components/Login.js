import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  return (
    <section>
      <div className="container mt-5 pt-5" style={{ width: '45rem' }}>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body">
                <svg
                  style={{ display: 'block', margin: 'auto' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <form onSubmit={validateForm}>
                  <input
                    type="text"
                    id="checkemail"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control my-3 py-2"
                    placeholder="Username or Email ID"
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control my-3 py-2"
                    placeholder="Password"
                  />
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    <br />
                    <p>OR</p>
                    <a href="https://accounts.google.com/AddSession/signinchooser?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&authuser=0&flowName=GlifWebSignIn&flowEntry=AddSession">
                      <img
                        src="signin.jpg"
                        className="center"
                        style={{ width: '15rem' }}
                        alt="Sign in with Google"
                      />
                    </a>
                    <a href="#" className="nav-link">
                      Forgot password ?
                    </a>
                    <a href="signup.html" className="nav-link">
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
