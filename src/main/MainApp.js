import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";

import Episode from "./Episode";
import Character from "./Character";

export default function App() {
  // 웹 타이틀 변경
  document.title = "메인 목록";

  return (
    <div id="wrap" className="main">
        {/* 상단 배너 */}
        <Header />

        {/* 에피소드 메뉴 */}
        <Episode />

        <div id="characContent" className="container">

        {/* 캐릭터 목록 */}
        <Character />
        
        </div>
    </div>
  );
}