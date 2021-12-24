import React from "react";
import Image from "next/image";
import styles from "./nav.module.scss";
import logoPic from "../../assets/images/boma_logo.svg";

function Nav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.navContact}>
        For enquiries, contact Huduma Centre - 0206900020
      </p>
      <div>
        <Image
          src={logoPic}
          alt="Picture of the author"
          width={70}
          height={70}
        />

        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/News">News</a>
          </li>
          <li>
            <a href="/Ahp">AHP</a>
          </li>
          <li>
            <a href="/Pipeline">PIPELINE</a>
          </li>
          <li>
            <a href="/Tenders">TENDERS</a>
          </li>
          <li>
            <a href="/Housing_projects">HOUSING PROJECTS</a>
          </li>
          <li>
            <a href="/Faqs">FAQS</a>
          </li>
          <li>
            <a href="/Contact">CONTACT</a>
          </li>
          <li>
            <a href="/Strategic_partners">STRATEGIC PARTNERS</a>
          </li>
          <li>
            <a href="/Register">REGISTER</a>
          </li>
          <li>
            <a href="/Login">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
