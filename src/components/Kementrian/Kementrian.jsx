import React from "react";
import Header from "../Header/Header";

import LogoBemSelaras from "../../assets/img/Logo.png";
import IntraKampus from "../../assets/img/INTRA KAMPUS.png";
import KabinetSelaras from "../../assets/img/Kabinet Selaras.png";
import KemenkoanYellow from "../../assets/img/Kemenkoan Yellow.png";
import SelarasWhiteYellow from "../../assets/img/Selaras White Yellow BG.png";
import ButtonGradientDanger from "../../assets/img/btn gradient danger.png";
import ButtonGradientWarning from "../../assets/img/btn gradient warning.png";
import Rectangle1454 from "../../assets/img/Rectangle 1454.png";
import Rectangle1455 from "../../assets/img/Rectangle 1455.png";
import Adi from "../../assets/img/Aristo - Aristo Ramadhani 1.png";

const Kementrian = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="container-fluid">
                    <div className="box row">
                        <div className="side-left ms-5 col-lg-6 my-auto kemenkoan">
                            <img src={IntraKampus} alt={IntraKampus} />
                            <p className="text-white ">
                                Kemenkoan yang membidangi koordinasi,
                                sinkronisasi, serta <br /> pengendalian urusan
                                Kementrian dalam pelayanan kesejahteraan intra{" "}
                                kampus.
                            </p>
                            <div className="group-anchor">
                                <a href="google.com">
                                    <img
                                        className="me-5"
                                        src={ButtonGradientWarning}
                                        alt={ButtonGradientWarning}
                                    />
                                </a>
                                <a href="google.com">
                                    <img
                                        src={ButtonGradientDanger}
                                        alt={ButtonGradientDanger}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="side-right col-lg-6">
                            <img
                                src={SelarasWhiteYellow}
                                alt={SelarasWhiteYellow}
                                className="z-0 SelarasWY"
                            />
                            <img
                                src={KabinetSelaras}
                                alt={KabinetSelaras}
                                className="z-1 KabinetSelaras"
                            />
                            <img
                                src={KemenkoanYellow}
                                alt={KemenkoanYellow}
                                className="z-2 KemenkoanYellow"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <section id="member">
                <div className="container">
                    <div className="text-member">
                        <h1 className="text-white text-center pt-5">Anggota</h1>
                        <img
                            src={LogoBemSelaras}
                            alt=""
                            className="z-0 position-absolute logo-around-member"
                        />
                    </div>
                    <div className="member-kemenkoan row">
                        <div className="left-member col">
                            <div className="group-photo">
                                <img
                                    src={Rectangle1454}
                                    alt={Rectangle1454}
                                    className="z-2 position-absolute photo-left-1"
                                />
                                <img
                                    src={Rectangle1455}
                                    alt={Rectangle1455}
                                    className="z-1 position-absolute photo-left-2"
                                />
                                <img
                                    src={Adi}
                                    alt={Adi}
                                    className="z-3 position-absolute photo-left-3"
                                />
                                <div
                                    className="left-text text-white position-absolute"
                                    style={{
                                        border: "1px solid red",
                                    }}
                                >
                                    <h3>Abdullah Jihad Akbar</h3>
                                    <h5
                                        className="text-center"
                                        style={{
                                            border: "1px solid red",
                                        }}
                                    >
                                        <i>
                                            Teknologi Rekayasa Konstruksi <br />
                                            Bangunan Air (2019)
                                        </i>
                                    </h5>
                                    <button className="gradient-button">
                                        <img
                                            src={LogoBemSelaras}
                                            alt=""
                                            className="gradient-image"
                                        />
                                        <span> Wakil Menteri Koordinator</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mid-member col">
                            <div className="group-photo">
                                <img
                                    src={Rectangle1454}
                                    alt={Rectangle1454}
                                    className="z-2 position-absolute photo-mid-1"
                                />
                                <img
                                    src={Rectangle1455}
                                    alt={Rectangle1455}
                                    className="z-1 position-absolute photo-mid-2"
                                />
                                <img
                                    src={Adi}
                                    alt={Adi}
                                    className="z-3 position-absolute photo-mid-3"
                                />
                            </div>
                        </div>
                        <div className="right-member col">
                            <div className="group-photo">
                                <div className="group-photo">
                                    <img
                                        src={Rectangle1454}
                                        alt={Rectangle1454}
                                        className="z-2 position-absolute photo-right-1"
                                    />
                                    <img
                                        src={Rectangle1455}
                                        alt={Rectangle1455}
                                        className="z-1 position-absolute photo-right-2"
                                    />
                                    <img
                                        src={Adi}
                                        alt={Adi}
                                        className="z-3 position-absolute photo-right-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kementrian;
