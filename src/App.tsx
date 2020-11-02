import React from "react";
import { ScreenClassProvider, Col, Container, Row } from "react-grid-system";
import "./App.css";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <ScreenClassProvider>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={4}></Col>
          <Col md={5}>
            <Header />
          </Col>
        </Row>
      </Container>
    </ScreenClassProvider>
  );
}

export default App;
