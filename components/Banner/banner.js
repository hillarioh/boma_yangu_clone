import React from "react";
import styles from "./banner.module.scss";
import Link from "next/link";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>
          The 500,000
          <br /> Affordable Housing <br />
          Programme
        </h1>
        <p>
          Welcomes you to BomaYangu, the platform that allows you <br />
          to start your journey towards home ownership
        </p>
        <p>
          Fulfil your dreams by letting us help you achieve your home
          <br /> ownership goals
        </p>
        <div className={styles.bannerButton}>
          <Link href="/Register">
            <a>Get Started, its free</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
