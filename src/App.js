import React from 'react'
import { FooterComponent } from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import NavbarComponent from './components/NavbarComponent'
import PageContentComponent from './components/PageContentComponent'

const App = () => {

  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <PageContentComponent />
      <FooterComponent />

    </>
  )
}

export default App