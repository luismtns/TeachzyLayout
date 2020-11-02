import React from "react";
import styles from "./CourseInfo.module.css";
import "../../styles/utils.css";
import { Row, Col } from "react-grid-system";
import Icon from "@material-ui/core/Icon";

interface CourseInfo {
  supertitle: string;
  title: string;
  subtitle?: string;
  text: string;
}
const CourseInfoList: CourseInfo[] = [
  {
    supertitle: "30",
    title: "02",
    subtitle: "pm",
    text: "Starting in",
  },
  {
    supertitle: "hrs.",
    title: "68",
    text: "Duration",
  },
  {
    supertitle: "ppl.",
    title: "16",
    text: "Your group",
  },
  {
    supertitle: "cases",
    title: "10",
    text: "on Behance",
  },
];
const CourseInfo: React.FC = (props) => {
  return (
    <>
      <Row>
        {CourseInfoList &&
          CourseInfoList.map((el: CourseInfo, i: number) => {
            return (
              <Col key={i} xs={12}>
                <div
                  className={styles.CourseInfo}
                  style={{
                    opacity: `
                  ${10 / (i * 10)}`,
                  }}
                >
                  <div>
                    <h1 className={styles.CourseInfo__Title}>
                      {el.title}
                      {el?.supertitle ? (
                        <span className={styles.CourseInfo__SuperTitle}>
                          {el?.supertitle}
                        </span>
                      ) : (
                        ""
                      )}
                      <span className={styles.CourseInfo__SubTitle}>
                        {el.subtitle}
                      </span>
                    </h1>
                    <p className={styles.CourseInfo__Text}>{el.text}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        <Col xs={12} className="text-center">
          <Icon fontSize="large" className={styles.CourseInfo__Icon}>
            arrow_right_alt
          </Icon>
        </Col>
      </Row>
    </>
  );
};
export default CourseInfo;
