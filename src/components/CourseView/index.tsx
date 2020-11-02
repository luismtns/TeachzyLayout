import React from "react";
import styles from "./CourseView.module.css";
import "../../styles/utils.css";
import { Row, Col } from "react-grid-system";
// import "../../assets/search.png";
import linesGreen from "../../assets/lines_green.png";
import linesBlue from "../../assets/lines_blue.png";
import linesPurple from "../../assets/lines_purple.png";
import linesPink from "../../assets/lines_pink.png";
import Icon from "@material-ui/core/Icon";

interface ICourses {
  day: number;
  mouth: string;
  title: string;
  likes: string;
  liked: boolean;
  background: string;
  focus?: boolean;
}
const CoursesList: ICourses[] = [
  {
    day: 12,
    mouth: "Jun",
    title: "Software Testig and Automation",
    likes: "1.4k",
    liked: true,
    background: linesGreen,
  },
  {
    day: 15,
    mouth: "Jul",
    title: "User Experience Design Fundamentals",
    likes: "3k",
    liked: false,
    background: linesBlue,
  },
  {
    day: 23,
    mouth: "Aug",
    title: "Drawing and Painting with Procreate",
    likes: "1k",
    liked: false,
    background: linesPurple,
    focus: true,
  },
  {
    day: 2,
    mouth: "Sep",
    title: "How To Become A Master of Influence",
    likes: "3k",
    liked: false,
    background: linesPink,
  },
];

const CourseView: React.FC = (props) => {
  return (
    <>
      <Row align="center">
        <Col className="my-5" xs={8} md={6}>
          <input
            type="text"
            placeholder="Search"
            className={`${styles.formControl} ${styles.searchInputIcon}`}
          />
        </Col>
        <Col className="my-5" xs={3} md={3} offset={{ xs: 1, md: 3 }}>
          <span className={styles.NotifyIcon}>
            <Icon className={styles.NotifyIcon__material}>notifications</Icon>
          </span>
        </Col>
      </Row>
      {CoursesList &&
        CoursesList.map((el: ICourses, i: number) => {
          return (
            <Row
              className={`${styles.Course} my-3 ${
                el?.focus ? styles.Course__focus : ""
              }`}
              align="center"
            >
              <Col xs={4}>
                <div
                  className={styles.Course__background}
                  style={{
                    backgroundImage: `url(${el.background})`,
                  }}
                >
                  <h4 className={styles.Course__Day}>
                    {el.day < 10 ? `0${el.day}` : el.day}
                  </h4>
                  <h5 className={styles.Course__Mouth}>{el.mouth}</h5>
                </div>
              </Col>
              <Col xs={8}>
                <h3 className={styles.Course__Title}>{el.title}</h3>
                <h5
                  className={`${styles.Course__Like} ${
                    el.liked ? styles.Liked : ""
                  }`}
                >
                  <Icon
                    className={`${styles.Course__LikeIcon} ${
                      el.liked ? styles.Liked : ""
                    }`}
                  >
                    favorite
                  </Icon>
                  {el.likes}
                </h5>
              </Col>
            </Row>
          );
        })}
    </>
  );
};
export default CourseView;
