import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authlinks/AuthLinks'
const Navbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.logo}> <Link href={'/'}>Cypress Hotels Pvt. Ltd </Link></div>
      <ThemeToggle />
    </div>
  )
}

export default Navbar
