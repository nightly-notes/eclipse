import { useState } from "react";

export default function Voice() {
    const [activeTab, setActiveTab] = useState("기본");

    const tabs = ["프리미엄", "기본", "스킬", "퀵보이스", "메시지"];

    const content = {
    "프리미엄": [
        { title: "메인대사", text: "추론 따윈 필요 없어. 직접 파악하게 만들어줄 테니까." },
        { title: "^^ (웃음)", text: "(짧은 웃음)" },
        { title: "ㅠㅠ (울음)", text: "(짧은 울음)" },
        { title: "인사", text: "꼭 만나뵙고 싶었어요!" },
        { title: "궁금", text: "어떤 가설인거죠?" },
        { title: "감사_1", text: "누구와는 다르게 친절하시군요." },
        { title: "감사_2", text: "어떻게 연락 드리면 될까요?" },
        { title: "춤", text: "가, 같이 춤 춰줘요." },
        { title: "슬픔_1", text: "잠시만요. 잠깐이면 돼요···" },
        { title: "슬픔_2", text: "제가 싫은건 아니죠···?" },
        { title: "기쁨", text: "기뻐요. 오늘 일을 다이어리에 적어놔야겠어요!" },
        { title: "도발_1", text: "이거라면 자신있지." },
        { title: "도발_2", text: "언제까지 하실건가요?" },
        { title: "첫 킬", text: "Good!" },
        { title: "두 번째 킬", text: "Cool!" },
        { title: "세 번째 킬", text: "Nice!!" },
        { title: "네 번째 킬", text: "Great!!" },
        { title: "다섯 번째 킬", text: "Wonderful!!" },
        { title: "여섯 번 이상 킬_1", text: "Fantastic!!" },
        { title: "여섯 번 이상 킬_2", text: "Excellent!!!" },
        { title: "여섯 번 이상 킬_3", text: "Amazing!!!" },
        { title: "짧은 시간 내에 2킬", text: "더블킬!! (Double Kill)" },
        { title: "짧은 시간 내에 3킬", text: "트리플킬!! (Triple Kill)" },
        { title: "짧은 시간 내에 4킬", text: "쿼드로킬!! (Quadru Kill)" },
        { title: "짧은 시간 내에 5킬", text: "제노사이드!! (Genocide)" },
    ],
    "기본": [
        { title: "등장하면서_1", text: "이번에도 저를 평가중인건가요?" },
        { title: "등장하면서_2", text: "저번과는 다를거예요." },
        { title: "등장하면서_3", text: "마법같은 공간을 보여줄게요." },
        { title: "위기 상황에서", text: "할 수 있어, 버틸 수 있어···" },
        { title: "적을 죽였을 때-1", text: "당신의 가치도 낮았구나." },
        { title: "적을 죽였을 때-2", text: "이렇게 하면 되는거야." },
        { title: "죽었을 때-1", text: "다음은··· 없어···" },
        { title: "죽었을 때-2", text: "엄마, 아빠··· 결국 말하지 못했어···" },
        { title: "쉽게 이겼을 때-1", text: "내 평가가 올라갔을까?" },
        { title: "쉽게 이겼을 때-2", text: "자신 있었어요. 말 했었죠?" },
        { title: "어렵게 이겼을 때-1", text: "저도 잘 한건가요···?" },
        { title: "어렵게 이겼을 때-2", text: "흐, 흠··· 당연한 결과죠." },
        { title: "쉽게 졌을 때-1", text: "이렇게 하면 안 됐는데···" },
        { title: "쉽게 졌을 때-2", text: "이제 저는 어떻게 되는거죠?" },
        { title: "어렵게 졌을 때-1", text: "제가 발목을 잡은거죠···" },
        { title: "어렵게 졌을 때-2", text: "또 다시··· 저 때문인가요?" },
        { title: "도움 요청", text: "버티고 있을게요. 이쪽이요!" },
        { title: "사과", text: "시정하겠습니다···" },
        { title: "콜라 마실 때-1", text: "커피가 더 좋은데요." },
        { title: "콜라 마실 때-2", text: "콜록, 콜록···" },
        { title: "아이템을 구입하면서_1", text: "어울리나요?" },
        { title: "아이템을 구입하면서_2", text: "보편적인가요?" },
        { title: "감탄", text: "그렇게 해도 되는군요!" },
        { title: "고마움", text: "다음번엔 제가 도와드릴게요." },
        { title: "APC를 불러낼 때", text: "저보다 더 잘 하시잖아요." },
    ],
    "스킬": [
        { title: "존재 비율_1", text: "거기까지!" },
        { title: "존재 비율_2", text: "어딜!" },
        { title: "마멸_1", text: "견제, 터져라!" },
        { title: "마멸_2", text: "방어, 폭발!" },
        { title: "예각_1", text: "날카롭게!" },
        { title: "예각_2", text: "갈라져라!" },
        { title: "솔리드_1", text: "하나는··· 다를걸?" },
        { title: "솔리드_2", text: "자, 찾아보세요!" },
        { title: "솔리드_루드빅에게", text: "잡았네요? 엔딩!" },
        { title: "키스샷_1", text: "역시···" },
        { title: "키스샷_2", text: "예상했어요." },
        { title: "엔트로피 테트락티스_1", text: "압축하고, 갈려라!" },
        { title: "엔트로피 테트락티스_2", text: "가능한 경우의 수를 세어봐!" },
        { title: "(SU)인피니티 알제브라_1", text: "한계 없는, 무한의 숫자를!" },
        { title: "(SU)인피니티 알제브라_2", text: "집중하세요, 카운팅 시작!" },
    ],
    "퀵보이스": [
        { title: "공격", text: "제가 앞장 서면 따라올 수 있겠어요?" },
        { title: "후퇴", text: "탐구 할 때가 아니예요. 뒤로 빠져요!" },
        { title: "트루퍼 대기", text: "미승인이예요. 아직 관찰이 필요해요!" },
        { title: "트루퍼 공격", text: "승인났어요. 빠르게 파괴하죠!" },
        { title: "기지 방어", text: "돌아와요. 우리가 기지를 지켜야해요!" },
        { title: "궁극기 사용 가능_1", text: "영역 전개 대기 완료!" },
        { title: "궁극기 사용 가능_2", text: "내 공간에서 도망쳐봐." },
        { title: "궁극기2 사용 가능_1", text: "숫자를 읽을 수 없다면, 보여줄게요." },
        { title: "궁극기2 사용 가능_2", text: "이게 나의 가치라면. 최대로 끌어 모으겠어." },
    ],
    "메시지": [
        { title: "문자 수신음", text: "문자가 왔는데요. 회신할까요?" },
        { title: "카톡 수신음", text: "카톡이 왔는데요. 회신할까요?" },
        { title: "모닝콜", text: "아직 자고있어요? ···기다린건 아니지만요! 함께 탐구하고 싶은 주제들이 산더미지만요!" },
        { title: "굿나잇", text: "잘 자요. 우리··· 내일은 다른 주제로 토론해요..." },
    ],
    };

return (
    <section className="content">
    <div className="s7">
        {/* 성우 정보 */}
        <div className="s7_1">
        <h2>성우 정보</h2>
        <p className="txt_box">
            <span>박지윤</span>
            KBS 성우극회 31기
            <br />
            라푼젤 - 라푼젤 / 겨울왕국 - 안나 / 더 퍼스트 슬램덩크 - 채소연 / 피니와 퍼브 - 캔디스 플린 / 반짝반짝 캐치! 티니핑 - 조아핑 / 마이 리틀 포니 - 트와일라잇 스파클 / 명일방주 - 프로방스 외 / 오버워치 - 알레한드라 / 에픽세븐 - 레테 / 라이온 킹 - 날라 / 유미의 세포들 더 무비 - 감성세포 / 너의 이름은 - 나토리 사야카 / 날씨의 아이 - 사사키, 나토리 사야카 / 프리큐어 시리즈 - 큐어 러블리 외 / 아이엠스타!(투니버스) - 세라 / 던전앤파이터: 역전의 바퀴 - 아이리스 포츈싱어 / 개구리 중사 케로로(카툰네트워크) - 앙골 모아 / 레고 닌자고 - 니야 / 스타크래프트 2 - 이즈샤 / 쿠키런: 킹덤 - 파르페맛 쿠키 외 다수
        </p>
        </div>

        {/* 보이스 듣기 */}
        <div className="s7_2">
        <h2>보이스 듣기</h2>

        {/* 탭 영역 */}
        <p className="tab">
            {tabs.map((tab) => (
                <a key={tab} className={`${activeTab === tab ? "on" : ""}`} onClick={() => setActiveTab(tab)} style={{width:'194px'}}>
                    {tab}
                </a>
            ))}
        </p>

        {/* 내용 영역 */}
        <div className="tab_c">
            <div className="voice_box show">
                {/* <a
                    href="https://cyphers.dn.nexoncdn.co.kr/cyphers/voicebox/emily/Cyphers_premium_emily.zip"
                    className="btn_voice_down"
                >
                    <b>다운로드</b>
                </a> */}
                
                <table className="voice_lst" cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {content[activeTab].map((item, idx) => (
                        <tr key={idx}>            
                            <td className="btn_p">
                                <a>play</a>
                            </td>
                            <td className="name">{item.title}</td>
                            <td className="cmt">{item.text}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    </div>
    </section>
);
}