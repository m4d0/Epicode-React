import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import { store } from './states/store'
import { Provider } from 'react-redux'
import { Counter } from './components/Counter'
import { Test } from './components/Test'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </Provider>
  )
}

export default App
