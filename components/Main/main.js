import React from "react";
import styles from "./main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversalAccess,
  faMoneyBillAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <>
      <section className={styles.mainTop}>
        <div>
          <p>
            Third call for applications for strategic
            <br /> partners is now open
          </p>
          <div className={styles.button}>
            <a href="/Register">Apply Now</a>
          </div>
          <p className={styles.did}>
            Did you know that you can verify contributions made to Boma Yangu
            e-wallet? Log on to verify and send your MPESA reference message/KCB
            SLIP,ID & Mobile No to recon@bomayangu.go.ke should you find any
            discrepancy.
          </p>
          <p className={styles.download}>
            Download the progress update brochure for MOKE Gardens, a new
            private affordable project.
          </p>
          <div className={styles.bannerButton}>
            <a href="/Register">Download Project Progress Update</a>
          </div>
        </div>
      </section>
      <section className={styles.mainCenter}>
        <div className={styles.how}>How Does it works?</div>
        <div className={styles.step}>
          <div className={styles.stepTitle}>
            <div>
              <span>1</span>
            </div>
          </div>
          <div className={styles.stepBody}>
            <div className={styles.title}>
              <FontAwesomeIcon
                icon={faUniversalAccess}
                className={styles.icon}
              />
              <h4>Register</h4>
            </div>
            <p>To register for house allocation, you MUST:</p>
            <ul>
              <li>
                <div className={styles.listNo}>
                  <span>1</span>
                </div>
                <span className={styles.listBody}>be a Kenyan citizen</span>
              </li>
              <li>
                <div className={styles.listNo}>
                  <span>2</span>
                </div>

                <span className={styles.listBody}>be over 18 years of age</span>
              </li>
              <li>
                <div className={styles.listNo}>
                  <span>3</span>
                </div>
                <span className={styles.listBody}>
                  have a valid national identity card
                </span>
              </li>
            </ul>

            <p>
              You must then complete your profile by submitting your personal
              details, housing preferences (the type of house you are applying
              for).
            </p>
            <p>
              Upon registration, your details are verified with the relevant
              government stakeholders for authenticity
            </p>
            <div className={styles.bannerButton}>
              <a href="/Register">Register Now, its free</a>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepTitle}>
            <div>
              <span>2</span>
            </div>
          </div>
          <div className={styles.stepBody}>
            <div className={styles.title}>
              <FontAwesomeIcon icon={faMoneyBillAlt} className={styles.icon} />
              <h4>Contribute</h4>
            </div>
            <p>
              Upon registration, you are allocated a unique identification
              number which you will use to make your monthly contribution to the
              Housing Fund
            </p>
            <p>The following contribution schemes are supported:</p>
            <ul className={styles.stepItem}>
              <li>
                <div className={styles.listNo}>
                  <span>1</span>
                </div>
                <div className={styles.listBody}>
                  <h4>Statutory Contributor</h4>
                  <ul>
                    <li>
                      &#8728; Mandatory contributions are capped at KES 2,500
                      per month per employee and employer
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.listNo}>
                  <span>2</span>
                </div>
                <div className={styles.listBody}>
                  <h4>Voluntary Contributor</h4>
                  <ul>
                    <li>&#8728; Monthly contributions are not capped</li>
                    <li>
                      &#8728; Voluntary contributions will not be taxed at time
                      of withdrawal
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.listNo}>
                  <span>3</span>
                </div>
                <div className={styles.listBody}>
                  <h4>Joint Contributor</h4>
                  <ul>
                    <li>
                      &#8728; Spousal or joint contribution can be made towards
                      ownership of one house at a time
                    </li>
                    <li>
                      &#8728; There is also an option to apply for one
                      individually
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <p className={styles.contFooter}>
              Contributions to the Housing Fund can be accessed on the sooner of
              15 years after a member’s first contribution or the attainment of
              retirement age
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepTitle}>
            <div>
              <span>3</span>
            </div>
          </div>
          <div className={styles.stepBody}>
            <div className={styles.title}>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              <h4>Own</h4>
            </div>
            <div className={styles.houseOwn}>
              <p>
                Allocation of houses to qualified applicants would start as soon
                as the construction of the affordable houses begins. The
                (allocation) process for the available houses would be done in a
                regular, fair and transparent system free of any human
                intervention and contact.
              </p>
              <p>
                The initial eligibility for allocation will depend on several
                factors such as when you registered, family status as well as
                demand across the housing categories.
              </p>
              <p>
                Those who do not get an allocation in the initial allocation are
                then put on a waiting list to ensure that they get priority in
                subsequent allocations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainBottom}>
        <div className={styles.how}>How Does it works?</div>
      </section>
    </>
  );
}

export default Main;
