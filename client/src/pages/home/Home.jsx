import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "../../containers";

import { CTA, Brand, Navbar } from "../../components";

function Home() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className="gradient__bg">
        <Brand />
        <WhatGPT3 />
        <Features />
        <CTA />
        <Blog />

        <Possibility />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
