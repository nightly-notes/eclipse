import { HashRouter  as Router, Routes, Route, Navigate } from "react-router-dom";

import MainApp from "main/MainApp";
import LeaApp from "lea/LeaApp";
import TetraApp from "tetra/TetraApp";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* default */}
        <Route path="/" element={<Navigate to="/main" />} />

        {/* main 목록 */}
        <Route path="/main/*" element={<MainApp />} />

        {/* /lea 관련 하위 경로 */}
        <Route path="/lea/*" element={<LeaApp />} />

        {/* /tetra 관련 하위 경로 */}
        <Route path="/tetra/*" element={<TetraApp />} />
      </Routes>

      <footer>
        ※ 해당 웹페이지는 공식 홈페이지를 참고한 팬페이지로 저작권은 사이퍼즈에게 있습니다.<br /><br />
        &copy; 2011 NEOPLE Inc. All Rights Reserved.
      </footer>
    </Router>
  );
}