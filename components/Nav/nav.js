import React from "react";
import Image from "next/image";
import styles from "./nav.module.scss";
import logoPic from "../../assets/images/boma_logo.svg";
import Link from "next/link";

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
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/News">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/Ahp">
              <a>AHP</a>
            </Link>
          </li>
          <li>
            <Link href="/Pipeline">
              <a>PIPELINE</a>
            </Link>
          </li>
          <li>
            <Link href="/Tenders">
              <a>TENDERS</a>
            </Link>
          </li>
          <li>
            <Link href="/Housing_projects">
              <a>HOUSING PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="/Faqs">
              <a>FAQS</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a>CONTACT</a>
            </Link>
          </li>
          <li>
            <Link href="/Strategic_partners">
              <a>STRATEGIC PARTNERS</a>
            </Link>
          </li>
          <li>
            <Link href="/Register">
              <a>REGISTER</a>
            </Link>
          </li>
          <li>
            <Link href="/Login">
              <a>LOGIN</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
