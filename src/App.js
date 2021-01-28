import React from 'react'
// Global Style
import GlobalStyle from './components/GlobalStyle'
// Pages
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetail'

import Nav from './components/Nav'

// Router
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs}/>
        <Route exact path="/our-work" component={OurWork}/>
        <Route path="/our-work/:id" component={MovieDetail}/>
        <Route path="/contact-us" component={ContactUs}/>
      </Switch>
    </div>
  );
}

export default App;
