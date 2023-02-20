import React from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
// import { Navbar } from '../../components'
import "./submitquestion.css";
import Input from "./Input";
import Timer from "../../components/timer/Timer";
const SubmitQuestion = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      <Timer />
      {/* <Input /> */}
    </>
  );
};

export default SubmitQuestion;
