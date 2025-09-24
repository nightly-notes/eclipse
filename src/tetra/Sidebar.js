import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  // 서브 : 좌측메뉴 열림
	// const [open, setOpen] = useState({});

  return (
    <section className="s_menu">
      <dl>
        <dt className="open">기본정보</dt>
        <dd>
          <NavLink to="/tetra/ability" className={({ isActive }) => (isActive ? "sel" : "")}>
            능력 및 활용
          </NavLink>
          <NavLink to="/tetra/skill" className={({ isActive }) => (isActive ? "sel" : "")}>
            스킬
          </NavLink>
        </dd>
        <dt className="open">스토리</dt>
        <dd>
          <NavLink to="/tetra/eclipse" className={({ isActive }) => (isActive ? "sel" : "")}>
            이클립스
          </NavLink>
          <NavLink to="/tetra/report" className={({ isActive }) => (isActive ? "sel" : "")}>
            ESPER 보고서
          </NavLink>
          <NavLink to="/tetra/document" className={({ isActive }) => (isActive ? "sel" : "")}>
            관련문서
          </NavLink>
        </dd>
        <dt className="open">미디어</dt>
        <dd>
          <NavLink to="/tetra/content" className={({ isActive }) => (isActive ? "sel" : "")}>
            콘텐츠
          </NavLink>
          <NavLink to="/tetra/voice" className={({ isActive }) => (isActive ? "sel" : "")}>
            보이스
          </NavLink>
        </dd>
      </dl>
    </section>
  );
}