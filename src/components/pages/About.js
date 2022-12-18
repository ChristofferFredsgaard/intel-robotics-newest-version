import React from "react";
import "../../App.css";
import Presidents from "../Presidents";
import Footer from "../Footer";
import Developers from "../Developers";

export default function About() {
  return (
    <>
      <h1 className="about">ABOUT</h1>
      <Presidents />
      <Developers />
      <Footer />
    </>
  );
}
