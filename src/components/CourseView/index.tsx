import React from "react";
import styles from "./CourseView.module.css";
import "../../styles/utils.css";
import { Row, Col } from "react-grid-system";
// import "../../assets/search.png";
import linesBlue from "../../assets/lines_blue.png";
import Icon from "@material-ui/core/Icon";

const CourseView: React.FC = (props) => {
  return (
    <>
      <Row>
        <Col>
          <div className={styles.CourseBox}>
            <h2 className={styles.CourseBox__Day}>15</h2>
            <h4 className={styles.CourseBox__Month}>Jun</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className={styles.Course__Title}>
            User Experience Design Fundamentals
          </h2>
          <p>
            Gain the basic skills in User Experience. Study practice and theory.
            Find out techniques and tools used to design efficiently...{" "}
            <a>more</a>
          </p>
        </Col>
      </Row>
      <Row align="center">
        <Col xs={6}>
          <button className={styles.Btn__Black}>Buy course</button>
        </Col>
        <Col xs={6}>
          <a className={styles.Link__review}>
            <Icon className={styles.Link__reviewIcon}>comment_bank</Icon>{" "}
            Reviews
          </a>
        </Col>
      </Row>
    </>
  );
};
export default CourseView;
