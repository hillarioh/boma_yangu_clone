import React from "react";
import styles from "./project.module.scss";
import Image from "next/image";
import Link from "next/link";
import Table from "../../Table";

function Project() {
  return (
    <>
      <h4>King's Sapphire - Bondeni Project</h4>
      <div className={styles.project}>
        <div className={styles.projectImage}>
          <p>Image</p>
          <div className={styles.button}>
            <Link href="/Projects/view/29">
              <a>View Project</a>
            </Link>
          </div>
        </div>
        <div className={styles.projectContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nihil molestias in itaque libero commodi consequuntur, ad facilis
            ipsa dolores neque aut, aspernatur cum blanditiis nam molestiae?
            Debitis, optio enim?
          </p>
          <Table />
          <div>
            <p>
              Anticipated completion date is 2 yrs from launch date which is
              December 2022
            </p>
            <p>Amenities</p>
            <ul>
              <li>Ample water and electricity</li>
              <li>Central manned gate with security system</li>
              <li>Manicured gardens</li>
              <li>Sufficient water and electricity</li>
              <li>Commercial centre with essential stores & services</li>
              <li>Back up generator for common areas</li>
              <li>Solar Street Lighting</li>
              <li>Gated Community</li>
            </ul>
            <p>
              If interested, please contact authorized selling agent, Added
              Value Group on:
            </p>
            <div>
              <span>Rose : +254 722 425 753</span>
              <span>Allan: +254 724 575 629</span>
              <span>Emmah:+254 723 868 786</span>
              <span>Wambua: +254 729 656 366</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
