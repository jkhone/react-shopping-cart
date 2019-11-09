import React from 'react'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Sizes from './Sizes'
import Shop from './Shop'
import 'semantic-ui-css/semantic.min.css'

function App(props) {
  return (
    <Provider store={store}>
      <div className='app'>
        <Sizes />
        <Shop />
      </div>
    </Provider>
  )
}

export default App