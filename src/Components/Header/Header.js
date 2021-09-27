import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand logo" href="#">
                        <img src={logo} alt=""/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Categories</a>
                        </li>
                        <li className="nav-item">
                            <input className="nav-link search-box" type="text" placeholder="Search for anything"/>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Ulearn Business</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Teach on Ulearn</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                        <button className="btn btn-login">Login</button>
                        <button className="btn btn-sign-up">Sign Up</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;