interface Props {
  userName: string;
}

const MainPage: React.FC<Props> = ({ userName }) => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>환영합니다, {userName}님!</p>
      <p>로그인에 성공했습니다.</p>
    </div>
  );
};

export default MainPage;
