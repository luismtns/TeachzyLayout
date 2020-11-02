import React from "react";
import styles from "./Mentors.module.css";
import "../../styles/utils.css";
import { Row, Col } from "react-grid-system";
import { Animated } from "react-animated-css";

interface iMentors {
  name: string;
  role: string;
  photo: string;
}
const MentorsList: iMentors[] = [
  {
    name: "David",
    role: "UX / UI Designer",
    photo:
      "https://oficinadainteligencia.com.br/wp-content/uploads/2019/07/opulent-profile-square-05.jpg",
  },
  {
    name: "Marta",
    role: "Graphic Designer",
    photo:
      "https://oficinadainteligencia.com.br/wp-content/uploads/2019/07/opulent-profile-square-06.jpg",
  },
];
const Mentors: React.FC = (props) => {
  return (
    <>
      <Row>
        {MentorsList &&
          MentorsList.map((el: iMentors, i: number) => {
            return (
              <Col key={i} md={6} className="mt-5">
                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeOutDown"
                  animationInDelay={3200 + i * 200}
                  animationInDuration={800}
                  animationOutDuration={800}
                  isVisible={true}
                >
                  <div className={styles.MentorContainer}>
                    <Row nogutter align="center">
                      <Col xs={4}>
                        <div className={styles.imgFluidRounded__border}>
                          <img
                            src={el.photo}
                            alt={`${el.name} photo`}
                            className={styles.imgFluidRounded}
                          />
                        </div>
                      </Col>
                      <Col>
                        <h4 className={styles.MentorContainer__name}>
                          {el.name}
                        </h4>
                        <p className={styles.MentorContainer__about}>
                          {el.role},
                        </p>
                        <p className={styles.MentorContainer__about}>Mentor</p>
                      </Col>
                    </Row>
                  </div>
                </Animated>
              </Col>
            );
          })}
      </Row>
    </>
  );
};
export default Mentors;
