import { React } from 'react'
import { Nav } from 'react-bootstrap'
import LanguageSelector from './LanguageSelector'
import Profile from './Profile'

const Header = () => {
  return (
    <Nav>
      <LanguageSelector />
      <Profile />
    </Nav>
  )
}

export default Header
