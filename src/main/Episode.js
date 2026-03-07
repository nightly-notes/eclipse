import { useState } from "react";
import Ep1 from "./Episode/1";
import Ep2 from "./Episode/2";
import Ep3 from "./Episode/3";
import Ep4 from "./Episode/4";
import Ep5 from "./Episode/5";
import Ep6 from "./Episode/6";

export default function Episode() {
    const aStyle = {
        // float: "none",
        width: "98%"
    };
    const spanStyle = {
        float: "right",
    };

    const [SelectedEpisode, setSelectedEpisode] = useState(() => Ep1);
    const epiList = [
        { id: Ep1, title: "릭의 이야기", needCyp: "릭, 벨져"},
        { id: Ep2, title: "포의 이야기", needCyp: "벨져, 시바"},
        { id: Ep3, title: "위험한 시작", needCyp: "이글"},
        { id: Ep4, title: "저장매체 실험", needCyp: "나이오비, 헬레나"},
        { id: Ep5, title: "부활의 길", needCyp: "드렉슬러"},
        { id: Ep6, title: "어떤 재앙", needCyp: "나이오비, 레이튼"},
        { id: 0, title: "숲속에서", needCyp: "에바"},
        { id: 0, title: "이제 돌아갈 때", needCyp: "자네트"},
        { id: 0, title: "잿더미", needCyp: "시드니"},
        { id: 0, title: "지켜야 할 것", needCyp: "레오노르"},
        { id: 0, title: "LAST LICKS", needCyp: "피터, 레베카, 티모시"},
        { id: 0, title: "감정의 울림", needCyp: "리첼"},
        { id: 0, title: "문 안쪽의 사람들", needCyp: "시드니, 디아나"},
        { id: 0, title: "카틀레야는 다시 피고", needCyp: "윌라드, 카를로스"},
        { id: 0, title: "누군가의 두 얼굴", needCyp: "카를로스, 윌라드"},
        { id: 0, title: "나의 신도를 위해", needCyp: "시드니"},
        { id: 0, title: "그림자 속 회담, 1931", needCyp: "시바"},
        { id: 0, title: "그림자 속 회담, 1934", needCyp: "시바"},
        { id: 0, title: "선택한 숙명", needCyp: "웨슬리, 카인, 캐럴"},
        { id: 0, title: "선택한 숙명2", needCyp: "카인, 레나"},
        { id: 0, title: "화이트 엘리펀트", needCyp: "아이작, 헬레나"},
        { id: 0, title: "유리 궁전", needCyp: "시드니, 엘프리데, 린, 디아나"},
        { id: 0, title: "병상", needCyp: "엘리, 피터, 이글, 토마스"},
        { id: 0, title: "검은 환각", needCyp: "그레타, 바스티안"},
        { id: 0, title: "벨져의 이야기", needCyp: "레오노르, 제레온, 벨져"},
        { id: 0, title: "조각난 사탕", needCyp: "론"},
        { id: 0, title: "뉴욕으로 가는 길", needCyp: "론"},
        { id: 0, title: "라 하이나", needCyp: "윌라드, 앨리셔"},
        { id: 0, title: "모든 거만한 것들의 왕1", needCyp: "론, 케니스"},
        { id: 0, title: "모든 거만한 것들의 왕1", needCyp: "재뉴어리, 론, 케니스"},
        { id: 0, title: "인내", needCyp: "제키엘, 바스티안, 니콜라스"},
        { id: 0, title: "색안경", needCyp: "케니스"},
        { id: 0, title: "배치전환", needCyp: "케니스, 키아라"},
        { id: 0, title: "라스트 맨, 다운", needCyp: "까미유, 탄야, 베로니카"},
        { id: 0, title: "각자 한 마디씩 하자면", needCyp: "키아라, 케니스, 주세페"},
        { id: 0, title: "나날", needCyp: "이글, 벨져, 다이무스"},
        { id: 0, title: "검은 피", needCyp: "다이무스, 루카"},
        { id: 0, title: "천재일우", needCyp: "앤지헌트, 니콜라스, 제키엘"},
        { id: 0, title: "돈데 보이(Donde Voy)", needCyp: "미아, 미쉘"},
        { id: 0, title: "팍스 아메리카나", needCyp: "재뉴어리, 웨슬리, 제이"},
        { id: 0, title: "폐차", needCyp: "주세페, 키아라, 케니스"},
        { id: 0, title: "방황하는 나그네", needCyp: "윌라드, 앨리셔, 카로슈"},
        { id: 0, title: "탈피1", needCyp: "루드빅"},
        { id: 0, title: "탈피2", needCyp: "탄야, 헬레나, 루드빅"},
        { id: 0, title: "황금 사과", needCyp: "헬레나"},
        { id: 0, title: "뉴 스카우터", needCyp: "브루스, 마틴"},
        { id: 0, title: "열한 번째 인간", needCyp: "니콜라스, 마틴, 엔데카"},
        { id: 0, title: "넥스트 페이즈", needCyp: "앤지헌트"},
        { id: 0, title: "너와 나", needCyp: "레나"},
    ];

    return (
    <section className="menu" style={{height: "auto", overflow: "auto", paddingBottom: "116px"}}>
        <h3>검색조건</h3>

        <div className="sch_lst">

            <dl className="tp6" style={{marginRight: "30px", width: "300px"}}>
                <dt style={{width: "100%"}}>에피소드</dt>
                <dd>
                    {epiList.map((item, i) => (
                        <a 
                            href="#" 
                            style={aStyle} 
                            key={i}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedEpisode(() => item.id);
                            }}
                        >
                            {item.title}
                            <span style={spanStyle}>({item.needCyp})</span>
                        </a>
                    ))}
                <a href="#" style={aStyle}>
                    릭의 이야기 
                    <span style={spanStyle}>(릭, 벨져)</span>
                </a>
                </dd>
            </dl>

        </div>

        {/* 에피소드 출력 파트 */}
        <div style={{border: "1px solid #333", float: "left", width: "950px", padding: "50px"}}>
            <SelectedEpisode />
        </div>
    </section>
    );
}