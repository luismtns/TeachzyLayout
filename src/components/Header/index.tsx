import React from "react";
import { Col, Container, Row } from "react-grid-system";
/* eslint-disable */
const Header: React.FC = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={9} md={8}>
            <ul>
              <li>
                <a>My Course</a>
              </li>
              <li>
                <a>My Course</a>
              </li>
              <li>
                <a>My Course</a>
              </li>
            </ul>
          </Col>
          <Col xs={3} md={4}>
            <p>Photo Here</p>
          </Col>
        </Row>
      </Container>
      <p>Links Here</p>
    </>
  );
};
export default Header;
