import React from "react";
import styles from "./CourseView.module.css";
import "../../styles/utils.css";
import { Row, Col } from "react-grid-system";
import Icon from "@material-ui/core/Icon";
import { Animated } from "react-animated-css";

const CourseView: React.FC = (props) => {
  return (
    <>
      <Row>
        <Col>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOutDown"
            animationInDelay={2000}
            animationInDuration={1600}
            animationOutDuration={1600}
            isVisible={true}
          >
            <div className={styles.CourseBox}>
              <h2 className={styles.CourseBox__Day}>15</h2>
              <h4 className={styles.CourseBox__Month}>Jun</h4>
            </div>
          </Animated>
        </Col>
      </Row>
      <Row>
        <Col>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeOutDown"
            animationInDelay={2200}
            animationInDuration={800}
            animationOutDuration={800}
            isVisible={true}
          >
            <h2 className={styles.Course__Title}>
              User Experience Design Fundamentals
            </h2>
            <p>
              Gain the basic skills in User Experience. Study practice and
              theory. Find out techniques and tools used to design
              efficiently... <span className={styles.Course__Link}>more</span>
            </p>
          </Animated>
        </Col>
      </Row>
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutDown"
        animationInDelay={2400}
        animationInDuration={800}
        animationOutDuration={800}
        isVisible={true}
      >
        <Row align="center">
          <Col xs={6}>
            <button className={styles.Btn__Black}>Buy course</button>
          </Col>
          <Col xs={6}>
            <span className={styles.Link__review}>
              <Icon className={styles.Link__reviewIcon}>comment_bank</Icon>{" "}
              Reviews
            </span>
          </Col>
        </Row>
      </Animated>
    </>
  );
};
export default CourseView;
