import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './src/navigation/Navigation'
import { Store } from './src/reduxTKit/Store'

const App = () => {
  return (
    <React.Fragment>
      <Provider store={Store}>
      <Navigation/>
      </Provider>
    </React.Fragment>
  )
}

export default App