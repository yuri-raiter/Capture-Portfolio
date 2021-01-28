import React from 'react'
// Global Style
import GlobalStyle from './components/GlobalStyle'
// Pages
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetail'

import Nav from './components/Nav'

import { AnimatePresence } from 'framer-motion'

// Router
import { Switch, Route, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs}/>
          <Route exact path="/our-work" component={OurWork}/>
          <Route path="/our-work/:id" component={MovieDetail}/>
          <Route path="/contact-us" component={ContactUs}/>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
