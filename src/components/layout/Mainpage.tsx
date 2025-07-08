import Logout from "./Logout";
import UpcomingList from "../common/UpcomingLists";

interface Props {
  userName: string;
  onLogout: () => void;
}

const MainPage: React.FC<Props> = ({ userName, onLogout }) => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>환영합니다, {userName}님!</p>
      <p>로그인에 성공했습니다.</p>
      <Logout onLogout={onLogout} />
      <UpcomingList />
    </div>
  );
};

export default MainPage;
