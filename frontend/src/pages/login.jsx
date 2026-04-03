import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";
import InputText from "../components/inputText";
import Nav from "../components/nav";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Nav/>
    <div className="login-page">
      <div className="login-wrapper">

        <div className="login-left">
          <div className="login-brand">
            <div className="login-brand-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3C8 3 5 6 5 10C5 14 8 17 12 21C16 17 19 14 19 10C19 6 16 3 12 3Z"
                  fill="#FAF6F1"
                  opacity="0.9"
                />
              </svg>
            </div>
            <span className="login-brand-name">Digito</span>
          </div>

          <div className="login-left-content">
            <div className="login-decorative-line"></div>
            <h2>Welcome back!</h2>
            <p>Login for best experience</p>
          </div>

          <p className="login-copyright">© 2026 digito. All rights reserved.</p>
        </div>

        {/* Right Panel */}
        <div className="login-right">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">
            Didn't have account yet?{" "}
            <Link to="/register" className="login-link">
              Register Now!
            </Link>
          </p>

          <div className="login-field">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              name="username"
              placeholder="Fill your username"
              type="text"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <div className="login-password-wrapper">
              <InputText
                id="password"
                name="password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                className="login-toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="login-forgot">
              <Link to="/forgot-password" className="login-link">
                forgot your password?
              </Link>
            </div>
          </div>

          <button className="login-btn-primary">Login</button>

          <div className="login-divider">
            <span>or</span>
          </div>

          <button className="login-btn-google">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>

      </div>
    </div>
    </>
  );
}

export default Login;