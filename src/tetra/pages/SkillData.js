import tetra01 from '../../img/character/skill/tetra/01좌클릭.png';
import tetra02 from '../../img/character/skill/tetra/02우클릭.png';
import tetra03 from '../../img/character/skill/tetra/03쌍클릭.png';
import tetra04 from '../../img/character/skill/tetra/04시프트.png';
import tetra05 from '../../img/character/skill/tetra/05F.png';
import tetra06 from '../../img/character/skill/tetra/06스페.png';
import tetra07 from '../../img/character/skill/tetra/07휠업.png';
import tetra08 from '../../img/character/skill/tetra/08 궁극기1차.png';
import tetra09 from '../../img/character/skill/tetra/09 궁극기2차.png';

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
    name: "스칼라",
    description: "손 끝으로 주변의 입자를 예리하게 다룹니다.",
    class: "key1",
    key: "마우스 좌클릭",
    cooldown: 0.20,
    rangeNm: "사거리",
    range: 650,
    type: "원거리",
    knockdown: "OFF",
    img: tetra01,
    detail: "최대 세 번 공격합니다. 세 번째 공격을 맞은 적은 다운됩니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
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
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.20" },
        ],
        "공식" : [
            { label: "1타", value: "0+0.35x 공격력(다운된 적 1.00)" },
            { label: "2타", value: "0+0.40x 공격력(다운된 적 1.00)" },
            { label: "3타", value: "0+0.45x 공격력(다운된 적 1.00)" },
        ]
      }
    }
  },
  {
    name: "존재 비율",
    description: "지정한 위치에 입자 벽을 세워 이동과 공격을 차단합니다.",
    class: "key2",
    key: "마우스 우클릭",
    cooldown: 10.00,
    rangeNm: "사거리",
    range: 800,
    type: "원거리",
    knockdown: "OFF",
    img: tetra02,
    detail: "벽은 3초 동안 지속됩니다. 입자 벽에 맞은 적은 안으로 끌려옵니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
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
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.10" },
        ],
        "공식" : [
            { label: "기본", value: "160+1.10x 공격력(다운된 적 1.00)" },
        ]
      }
    },
  },
  {
    name: "마멸",
    description: "주변으로 무수한 입자가 튀어 적을 공격합니다.",
    class: "key3",
    key: "마우스 양쪽클릭",
    cooldown: 11.00,
    rangeNm: "공격범위",
    range: 500,
    type: "근거리",
    knockdown: "OFF",
    img: tetra03,
    detail: "테트라 주변으로 주변의 입자를 날카로운 형태로 변형시켜 주변을 공격합니다. 피격된 적은 다운됩니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
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
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.25" },
        ],
        "공식" : [
            { label: "기본", value: "260+1.30x 공격력(다운된 적 1.00)" },
        ]
      }
    },
  },
  {
    name: "예각",
    description: "지면에서 날카로운 입자 기둥이 솟아 올라 적을 공격합니다.",
    class: "key4",
    key: "Shift + 마우스 좌클릭",
    cooldown: 6.00,
    rangeNm: "사거리",
    range: 750,
    type: "원거리",
    knockdown: "ON",
    img: tetra04,
    detail: "바닥에 주는 충격을 타고 입자가 솟아오릅니다. 다운 상태의 적은 1.3초 동안 속박 상태가 됩니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
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
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.10" },
        ],
        "공식" : [
            { label: "기본", value: "200+0.90x 공격력(다운된 적 0.90)" },
        ]
      }
    },
  },
  {
    name: "솔리드",
    description: "적을 만화경 속에 가두어 혼란을 준 후 진짜 자신의 모습이 나타납니다.",
    class: "key6",
    key: "F",
    cooldown: 5.00,
    rangeNm: "공격범위",
    range: 100,
    type: "근거리",
    knockdown: "ON",
    img: tetra05,
    detail: "적을 만화경 속에 가두어 혼란을 준 후 진짜 자신의 모습이 나타납니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "적을 잡은 이후 부터 스킬 종료 시까지" },
      ],
      "잡기": {
        "판정" : [
            { label: "레벨", value: "1레벨" },
            { label: "적용 시점", value: "스킬을 사용한 시점 부터" }
        ],
        "면역" : [
            { label: "레벨", value: "없음" },
            { label: "적용 시점", value: "없음" }
        ]
      },
      "대미지": {
        "계수" : [
            { label: "대인", value: "1.00" },
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.00" },
        ],
        "공식" : [
            { label: "기본", value: "220+1.00x 공격력(다운된 적 1.00)" },
        ]
      }
    },
  },
  {
    name: "키스샷",
    description: "자신의 주변으로 입자 벽을 만들어내 적을 밀어냅니다. 추가 조작으로 이동할 수 있습니다.",
    class: "key7",
    key: "Space",
    cooldown: 19.00,
    rangeNm: "이동거리",
    range: 470,
    type: "근거리",
    knockdown: "OFF",
    img: tetra06,
    detail: "자신의 주변으로 입자 벽을 만들어내 적을 밀어냅니다. 후방으로만 이동할 수 있으며, A, D키를 눌러 대각선으로 이동할 방향을 선택할 수 있습니다. 테트라에게 밀쳐지며 적군이 서로 부딪힌다면 테트라의 공격을 맞지 않은 적까지 함께 다운 상태가 됩니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "적을 잡은 이후 부터 스킬 종료 시까지" },
      ],
      "잡기": {
        "판정" : [
            { label: "레벨", value: "1레벨" },
            { label: "적용 시점", value: "없음" }
        ],
        "면역" : [
            { label: "레벨", value: "1레벨" },
            { label: "적용 시점", value: "없음" }
        ]
      },
      "대미지": {
        "계수" : [
            { label: "대인", value: "1.00" },
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.00" },
        ],
        "공식" : [
            { label: "기본", value: "160+0.80x 공격력(다운된 적 1.00)" },
        ]
      }
    },
  },
  {
    name: "아이솔",
    description: "자신의 손 주변에 모여진 입자들을 확인합니다. 방어력이 증가합니다.",
    class: "key8",
    key: "Wheel Up",
    cooldown: 0.00,
    rangeNm: "사거리",
    range: "자신",
    type: "없음",
    knockdown: "OFF",
    img: tetra07,
    detail: "90초 동안 방어력이 +3% 증가합니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
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
            { label: "대인", value: "없음" },
            { label: "공성", value: "없음" },
            { label: "몬스터", value: "없음" },
        ],
        "공식" : [
            { label: "없음", value: "없음" },
        ]
      }
    },
  },
  {
    name: "엔트로피 테트락티스",
    description: "자신의 영역에 적을 끌어모아 가두고 큐브를 맞춥니다.",
    class: "key9",
    key: "E",
    cooldown: 98.00,
    rangeNm: "공격범위",
    range: 700,
    type: "근거리",
    knockdown: "ON",
    img: tetra08,
    detail: "테트라의 영역 안으로 진입되어 있는 적은 입자 공간의 중심으로 끌려옵니다. 방어력이 +50% 증가합니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "적을 잡은 이후 부터 스킬 종료 시까지" },
      ],
      "잡기": {
        "판정" : [
            { label: "레벨", value: "3레벨" },
            { label: "적용 시점", value: "스킬을 사용한 시점 부터" }
        ],
        "면역" : [
            { label: "레벨", value: "3레벨" },
            { label: "적용 시점", value: "스킬을 사용한 시점 부터" }
        ]
      },
      "대미지": {
        "계수" : [
            { label: "대인", value: "1.00" },
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.00" },
        ],
        "공식" : [
            { label: "1타~3타", value: "20+0.20x 공격력(다운된 적 0.90)" },
            { label: "4타", value: "80+0.40x 공격력(다운된 적 0.80)" },
            { label: "5타", value: "120+0.60x 공격력(다운된 적 0.80)" },
            { label: "마무리 타격", value: "140+0.40x 공격력(다운된 적 0.80)" },
        ]
      }
    },
  },
  {
    name: "인피니티 알제브라",
    description: "공기 중 입자를 모아내 견고하고 날카롭게 만들어냅니다.",
    class: "key9",
    key: "E",
    cooldown: 120.00,
    rangeNm: "사거리",
    range: 900,
    type: "원거리",
    knockdown: "ON",
    img: tetra09,
    detail: "주변의 입자들을 모아 거대하고 견고한 조각들이 생성되어 회전합니다.",
    tabs: {
      "슈퍼아머": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" }
      ],
      "무적": [
        { label: "종류", value: "없음" },
        { label: "방향", value: "없음" },
        { label: "적용 시점", value: "없음" },
      ],
      "잡기": {
        "판정" : [
            { label: "레벨", value: "없음" },
            { label: "적용 시점", value: "없음" }
        ],
        "면역" : [
            { label: "레벨", value: "1레벨" },
            { label: "적용 시점", value: "스킬을 사용한 시점 부터" }
        ]
      },
      "대미지": {
        "계수" : [
            { label: "대인", value: "1.00" },
            { label: "공성", value: "1.00" },
            { label: "몬스터", value: "1.00" },
        ],
        "공식" : [
            { label: "기본", value: "23+0.12x 공격력(다운된 적 1.00)" },
            { label: "회전", value: "50+0.23x 공격력(다운된 적 1.00)" },
            { label: "마지막 타격", value: "145+0.60x 공격력(다운된 적 0.80)" },
        ]
      }
    },
  }
];