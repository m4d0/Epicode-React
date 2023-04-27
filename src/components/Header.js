import { React } from 'react'
import { Nav } from 'react-bootstrap'
import LanguageSelector from './LanguageSelector'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import SignIn from './SignIn'

const Header = () => {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isAuth
  })

  return (
    <Nav>
      <LanguageSelector />
      {isLoggedIn && <Profile />}
      {!isLoggedIn && <SignIn />}
    </Nav>
  )
}

export default Header
