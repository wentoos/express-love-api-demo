import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    header: {
      height: '64px',
      width: '100%',
      backgroundColor: '#00bcd4',
      textAlign: 'center',
      lineHeight: '64px',
    },
    link: {
      fontSize: '1.5em',
      color: '#fff',
      textDecoration: 'none'
    }
  }

const Header = () => (
  <header style={styles.header}>
    <Link to='/' style={styles.link}>BORN TO CODE</Link>
  </header>
)
export default Header
