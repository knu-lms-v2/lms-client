import React from "react";
import Sidetab from "./components/layout/Sidetab";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Sidetab />
      <main className="main-content">
        <h1>메인 콘텐츠 영역</h1>
      </main>
    </div>
  );
}

export default App;
