import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import BlueLogo from "../../assets/img/BlueLogo.png";
import LandingPageSelaras from "../../assets/img/LandingPage.svg";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import Address from "../../components/Address/Address";

const LandingPage = (props) => {
    return (
        <div>
            <Header />
            <main>
                <div className="mainLandingPage"></div>
                <div className="secondLandingPage"></div>
                <div className="fastLinkLandingPage"></div>
                <div className="newsBemLandingPage"></div>
                <div className="progressLandingPage"></div>
                <Address />
            </main>
            <Footer />
        </div>
    );
};

LandingPage.propTypes = {};

export default LandingPage;
