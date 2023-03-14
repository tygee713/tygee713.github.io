import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    background: 'gray',
    lineHeight: 1.5,
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  name: {
    flex: 'left',
  },
  links: {

  },
} as const

const Navbar = () => {
  return (
    <nav style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.name}>
          <h1>Tyler Geerdts</h1>
        </div>
        <div style={styles.links}>
          <Link to='/resume'>Resume</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar