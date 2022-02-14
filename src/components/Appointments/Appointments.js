import { Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import "./Appoint.css";

function Appointments() {
  const [appoints, setAppoint] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3004/appointments")
        .then((response) => response.json())
        .then((data) => setAppoint(data));
    } catch {
      alert("Ошибка при запрсе данных.");
    }
  }, []);

  return (
    <>
      <div className="appoint-cont">
        {appoints.map((appoint) => (
          <Card key={appoint.id} style={{ width: "30rem" }}>
            <img className="round" alt="Img" src={appoint.img} />
            <Card.Body style={{ marginLeft: "20px" }}>
              <Card.Title style={{ marginTop: "20px", height: "40px" }}>
                {appoint.title}
              </Card.Title>
              <Card.Text style={{ height: "90px" }}>
                {appoint.comment}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button
                style={{
                  marginLeft: "60px",
                  width: "150px",
                  fontSize: "1.3rem",
                }}
                variant="primary"
              >
                Sign up
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Appointments;
