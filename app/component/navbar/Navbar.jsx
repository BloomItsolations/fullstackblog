import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.logo}> <Link href={'/'}>Cypress Hotels Pvt. Ltd </Link></div>
    </div>
  )
}

export default Navbar
