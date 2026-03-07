import { Link } from "react-router-dom";

import lea from '../img/main/icon_lea.png';
import lea_on from '../img/main/icon_lea_on.png';

export default function Character() {
    const character = [
        { id: "lea", name: "레아" },
        { id: "tetra", name: "테트라" },
    ];

    return (
        <section className="lst_char">
            <a href="https://cyphers.nexon.com/game/character/info/trixie"  target="_blank" class="trixie">
                <img 
                    src="https://resource.cyphers.co.kr/ui/img/char/char27.png"
                    onMouseEnter={(e) => (e.target.src = "https://resource.cyphers.co.kr/ui/img/char/char27_on.png")}
                    onMouseLeave={(e) => (e.target.src = "https://resource.cyphers.co.kr/ui/img/char/char27.png")}
                />
                <i></i>
                <em>트릭시</em>
            </a>
            <a href="https://cyphers.nexon.com/game/character/info/clive"  target="_blank" class="clive">
                <img 
                    src="https://resource.cyphers.co.kr/ui/img/char/char56.png"
                    onMouseEnter={(e) => (e.target.src = "https://resource.cyphers.co.kr/ui/img/char/char56_on.png")}
                    onMouseLeave={(e) => (e.target.src = "https://resource.cyphers.co.kr/ui/img/char/char56.png")}
                />
                <i></i>
                <em>클리브</em>
            </a>
            <Link to="/lea/ability" class="trixie">
                <img
                    src={lea}
                    onMouseEnter={(e) => (e.target.src = lea_on)}
                    onMouseLeave={(e) => (e.target.src = lea)}
                />
                <i></i>
                <em>레아</em>
            </Link>
        </section>
    );
}