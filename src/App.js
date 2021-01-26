import React from 'react'
// Global Style
import GlobalStyle from './components/GlobalStyle'
// Pages
import AboutUs from './pages/AboutUs'

import Nav from './components/Nav'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
