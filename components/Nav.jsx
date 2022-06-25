import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css';

function Nav() {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
              <Link href="/">
              Home
              </Link>
            </li>
            <li>
              <Link href="/photos">
              Photos
              </Link>
            </li>
      </ul>
    </nav>
  )
}

export default Nav