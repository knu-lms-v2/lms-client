import { Link } from "react-router-dom";
import Logout from "../layout/Logout";
import styles from "./Header.module.css";

interface Props {
  userName: string;
  onLogout: () => void;
}

const Header: React.FC<Props> = ({ userName, onLogout }) => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.title}>
        KNU-LMS-v2
      </Link>
      <div className={styles.userSection}>
        <p className={styles.userName}>{userName}님</p>
        <Logout onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Header;
