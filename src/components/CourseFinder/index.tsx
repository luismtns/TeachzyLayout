import React from "react";
import styles from "./CourseFinder.module.css";
import "../../styles/utils.css";
import { Row, Col } from "react-grid-system";
// import "../../assets/search.png";
import linesGreen from "../../assets/lines_green.png";
import linesBlue from "../../assets/lines_blue.png";
import linesPurple from "../../assets/lines_purple.png";
import linesPink from "../../assets/lines_pink.png";
import Icon from "@material-ui/core/Icon";
import { Animated } from "react-animated-css";

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

const CourseFinder: React.FC = (props) => {
  return (
    <>
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutDown"
        animationInDelay={1600}
        animationInDuration={800}
        animationOutDuration={800}
        isVisible={true}
      >
        <Row align="center" className="mb-3 mt-5 mt-sm-0 mb-sm-5">
          <Col xs={8} md={7}>
            <input
              type="text"
              placeholder="Search"
              className={`${styles.formControl} ${styles.searchInputIcon}`}
            />
          </Col>
          <Col xs={3} md={3} offset={{ xs: 1, md: 2 }}>
            <span className={styles.NotifyIcon}>
              <Icon className={styles.NotifyIcon__material}>notifications</Icon>
            </span>
          </Col>
        </Row>
      </Animated>
      <div className="mb-5 mb-sm-0">
        {CoursesList &&
          CoursesList.map((el: ICourses, i: number) => {
            return (
              <Animated
                animationIn="fadeInDown"
                animationOut="fadeOutDown"
                animationInDelay={1800}
                animationInDuration={1600}
                animationOutDuration={1600}
                isVisible={true}
              >
                <div
                  className={`${styles.Course} mb-4 ${
                    el?.focus ? styles.Course__focus : ""
                  }`}
                >
                  <Row align="center">
                    <Col xs={12}>
                      <div className={styles.Course__container}>
                        <div
                          className={styles.Course__DayCard}
                          style={{
                            backgroundImage: `url(${el.background})`,
                          }}
                        >
                          <h4 className={styles.Course__Day}>
                            {el.day < 10 ? `0${el.day}` : el.day}
                          </h4>
                          <h5 className={styles.Course__Mouth}>{el.mouth}</h5>
                        </div>
                        <div className={styles.Course__TextBox}>
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
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Animated>
            );
          })}
      </div>
    </>
  );
};
export default CourseFinder;
