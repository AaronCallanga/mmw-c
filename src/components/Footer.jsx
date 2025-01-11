import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className='footer'>
      <p>&copy; 2025 Beyond The Walls by Aaron Dave D. Callanga | BSCS 1-1 . All rights reserved.</p>
      <button className='home-btn' onClick={scrollToTop}>Back to Top</button>
    </footer>
  )
}
