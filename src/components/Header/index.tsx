import React from "react";
import styles from "./Header.module.css";
import "../../styles/utils.css";
import { Col, Container, Row } from "react-grid-system";
/* eslint-disable */
interface IHeader {
  name: string;
}
const HeaderLinks: IHeader[] = [
  {
    name: "My courses",
  },
  {
    name: "Purchases",
  },
  {
    name: "Help",
  },
];
const Header: React.FC = (props) => {
  return (
    <>
      <Container>
        <Row align="center">
          <Col xs={12} md={8} className="mb-4">
            <ul className={styles.Header__nav}>
              {HeaderLinks &&
                HeaderLinks.map((e: IHeader, i: number) => {
                  return (
                    <li key={i}>
                      <a className={styles.Header__link}>{e.name}</a>
                    </li>
                  );
                })}
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Row nogutter justify="around" align="center">
              <Col xs={6} md={8} className="text-sm-center">
                <p className={styles.NameField}>John Alby</p>
              </Col>
              <Col xs={4} md={4}>
                <img
                  src="https://oficinadainteligencia.com.br/wp-content/uploads/2019/07/opulent-profile-square-07.jpg"
                  className={styles.imgFluidRounded}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Header;
