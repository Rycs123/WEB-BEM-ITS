import React from "react";
import Header from "../Header/Header";
import Address from "../Address/Address";
import Footer from "../Footer/Footer";

const News = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="news-title"></div>
                <div className="news-card"></div>
                <div className="news-category"></div>
                <div className="news-most-read"></div>
            </main>
            <Address />
            <Footer />
        </div>
    );
};

export default News;
