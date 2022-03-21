import React from "react"
import ReactDOM from "react-dom"
import thunk from "redux-thunk"
import { createStore, compose, applyMiddleware } from "redux"

import { rootReducer } from "./redux/rootReducer"
import { Provider } from "react-redux"

import App from "./App"

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
)
