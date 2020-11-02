import React from "react";
import { ScreenClassProvider, Col, Container, Row } from "react-grid-system";
import "./App.css";
import CourseView from "./components/CourseView/index";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <ScreenClassProvider>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Menu />
          </Col>
          <Col md={4}>
            <CourseView />
          </Col>
          <Col md={5}>
            <Header />
          </Col>
        </Row>
      </Container>
    </ScreenClassProvider>
  );
}

export default App;
