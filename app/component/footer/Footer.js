import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={'/'}>Cypress Hotels Pvt. Ltd</Link>
      <div className={styles.icons}>
        <Image src="/images/facebook.png" alt="" width={18} height={18} />
        <Image src="/images/instagram.png" alt="" width={18} height={18} />
        <Image src="/images/youtube.png" alt="" width={18} height={18} />
      </div>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()} Cypress Hotels Pvt. Ltd. All rights reserved.</p>
    </div>

  );
};

export default Footer;