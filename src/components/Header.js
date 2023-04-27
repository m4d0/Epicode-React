import { React } from 'react'
import { Nav } from 'react-bootstrap'
import LanguageSelector from './LanguageSelector'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import SignIn from './SignIn'
import LamiaGet from './LamiaGet'

const Header = () => {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isAuth
  })

  return (
    <Nav>
      <LamiaGet />
      <LanguageSelector />
      {isLoggedIn && <Profile />}
      {!isLoggedIn && <SignIn />}
    </Nav>
  )
}

export default Header
