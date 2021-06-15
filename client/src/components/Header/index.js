import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>(React) Google Books Search</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              Search for and Save Books of Interest
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
