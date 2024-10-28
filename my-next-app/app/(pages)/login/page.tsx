import React from 'react';
import './styles.css'; // Import the regular CSS file

const LoginPage: React.FC = () => {
    return (
        <>
            <div className="form-wrapper">
                <h2>Sign In</h2>
                <form action="#">
                    <div className="form-control">
                        <input type="text" required />
                        <label>Email or phone number</label>
                    </div>
                    <div className="form-control">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit">Sign In</button>
                    <div className="form-help">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="#">Need help?</a>
                    </div>
                </form>
                <p>New to AuthMaster ? <a href="#">Sign up now</a></p>
                <small>
                Autres options de connexion
                    {/* <a href="#">x</a>
                    <a href="#">y</a>
                    <a href="#">z</a> */}
                </small>
            </div>
        </>
    );
};

export default LoginPage;
