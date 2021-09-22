import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import './index.css'
import App from './App'

const SGlobalStyle = createGlobalStyle`
  ${reset}
`

ReactDOM.render(
  <React.StrictMode>
    <SGlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
