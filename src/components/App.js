import React from 'react'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Cart from './Cart'
import Sizes from './Sizes'
import Shop from './Shop'


function App(props) {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
        <Sizes />
        <Shop />
        <Cart />
      </div>
    </Provider>
  )
}

export default App