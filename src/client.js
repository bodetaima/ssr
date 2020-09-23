import React from 'react'
import {hydrate, render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './app/app'

const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state)

render(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
)
