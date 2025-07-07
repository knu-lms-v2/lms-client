import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/layout/Loginpage";
import MainPage from "./components/layout/Mainpage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

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
              <MainPage userName={userName} onLogout={handleLogout} />
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
