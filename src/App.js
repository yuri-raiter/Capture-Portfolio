import React from 'react'
// Global Style
import GlobalStyle from './components/GlobalStyle'
// Pages
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
