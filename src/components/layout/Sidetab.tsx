import React from "react";
import styles from "./Sidetab.module.css";

const Sidetab = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              대시보드
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/courses" className={styles.navLink}>
              강의 목록
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/profile" className={styles.navLink}>
              프로필
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/settings" className={styles.navLink}>
              설정
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidetab;
