import position from '../../img/character/position/탱커.png';

export default function Ability() {
  return (
    <section className="content">
      <h2 className="mb3">타입 및 능력</h2>
      <p className="txt">적의 주변 입자를 굳혀 공격을 방어하거나 움직임을 제한하는 탱커</p>

      <div className="s1_1">
        <h3>캐릭터 타입</h3>
        <div className="st_bar s1_11">
          <p>근거리</p>
          <p className="cnt cnt1"><i style={{left: `37.6%`}}>3</i></p>
          <p>원거리</p>
        </div>

        <div className="st_bar s1_12">
          <p>대인</p>
          <p className="cnt cnt2"><i style={{left: `28.2%`}}>2</i></p>
          <p>공성</p>
        </div>
        
        {/* 260306 포지션부분 자체 제작 */}
        <div style={{display: "flex", gap: "2px"}}>
          <div className="s1_13" style={{height: "140px"}}>
            <div style={{display: "block", width: "100px"}}>
              <p>탱커</p>
            </div>
            <div>
              <img src={position}/>
            </div>
          </div>
          <div className="s1_13" style={{height: "140px"}}>
            <div style={{display: "block", width: "100px"}}>
              <p>조작난이도</p>
              <p>보통</p>
            </div>
            <div>
              ★★
            </div>
          </div>
        </div>
        
        {/* 기존 : 포지션 삭제 버전 */}
        {/* <h3 style={{ marginTop: "23px" }}>조작 난이도</h3>
        <div className="s1_13">★★ <span>보통</span></div> */}
      </div>

      <div className="s1_2">
        <h3>능력</h3>
        <div className="s1_21">
          <p>공격<em>125</em></p>
          <p>치명<em>50</em></p>
          <p>체력<em>1880</em></p>
          <p>회피<em>57</em></p>
          <p>방어<em>18</em></p>
          <p>이동<em>275</em></p>
        </div>
      </div>

      <div className="s1_3">
        <h3>특수능력</h3>
        <div className="s1_31">
          <p><span><img src="https://resource.cyphers.co.kr/ui/img/character/special_skill/2.png" style={{margin:'19px'}} alt="무력화" /></span><em>무력화★☆</em></p>
          <p><span><img src="https://resource.cyphers.co.kr/ui/img/character/special_skill/1.png" style={{margin:'19px'}} alt="방어" /></span><em>방어★</em></p>
          <p><span></span><em>-</em></p>
        </div>
      </div>

      <div className="s1_4">
        <h2>활용정보</h2>
        <h3>강점</h3>
        <p className="txt">
          상대를 가둬두어 넓은 범위의 능력을 보여주고 적의 행동을 제한하거나 방해 할 수 있습니다.
        </p>

        <h3 className="mt23">약점</h3>
        <p className="txt">
          다운된 상황에서 사용할 수 있는 스킬이 없어 연계 공격에 취약합니다.<br />
          역전시킬 수 있을 만큼 좋은 궁극기와 스킬을 보유하고 있지만 안전한 상황을 이끌기 위해서는 아군지원이 요구됩니다.
        </p>

        <h3 className="mt23">사용할 때</h3>
        <p className="txt">
          적을 꼼짝 못 하게 만들 수 있을 정도로 경직 스킬이 다수이기 때문에 위협을 줄 수 있습니다.<br />
          1st 궁극기 '엔트로피 테트락티스' 스킬로 한번의 다수의 적을 포위해 주도권을 쟁취하여 대응 및 홀딩으로 아군에게 지원해 불리한 상황을 역전시킬 수 있습니다.<br />
          또한 2sd 궁극기 '인피니트 알제브라' 스킬로 한번에 다수의 적을 포위해 킬을 노려볼 수도 있습니다.
        </p>

        <h3 className="mt23">상대할 때</h3>
        <p className="txt">
          가까이 접근 시 '키스 샷'으로 반격이 올 수 있으므로 거리에 유의해야 합니다.<br />
          '키스 샷'으로 근접된 아군을 밀어내거나 튕겨지는 아군에게 부딪히게 되면 넉백이 되므로 이를 염두하는 것이 좋습니다.<br />
          원거리 기술로 테트라를 다운시키면 이후 전투를 유리하게 풀어갈 수 있습니다.
        </p>
      </div>
    </section>
  );
}