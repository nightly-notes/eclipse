import tetra from '../img/character/eclipse/tetra.png';
import white from '../img/character/etc/white.png';

export default function Header() {
    // <div className="char04">
  return (
    <header>
      <div style={{background: `url(${tetra}) no-repeat 50% 0`, backgroundPosition:'calc(50% + 250px) -20px', backgroundSize:'1500px'}}>
        {/* tetra : 이미지 크기 문제로 backgroundSize 추가 */}
        <h1>
          <b>CYP. 입자 능력자</b>
          <span> 
            직관의<em>테트라</em>
          </span>
        </h1>
        <h2>연관 캐릭터</h2>
        <p className="lst_char">
          <a href="https://cyphers.nexon.com/game/character/info/ludwig" target="_blank">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char53.png" alt="루드빅" />
            <em>루드빅</em>
          </a>
          <a href="https://cyphers.nexon.com/game/character/info/lysander" target="_blank">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char52.png" alt="라이샌더" />
            <em>라이샌더</em>
          </a>
          <a>
            <img src={white} alt="화이트 클라프" />
            <em>화이트 클라프</em>
          </a>
        </p>
        
        {/* 메인일러 출처 표기 */}
        <div style={{position: 'relative', display:'block'}}>
          <p style={{position:'absolute', right:'calc(50% - 600px)', top:'320px'}}>ⓒ카뮤</p>
        </div>
        
      </div>
    </header>
  );
}