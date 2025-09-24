/*
key1 : L (좌클릭)
key2 : R (우클릭)
key3 : LR (양클릭)
key4 : SL (Shift 좌클릭)
key5 : Q
key6 : F (잡기)
key7 : Space
key8 : 휠업
key9 : E (궁극기)
*/
export const skills = [
  {
    name: "플래시 킥",
    description: "빛의 속도로 연속 발차기를 합니다",
    class: "key1",
    key: "마우스 좌클릭",
    cooldown: 0.30,
    range: 160,
    type: "근거리",
    knockdown: true,
    video: {
      poster: "https://resource.cyphers.co.kr/ui/img/character/video_still/Cyphers_Ludwig_LC.png",
      src: "https://cyphers.dn.nexoncdn.co.kr/cyphers/video/Cyphers_Ludwig_LC.mp4"
    },
    detail: "최대 네 번 공격합니다. 세 번째 공격과 네 번째 공격은 연속으로 사용되며 세 번째 공격에 맞은 적은 다운 됩니다",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음1" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음2" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "잡기": {
        "판정" : [
            { label: "레벨", value: "없음" },
            { label: "적용 시점", value: "없음" }
        ],
        "면역" : [
            { label: "레벨", value: "없음" },
            { label: "적용 시점", value: "없음" }
        ]
      },
      "대미지": {
        "계수" : [
            { label: "대인", value: "1.00" },
            { label: "공성", value: "1.20" },
            { label: "몬스터", value: "1.00" },
        ],
        "공식" : [
            { label: "기본", value: "66+1.32x 공격력(다운된 적 1.00)" },
        ]
      }
    }
  },
  // 나머지 스킬도 이 구조대로...
];