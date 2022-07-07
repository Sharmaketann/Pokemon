import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div>
      <div className={`nav ${show && 'nav__black'}`}>
        <img
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211'
          alt='Pokemon Logo'
        />
        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
          alt='logo'
          onClick={handleLogout}
        />
      </div>
    </div>
  )
}

export default Nav
