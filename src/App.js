import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import TentangKami from "./components/tentangKami";
import DaftarMobil from "./components/daftarMobil";
import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <TentangKami />
        <DaftarMobil />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
