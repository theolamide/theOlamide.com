import React, { useState } from 'react';
import styled from "styled-components";
import Burger from 'react-css-burger';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ParticlesJS from "./Components/ParticlesJS";


import './App.css';

function App() {

  const [NavAppear, setNavAppear] = useState({ topDrawerOpen: false })

  let drawerToggleClickHandler = () => {
    setNavAppear((prevState) => {
      return { topDrawerOpen: !prevState.topDrawerOpen }
    });
  };

  let closeBackDropClickHandler = () => {
    setNavAppear({ topDrawerOpen: false })
  }


  return (

    <SiteWrapper>
      <ParticlesJS />

      <SubWrapper>
        <NavBar NavAppear={NavAppear} closeBackDropClickHandler={closeBackDropClickHandler} />
        <Home drawerToggleClickHandler={drawerToggleClickHandler} />

      </SubWrapper>
    </SiteWrapper>

  );
}

export default App;



const SiteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
  height: 100%
`
const SubWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
  height: 100%
`