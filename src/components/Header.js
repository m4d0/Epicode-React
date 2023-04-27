import { React } from 'react'
import { Nav } from 'react-bootstrap'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  return (
    <Nav>
      <LanguageSelector />
      <Profile />
    </Nav>
  )
}

export default Header
