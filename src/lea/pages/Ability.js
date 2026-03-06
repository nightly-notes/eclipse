import position from '../../img/character/position/근딜.png';

export default function Ability() {
  return (
    <section className="content">
      <h2 className="mb3">타입 및 능력</h2>
      <p className="txt">이하 작성 중</p>
      {/* <p className="txt">적을 무력화시킬 수 있어 1:1에 강한 캐릭터</p> */}

      <div className="s1_1">
        <h3>캐릭터 타입</h3>
        <div className="st_bar s1_11">
          <p>근거리</p>
          <p className="cnt cnt1"><i style={{left: `37.6%`}}>4</i></p>
          <p>원거리</p>
        </div>

        <div className="st_bar s1_12">
          <p>대인</p>
          <p className="cnt cnt1"><i style={{left: `28.2%`}}>3</i></p>
          <p>공성</p>
        </div>

        {/* 260306 포지션부분 자체 제작 */}
        <div style={{display: "flex", gap: "2px"}}>
          <div className="s1_13" style={{height: "140px"}}>
            <div style={{display: "block", width: "110px"}}>
              <span>근거리 딜러</span>
            </div>
            <div>
              <img src={position}/>
            </div>
          </div>
          <div className="s1_13" style={{height: "140px"}}>
            <div style={{display: "block", width: "110px"}}>
              <span>조작난이도</span><br />
              <span>어려움</span>
            </div>
            <div>
              ★★★
            </div>
          </div>
        </div>
        
        {/* 기존 : 포지션 삭제 버전 */}
        {/* <h3 style={{ marginTop: "23px" }}>조작 난이도</h3>
        <div className="s1_13">★★★ <span>어려움</span></div> */}
      </div>

      <div className="s1_2">
        <h3>능력</h3>
        <div className="s1_21">
          <p>공격<em>119</em></p>
          <p>치명<em>55</em></p>
          <p>체력<em>1886</em></p>
          <p>회피<em>55</em></p>
          <p>방어<em>15.5</em></p>
          <p>이동<em>337</em></p>
        </div>
      </div>

      <div className="s1_3">
        <h3>특수능력</h3>
        <div className="s1_31">
          <p><span><img src="https://resource.cyphers.co.kr/ui/img/character/special_skill/2.png" alt="무력화" /></span><em>무력화★★</em></p>
          <p><span><img src="https://resource.cyphers.co.kr/ui/img/character/special_skill/0.png" alt="기동성" /></span><em>기동성★☆</em></p>
          <p><span></span><em>-</em></p>
        </div>
      </div>

      <div className="s1_4">
        <h2>활용정보</h2>
        <h3>강점</h3>
        <p className="txt">
          적을 무력화시키는 기술을 가지고 있기 때문에 틈을 보인 상대방에게 무력화 기술을 맞출 경우 일정 시간 동안 마크를 할 수 있습니다. <br />
          공격력도 강한 편이라 아군과의 합이 맞을 경우 적을 빠르게 제압하기 좋습니다.
        </p>

        <h3 className="mt23">약점</h3>
        <p className="txt">
          스킬의 최대 효율을 보기 위해서는 적진의 한 가운데로 진입을 하는 것이 좋으나, 적에게 공격 받을 시 버티거나 이탈을 할 수 있는 스킬이 부족합니다. <br />
          따라서 컨트롤과 상황 파악에서 실수가 있다면 교전에서 살아남기 힘듭니다.
        </p>

        <h3 className="mt23">사용할 때</h3>
        <p className="txt">
          대규모 교전 중 '결정 슬라이드'로 교전 지역 한 가운데로 파고든 후 '영구동토'를 사용하면 상황을 한 방에 뒤집을 수 있습니다. <br />
          그러나 무력화 스킬을 사용해 아군을 공략 중인 적 캐릭터를 1대1로 마크하는 조금 더 안정적인 방식도 좋습니다.
        </p>

        <h3 className="mt23">상대할 때</h3>
        <p className="txt">
          루이스의 '드라이아이스'는 점차 스킬이 퍼져나가기 때문에 발동 모션 중 역공을 노릴 수 있습니다. <br />
          한편 공격을 시도하기 위해 '결정 슬라이드'를 사용할 때 깔리는 얼음 길을 확인하면 경로를 예측할 수 있습니다.
        </p>
      </div>
    </section>
  );
}