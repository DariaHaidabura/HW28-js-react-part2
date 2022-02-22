import { Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/events")
        .then((response) => response.json())
        .then((data) => setEvents(data));
    } catch {
      alert("Ошибка при запрсе данных.");
    }
  }, []);

  return (
    <>
      <div className="events-container">
        {events.map((event) => (
          <Card key={event.id}>
            <Card.Header as="h5">{event.title} </Card.Header>
            <Card.Body>
              <Card.Title>{event.date}</Card.Title>
              <Card.Text>{event.comment}</Card.Text>
              <Button variant="primary">More information</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Events;
