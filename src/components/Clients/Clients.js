import { ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import "./Clients.css";

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3004/clients")
        .then((response) => response.json())
        .then((data) => setClients(data));
    } catch {
      alert("Ошибка при запрсе данных.");
    }
  }, []);

  return (
    <>
      <div className="clients-container">
        {clients.map((client) => (
          <ListGroup key={client.id}>
            <ListGroup.Item style={{ height: "200px" }}>
              <h5>
                {client.date} {client.name}
              </h5>
              {client.comment}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </>
  );
}

export default Clients;
