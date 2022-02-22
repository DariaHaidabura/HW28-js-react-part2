import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import "./Doctors.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/doctors")
        .then((response) => response.json())
        .then((data) => setDoctors(data));
    } catch {
      alert("Ошибка при запрсе данных.");
    }
  }, []);

  return (
    <>
      <div className="doctor-cont">
        {doctors.map((doc) => (
          <Card key={doc.id} style={{ width: "30rem" }}>
            <img alt="Img" src={doc.img} />
            <Card.Body style={{ marginLeft: "20px" }}>
              <Card.Title style={{ marginTop: "20px", height: "40px" }}>
                {doc.name}
              </Card.Title>
              <Card.Text style={{ height: "70px" }}>{doc.title}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem style={{ marginLeft: "20px" }}>
                Experience: {doc.experience}
              </ListGroupItem>
            </ListGroup>

            <Card.Body>
              <Button style={{ marginLeft: "60px" }} variant="primary">
                Make an appointment
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Doctors;
