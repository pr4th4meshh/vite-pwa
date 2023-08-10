import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import store from './store.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Deposit from './components/Deposit.jsx'
import Withdraw from './components/Withdraw.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={< Deposit />} />
    <Route path='withdraw' errorElement={<h1>not found lol</h1>} element={<Withdraw/>} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
