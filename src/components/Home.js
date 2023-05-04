import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'

import { Counter } from './Counter'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
      </header>
    </div>
  )
}

export default Home
