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
import CourseInfo from "./components/CourseInfo/index";

function App() {
  return (
    <ScreenClassProvider>
      <Container className="BodyPadding" fluid>
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
              <Col md={7} offset={{ md: 1 }}>
                <CourseView />
              </Col>
              <Col>
                <CourseInfo />
              </Col>
            </Row>
            <Mentors />
          </Col>
        </Row>
      </Container>
    </ScreenClassProvider>
  );
}

export default App;
