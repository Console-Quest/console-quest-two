import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Game from '../components/Game';


const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Game />

    <Content />
  </Fragment>
);

export default Home;
