import React, { useState } from 'react';

export default function SkillBox({ skill }) {
  //상태 탭
  const tabs = Object.keys(skill.tabs);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  // 더보기
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="s2 skill_box">
      {/* 스킬 기본 정보 */}
      <h2 className="mb2">{skill.name}</h2>
      <p className="txt">{skill.description}</p>

      <div className="s2_1">
        <h3>조작키</h3>
        <div>
          <p className={`key ${skill.class}`}>{skill.key}</p>
        </div>
      </div>

      <div className="s2_2">
        <h3>기본 정보</h3>
        <div className="tbl">
            <p><b>쿨타임</b> <i>{skill.cooldown}초</i></p>
            <p><b>공격범위</b> <i>{skill.range}</i></p>
            <p><b>공격판정</b> <i>{skill.type}</i></p>
            <p><b>다운 유발</b> <i>{skill.knockdown ? "ON" : "OFF"}</i></p>
        </div>
      </div>

      <div className="s2_3">
        <h3>스킬 영상</h3>
        <div className="video">
            {/* <video
            width="605"
            height="340"
            controls
            loop
            poster={skill.video.poster}
            >
            <source src={skill.video.src} type="video/mp4" />
            </video> */}
            <img src={skill.img}></img>
        </div>
      </div>

      {/* -------------------------- 더보기 미사용 -------------------------- */}
      {/* 열리는 영억 */}
      {false && isOpen && ( 
      <div className="s2_4 m_info" style={{display:"block"}}>
        <h3>상세 설명</h3>
        <p className="txt">{skill.detail}</p>

        {/* 탭 영역 */}
        <div className="tab">
          {tabs.map(tab => (
            <a
              key={tab}
              className={tab === activeTab ? 'on' : ''}
              onClick={() => setActiveTab(tab)}
              style={{width:'243px'}}
            >
              {tab}
            </a>
          ))}
        </div>

        <div className="tab_c">
          {/* 슈퍼아머 */}
          {activeTab === tabs[0] && (
            <div className="tbl show">
              {skill.tabs[activeTab].map(({ label, value }, i) => (
                <p key={i}><b>{label}</b> <i>{value}</i></p>
              ))}
            </div>
          )}
          
          {/* 무적 */}
          {activeTab === tabs[1] && (
            <div className="tbl show">
              {skill.tabs[activeTab].map(({ label, value }, i) => (
                <p key={i}><b>{label}</b> <i>{value}</i></p>
              ))}
            </div>
          )}

          {/* 잡기 */}
          {activeTab === tabs[2] && (
            <div className="tbl mt4 show">
                <h4>잡기 판정</h4>
                {skill.tabs[activeTab]["판정"].map(({ label, value }, i) => (
                  <p key={i}><b>{label}</b> <i>{value}</i></p>
                ))}

                <h4>잡기 면역</h4>
                {skill.tabs[activeTab]["면역"].map(({ label, value }, i) => (
                  <p key={i}><b>{label}</b> <i>{value}</i></p>
                ))}

                <p className="txt">
                    -  잡기 판정 레벨이 적이 사용 중인 스킬의 잡기 면역 레벨보다 높을 경우 잡을 수 있습니다.<br/>
                    -  잡기 면역 레벨이 적이 사용한 스킬의 잡기 판정 레벨과 같거나 높을 경우 잡히지 않습니다.
                </p>
            </div>
          )}

          {/* 대미지 */}
          {activeTab === tabs[3] && (
            <div class="tbl mt4 show">
                <h4>계수</h4>
                {skill.tabs[activeTab]["계수"].map(({ label, value }, i) => (
                  <p key={i}><b>{label}</b> <i>{value}</i></p>
                ))}

                <h4>대미지 공식</h4>
                {skill.tabs[activeTab]["공식"].map(({ label, value }, i) => (
                  <p key={i}><b>{label}</b> <i>{value}</i></p>
                ))}
            </div>
          )}

        </div>
      </div>
      )}

      {/* 더보기 버튼 */}
      <p className={`btn_m_info ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <a className="">
          더보기
        </a>
      </p>
    </section>
  );
}