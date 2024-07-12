import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.heading} href={"/"}>
        Cypress Hotels Pvt. Ltd{" "}
      </Link>
    </header>
  );
};

export default Navbar;
