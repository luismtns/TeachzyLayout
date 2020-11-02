import React from "react";
import styles from "./sidebar.module.css";
import "../../styles/utils.css";
import Icon from "@material-ui/core/Icon";
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
/* eslint-disable */
const Sidebar: React.FC = () => {
  return (
    <>
      <div className={styles.TitleContainer}>
        <h1>Teachzy</h1>
        <hr className={styles.line} />
      </div>
      <ul className={styles.linkMenu}>
        {NavLinks &&
          NavLinks.map((e) => {
            return (
              <li key={e.name} className={e.active ? styles.LinkActive : ""}>
                <Icon>{e.icon}</Icon>
                <a className={styles.sidebarLinks} href="#">
                  {e.name}
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Sidebar;
