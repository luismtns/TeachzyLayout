import React from "react";
import {
  ScreenClassProvider,
  Col,
  Container,
  Row,
  Visible,
  Hidden,
} from "react-grid-system";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CourseFinder from "./components/CourseFinder";
import CourseView from "./components/CourseView/index";
import Mentors from "./components/Mentors/index";

function App() {
  return (
    <ScreenClassProvider>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Visible xs sm>
              <Header />
            </Visible>
            <Menu />
          </Col>
          <Col md={4}>
            <CourseFinder />
          </Col>
          <Col md={6}>
            <Hidden xs sm>
              <Header />
            </Hidden>
            <Row>
              <Col md={8}>
                <CourseView />
              </Col>
              <Col></Col>
            </Row>
            <Mentors />
          </Col>
        </Row>
      </Container>
    </ScreenClassProvider>
  );
}

export default App;
