import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Appointments from "./components/Appointments/Appointments";
import Clients from "./components/Clients/Clients";
import Doctors from "./components/Doctors/Doctors";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="root-div">
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
        <Container>
          <Navbar.Brand style={{ fontSize: "50px" }} href="home">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ fontSize: "40px" }} className="me-auto">
              <Nav.Link href="appointments">Appointments</Nav.Link>
              <Nav.Link href="doctors">Doctors</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="clients">Clients</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="two">
            {" "}
            <h1>My Clinic</h1>
          </div>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="home" element={<Home />}></Route>
        <Route exact path="appointments" element={<Appointments />}></Route>
        <Route exact path="doctors" element={<Doctors />}></Route>
        <Route exact path="events" element={<Events />}></Route>
        <Route exact path="clients" element={<Clients />}></Route>
      </Routes>
    </div>
  );
}

export default App;
