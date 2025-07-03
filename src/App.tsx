import { useState } from "react";
import Sidetab from "./components/layout/Sidetab";
import LMSWebView from "./components/LMSWebView";
import styles from "./App.module.css";

function App() {
  const [showLMS, setShowLMS] = useState(true);

  if (showLMS) {
    return <LMSWebView />;
  }

  return (
    <div className={styles.appLayout}>
      <Sidetab />
      <main className={styles.mainContent}>
        <h1>메인 콘텐츠 영역</h1>
        <button onClick={() => setShowLMS(true)} className={styles.lmsButton}>
          LMS 열기
        </button>
      </main>
    </div>
  );
}

export default App;
