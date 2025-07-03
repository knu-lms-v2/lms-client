import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/layout/Loginpage";
import MainPage from "./components/layout/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
