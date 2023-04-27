import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import { store } from './states/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  )
}

export default App
