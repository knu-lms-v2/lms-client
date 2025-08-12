import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./components/layout/Loginpage";
import MainPage from "./components/layout/Mainpage";
import Header from "./components/common/Header";
import { TaskProvider } from "./contexts/TaskProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 컴포넌트 마운트 시 localStorage에서 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");

    if (token && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }

    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  // 로딩 중일 때는 아무것도 렌더링하지 않음
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage
                onLoginSuccess={(name) => {
                  setIsLoggedIn(true);
                  setUserName(name);
                }}
              />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <TaskProvider>
                <Header userName={userName} onLogout={handleLogout} />
                <MainPage />
              </TaskProvider>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
