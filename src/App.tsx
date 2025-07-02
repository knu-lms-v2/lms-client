import { useState } from "react";
import Sidetab from "./components/layout/Sidetab";
import LMSWebView from "./components/LMSWebView";
import "./App.css";

function App() {
  const [showLMS, setShowLMS] = useState(true);

  if (showLMS) {
    return <LMSWebView />;
  }

  return (
    <div className="app-layout">
      <Sidetab />
      <main className="main-content">
        <h1>메인 콘텐츠 영역</h1>
        <button
          onClick={() => setShowLMS(true)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          LMS 열기
        </button>
      </main>
    </div>
  );
}

export default App;
