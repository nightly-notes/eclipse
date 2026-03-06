import { useState } from 'react';
import bgm from '../../img/character/bgm/tetra_bgm.png';

export default function Content() {
  
  const [isOpen, setIsOpen] = useState(false);

return (
  <section className="content">
    {/* ------------------- 콘텐츠 ------------------------- */}
    <div className="s6">
      {/* <div className="s6_1">
        <h2>팬키트</h2>
        <p>
          <span>
            <em>에밀리 팬키트</em>
            <i>공식 일러스트, 공식 원화, SD</i>
          </span>
          <a href="https://cyphers.dn.nexoncdn.co.kr/cyphers/fankit/Cyphers_FanKit_2020_Emily.zip">
            <b>다운로드</b>
          </a>
        </p>
      </div> */}

      <div className="s6_2">
        <h2>BGM</h2>
        {/* <a
          href="https://cyphers.dn.nexoncdn.co.kr/cyphers/bgmbox/character/70.Cyphers_Theme_Emily.zip"
          className="btn_bgm_down"
        >
          <b>다운로드</b>
        </a> */}

        <ul>
          <li>
            <a>play</a>
            <p>
              <span>Theme of Tetra</span>
              <i>작곡: ForA / 테트라 테마곡</i>
            </p>
          </li>
        </ul>

        <h3>곡 정보</h3>
        <p className="txt_box">
          자신을 탐구하고 가치를 증명하는 것이 테트라의 목표입니다. 기하학적인 리듬패턴과 반복적인 리듬은 제오메트릭 스타일의 기본구성입니다. 단순하지 않은 박자와 리듬은 테트라의 능력을 더욱 빛나게 해줍니다.
        </p>

        {/* <h3>작곡가 정보</h3>
        <p className="txt_box">
          <span>ESTi</span>
          대한민국의 작곡가로 1998년 창세기전 외전 서풍의 광시곡의 게임음악으로 데뷔했으며, 그 후 수많은 한국 온라인 게임의 OST를 작곡했다. 특히 테일즈 위버, 마그나카르타, 라그나로크, 아이온, 팡야의 OST 제작으로 유명하며 EZ2DJ, 디제이맥스와 같은 음악게임 타이틀에 다수 참여한 바 있다.
        </p> */}
      </div>

      <div className="s6_3">
        <h2>영상</h2>
        <ul>
          <li>
            <h3>테마곡_테트라</h3>
            <p>
              <img
                src={bgm}
                alt=""
                style={{width:'300px', height:'158px'}}
              />
              <span>
                <a 
                  href="#" 
                  className="vod"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                  }}
                />
                {/* <a href="https://youtu.be/3jrJaBJ69aI?si=U7eXPKkOtgzXrD-M" target='_blank' className="vod">동영상 보기</a> */}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    {/* ------------------- //콘텐츠 ------------------------- */}

    {/* 동영상 레이어 */}
    {isOpen && (
      <div className="ly_vod" style={{ display: 'block' }}>
        <p>
          <a
            href="#close" 
            className="ly_clse"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
          />
          <iframe
            width="1090"
            height="613"
            src="https://www.youtube.com/embed/3jrJaBJ69aI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </p>
      </div>
    )}
    {/* //동영상 레이어 */}
  </section>
);
}