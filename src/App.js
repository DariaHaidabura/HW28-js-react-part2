import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";
import Appointments from "./components/Appointments/Appointments";
import Clients from "./components/Clients/Clients";
import Doctors from "./components/Doctors/Doctors";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";
import  Test from "./components/Test/Test";
import Card from "./components/Test/Card"
import cart from "./redux/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { addToFavs, fetchFavs } from "./redux/actions/cart";

function App() {
  const dispatchFav = useDispatch()
  useEffect(() => {
    dispatchFav(fetchFavs())
  });

  const {cart} = useSelector((cart) => cart)
  /* const isLoaded = useSelector((cart) => cart.isLoaded)*/
  
  
  return (
      <div className="root-div">
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
        <Container>
          <Navbar.Brand style={{ fontSize: "50px" }} href="#home">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ fontSize: "40px" }} className="me-auto">
              <Nav.Link href="appointments">Appointments</Nav.Link>
              <Nav.Link href="doctors">Doctors</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="clients">Clients</Nav.Link>
              <Nav.Link href="tests">Test</Nav.Link>
              {isLoaded && <p>{cart.totalCount}</p>}
              <Nav.Link href="cart">
              <img style={{width:'50px', height:'40px', marginLeft:'20px', cursor:'pointer'}} src="https://cdn-icons-png.flaticon.com/512/58/58271.png" />
              </Nav.Link>
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
        <Route exact path="tests" element={<Test />}></Route>
        {isLoaded && <Route exact path="cart" element={<Card cart={cart} />}></Route>}
      </Routes>
    </div>

    
  );
}

export default App;
