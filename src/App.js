import React from 'react'
import Home from './Compo/Home'
import NavBar from './Compo/NavBar'

import {Switch , Route} from "react-router-dom"

import Business from './Compo/Business'
import Sports from './Compo/Sports'
import Health from './Compo/Health'
import Science from './Compo/Science'
import Ent from './Compo/Ent'
import Tech from "./Compo/Tech"

const App = () => {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Sports" component={Sports} />
      <Route exact path="/Health" component={Health} />
      <Route exact path="/Science" component={Science} />
      <Route exact path="/Ent" component={Ent} />
      <Route exact path="/Business" component={Business} />
      <Route exact path="/Tech" component={Tech} />
      
    </Switch>
    </>
  )
}

export default App
