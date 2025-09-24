import lea from '../img/character/eclipse/lea.png';

export default function Header() {
    // <div className="char04">
  return (
    <header>
      <div style={{background: `url(${lea}) no-repeat 50% 0`, backgroundPosition:'calc(50% + 250px) 30px'}}>
        <h1>
          <b>CYP. 속도 능력자</b>
          <span>
            치명의<em>레아</em>
          </span>
        </h1>
        <h2>연관 캐릭터</h2>
        <p className="lst_char">
          <a href="https://cyphers.nexon.com/game/character/info/trixie" target="_blank">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char27.png" alt="트릭시" />
            <em>트릭시</em>
          </a>
          <a href="https://cyphers.nexon.com/game/character/info/sidney" target="_blank">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char56.png" alt="클리브" />
            <em>클리브</em>
          </a>
          <a href="https://cyphers.nexon.com/game/character/info/melvin" target="_blank">
            <img src="https://resource.cyphers.co.kr/ui/img/char/char54.png" alt="멜빈" />
            <em>멜빈</em>
          </a>
        </p>
        
        {/* 메인일러 출처 표기 */}
        <div style={{position: 'relative', display:'block'}}>
          <p style={{position:'absolute', right:'calc(50% - 600px)', top:'320px'}}>ⓒkonghi98</p>
        </div>
        
      </div>
    </header>
  );
}