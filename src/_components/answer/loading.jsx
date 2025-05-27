import { useEffect, useState } from "react";

const loadingTips = [
  "JavaScript는 단 10일 만에 만들어졌어요. 그것도 원래 이름은 'Mocha'였답니다!",
  "JS 초창기 이름은 'LiveScript'였지만, Netscape가 Java의 인기에 편승하려고 'JavaScript'로 이름을 바꿨어요.",
  "JS는 처음에는 '작은 기능만 하게 하자'고 만든 건데, 지금은 웹의 주인공이 됐죠.",
  "Brendan Eich는 JavaScript를 만들 당시, 함수 안에 함수를 넣는 개념(클로저)을 실험적으로 넣었는데 지금은 JS의 핵심이 되었죠.",
  "TypeScript는 마이크로소프트에서 만든 언어예요. 대규모 JS 프로젝트가 너무 복잡해져서 생긴 해결책이었죠.",
  "TypeScript의 주요 목표는 'JS에 타입을 붙여서 개발자의 실수를 줄이자!'였어요.",
  "TS는 JS로 완전히 변환되는 트랜스파일러입니다. 결국 실행되는 건 JS예요.",
  "VSCode에서 TypeScript가 잘 작동하는 이유? 같은 팀(Microsoft)에서 만들었기 때문이에요!",
  "React는 원래 Facebook 내부의 광고 시스템을 위해 만들어졌어요.",
  "JSX 문법은 'HTML을 JS 안에 쓰면 어때?' 라는 아이디어에서 시작됐어요.",
  "React의 초기 이름은 'FaxJS'였다는 말도 있어요. 하지만 너무 어울리지 않죠? 😅",
  "React가 등장하기 전엔 jQuery로 DOM을 직접 건드렸어요. 지금 생각하면 끔찍하죠?",
  "React는 Virtual DOM을 사용해서 화면 변경을 훨씬 빠르게 처리해요. 예전 방식보다 훨~씬 효율적이죠.",
  "웹사이트 로딩 속도 향상을 위한 전쟁은 1990년대부터 시작됐어요. 지금도 끝나지 않았죠.",
  "WWW의 창시자 팀 버너스 리는 처음엔 인터넷 문서 구조를 위해 HTML을 만들었어요. 그게 오늘날의 웹이 되었죠.",
  "컴퓨터가 0과 1밖에 모른다는 건, 전기가 켜져있냐 꺼져있냐 차이에요. 굉장히 원시적이죠?",
  "'버그'라는 단어는 진짜로 컴퓨터 안에 들어간 벌레에서 유래됐어요! MIT 실험실에서 벌어진 일이죠.",
];

export default function LoadingComment({ loading }) {
  const [tip, setTip] = useState("");

  useEffect(() => {
    if (loading) {
      const random = Math.floor(Math.random() * loadingTips.length);
      setTip(loadingTips[random]);
    } else {
      setTip("");
    }
  }, [loading]);

  if (!tip) return null;

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="mt-5 mb-10 text-xl font-bold">
        ChatGPT한테 물어보는 중이에요! 잠시만 기다려주세요!
      </p>
      <p className="text-xl text-gray-500 italic mb-2">{tip}</p>
    </div>
  );
}
