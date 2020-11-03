import React from "react";
import styles from "./Menu.module.css";
import "../../styles/utils.css";
import Icon from "@material-ui/core/Icon";
import { Row, Col } from "react-grid-system";
import { Animated } from "react-animated-css";
interface navLink {
  name: string;
  icon: string;
  active: boolean;
}
const NavLinksList: navLink[] = [
  {
    name: "Pinned",
    icon: "bookmark_border",
    active: false,
  },
  {
    name: "All courses",
    icon: "content_paste",
    active: true,
  },
  {
    name: "Recources",
    icon: "filter_drama",
    active: false,
  },
  {
    name: "Online Books",
    icon: "book",
    active: false,
  },
  {
    name: "Settings",
    icon: "settings_outline",
    active: false,
  },
];
const Menu: React.FC = () => {
  return (
    <>
      <div className={styles.TitleContainer}>
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOutDown"
          animationInDelay={0}
          animationInDuration={1600}
          animationOutDuration={1600}
          isVisible={true}
        >
          <h1 className={styles.TitleContainer__title}>Teachzy</h1>
          <hr className={`${styles.line} mt-4 mt-sm-5`} />
        </Animated>
      </div>
      <ul className={styles.linkMenu}>
        {NavLinksList &&
          NavLinksList.map((e: navLink, i: number) => {
            return (
              <li key={i} className={e.active ? styles.LinkActive : ""}>
                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeOutDown"
                  animationInDelay={200 * i}
                  animationInDuration={800}
                  animationOutDuration={800}
                  isVisible={true}
                >
                  <Icon className={styles.sidebarLinks__Icon} fontSize="small">
                    {e.icon}
                  </Icon>
                  <span className={styles.sidebarLinks}>{e.name}</span>
                </Animated>
              </li>
            );
          })}
      </ul>
      <div className={styles.BottomMenu}>
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOutDown"
          animationInDelay={1200}
          animationInDuration={800}
          animationOutDuration={800}
          isVisible={true}
        >
          <span className={styles.BottomMenu__Logout}>
            <Icon fontSize="small" className={styles.BottomMenu__LogoutIcon}>
              login
            </Icon>{" "}
            Log out
          </span>
        </Animated>
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOutDown"
          animationInDelay={1400}
          animationInDuration={1200}
          animationOutDuration={1200}
          isVisible={true}
        >
          <div className={styles.Announce}>
            <Row nogutter align="end" justify="around">
              <Col>
                <p className={styles.Announce__title}>
                  Save big -<br /> get monthly
                  <br /> subscription!
                </p>
              </Col>
              <Col className="text-right">
                <Icon className={styles.Announce__icon}>arrow_right_alt</Icon>
              </Col>
            </Row>
          </div>
        </Animated>
      </div>
    </>
  );
};

export default Menu;
