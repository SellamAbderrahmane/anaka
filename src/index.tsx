import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import "react-toastify/dist/ReactToastify.css"
import "./styles.scss"

import App from "./App"
import { store } from "./app/store"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
