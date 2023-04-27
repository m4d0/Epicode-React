import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
