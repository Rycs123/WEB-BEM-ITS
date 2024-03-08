import React from "react";
import PropTypes from "prop-types";
import LogoBemSelaras from "../../assets/img/Logo.png";

const Header = (props) => {
    return (
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                <a className="navbar-brand d-flex text-white" href="./App.js">
                    <img
                        src={LogoBemSelaras}
                        alt=""
                        width={90}
                        height="auto"
                        className="d-inline-block align-text-top pt-1"
                    />
                    <span className="qebil align-self-center fs-3">
                        Kabinet Selaras
                    </span>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav fs-5">
                        <a
                            class="nav-link text-white active"
                            aria-current="page"
                            href="./App.js"
                        >
                            Home
                        </a>
                        <a class="nav-link text-white" href="./App.js">
                            Profile
                        </a>
                        <a class="nav-link text-white" href="./App.js">
                            More
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {};

export default Header;
