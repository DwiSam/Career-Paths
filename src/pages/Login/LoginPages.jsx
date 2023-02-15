import React from "react";
import "./Styles.css";
import Fade from "react-reveal/Fade";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import LoginIc from "../../assets/Images/loginreg.png";
import EmailIc from "../../assets/Images/mail-ic.svg";
import PwdIc from "../../assets/Images/password-ic.svg";
import Eye from "../../assets/Images/eye-ic.svg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Fb from "../../assets/Images/fb-ic.png";
import Google from "../../assets/Images/google-ic.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Fade top cascade>
        <div className="login">
          <div className="login-ic">
            <img className="login-logo" src={LoginIc} alt={LoginIc} />
          </div>
          <div className="login-box">
            <h3 className="loginreg-title">Selamat Datang Kembali</h3>
            <p className="loginreg-sub-title">
              Silahkan masuk dengan akun yang sudah terdaftar
            </p>

            <InputGroup className="email-form">
              <InputGroup className="form-ic">
                <img className="form-icon" src={EmailIc} alt={EmailIc} />
                <Form.Control
                  className="login-input"
                  type="email"
                  placeholder="Email"
                />
              </InputGroup>
            </InputGroup>

            <InputGroup className="password-form">
              <InputGroup className="form-ic">
                <img className="form-icon" src={PwdIc} alt={PwdIc} />
                <Form.Control
                  className="login-input"
                  type="password"
                  placeholder="Password"
                />
                <img className="show-pwd" src={Eye} alt={Eye} />
              </InputGroup>
            </InputGroup>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Ingat saya
              </label>
            </div>

            <p className="forgot">Lupa Password?</p>

            <button className="btn-masuk">Masuk</button>
            <p className="socmed-login">Atau masuk menggunakan sosial media?</p>

            <div className="socmed">
              <img src={Fb} alt={Fb} width={66} height={66} />
              <img src={Google} alt={Google} width={66} height={66} />
            </div>

            <p className="create-account">
              Belum Punya Akun?
              <span style={{ fontWeight: "bold", color: "#000000" }}>
                <Link
                  to="/register"
                  style={{ textDecoration: "none" }}
                  activeClass="activeClass"
                >
                  Daftar Sekarang
                </Link>
              </span>
            </p>
          </div>
        </div>
      </Fade>
      <Footer className="login-footer" />
    </>
  );
};

export default LoginPage;