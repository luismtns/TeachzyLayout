import React from "react";
import styles from "./Menu.module.css";
import "../../styles/utils.css";
import Icon from "@material-ui/core/Icon";
import { Row, Col } from "react-grid-system";
interface navLinks {
  name: string;
  icon: string;
  active: boolean;
}
const NavLinks: navLinks[] = [
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
        <h1 className={styles.TitleContainer__title}>Teachzy</h1>
        <hr className={styles.line} />
      </div>
      <ul className={styles.linkMenu}>
        {NavLinks &&
          NavLinks.map((e) => {
            return (
              <li key={e.name} className={e.active ? styles.LinkActive : ""}>
                <Icon fontSize="small">{e.icon}</Icon>
                <a className={styles.sidebarLinks}>{e.name}</a>
              </li>
            );
          })}
      </ul>
      <div className={styles.BottomMenu}>
        <a className={styles.BottomMenu__Logout}>
          <Icon fontSize="small" className={styles.BottomMenu__LogoutIcon}>
            login
          </Icon>{" "}
          Log out
        </a>
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
      </div>
    </>
  );
};

export default Menu;
