import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from 'styled-components'
import {theme} from './Components/Styled/Theme'
import { GlobalStyle } from "./Components/Styled/Global.style";
import {BrowserRouter} from "react-router-dom"
import { PosterProvider } from "./Components/App/PosterList/PosterList"
import {AuthProvider} from "./Components/Providers/AuthProvider.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
    <PosterProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PosterProvider>
    </AuthProvider>
  </React.StrictMode>
)
