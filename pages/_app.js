/* 
  CUSTOM REDUX and THEMING SETUP
*/

import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import withReduxStore from '../lib/with-redux-store'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)