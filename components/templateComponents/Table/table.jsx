import React from "react";
import styles from "./table.module.scss";

function Table() {
  return (
    <div>
      <h5>House Typologies</h5>
      <table className={styles.table}>
        <tr>
          <th>Unit </th>
          <th>Sqm</th>
          <th>Price (Ksh.)</th>
          <th>No. of units</th>
        </tr>
        <tr>
          <td>Bedroom</td>
          <td>30</td>
          <td>1.5 Million</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Bedroom</td>
          <td>45</td>
          <td>2.5 Million</td>
          <td>75</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
