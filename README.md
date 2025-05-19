[원본 레포 보러가기](https://github.com/ydsic/may_study_project)

# 🎓 CS Mentor

**CS Mentor**는 프론트엔드 신입 개발자들이 **AI 튜터**와 함께 CS(컴퓨터 과학) 면접 질문을 연습할 수 있는 웹 애플리케이션입니다.  
랜덤으로 출제된 질문에 답변을 작성하면, ChatGPT가 즉시 **정답 여부 판단** 및 **피드백**을 제공해 줍니다.

---

## 🧠 기획 의도

프론트엔드 개발자로서 취업 준비 중 가장 어려운 부분 중 하나는 **CS 면접 대비**입니다.  
인터넷에 정보는 많지만, 어떤 답이 적절한지 피드백을 받을 기회는 적습니다.

**CS Mentor**는 이러한 문제를 해결하고자 기획되었습니다:

- 면접 대비를 혼자서도 효율적으로 할 수 있도록
- AI가 즉각적으로 피드백을 주어 **학습 효율 향상**
- 주도적인 학습 습관 형성

> "AI 튜터와 함께 매일 CS 한 문제씩!"

---

## 🚀 주요 기능

- **랜덤 문제 제공**
  - 운영체제, 네트워크, 자료구조 등 다양한 CS 영역의 질문 풀에서 무작위 출제
- **답안 제출 및 채점**
  - 사용자가 입력한 답변을 AI가 분석하여 정답 여부 판단
- **상세 피드백 제공**
  - 틀린 부분에 대한 설명과 보충 학습 자료 추천
- **다크 모드 지원**
  - 사용자 환경에 따라 다크/라이트 모드 전환 가능
- **답변 히스토리 저장 기능**
  - 이전에 제출한 질문 및 피드백을 기록하여 복습 가능

---

## 🛠️ 사용 기술

| 구분          | 기술 스택                                 |
| ------------- | ----------------------------------------- |
| **Frontend**  | React, JavaScript, Vite, Tailwind CSS     |
| **AI 기능**   | OpenAI GPT-4 API                          |
| **상태 관리** | useState, useEffect 중심의 로컬 상태 관리 |
| **스타일**    | Tailwind CSS, 다크 모드 지원              |
| **배포**      | Github actions, Github pages              |

---

## 📁 프로젝트 구조

```
📦may_study_project
 ┣ 📂public
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜openaiApi.jsx          # OpenAI GPT API 호출 함수
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜react.svg              # 이미지/아이콘 등 정적 자산
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂answer
 ┃ ┃ ┃ ┗ 📜index.jsx           # 사용자 답변 입력 폼
 ┃ ┃ ┣ 📂feedback
 ┃ ┃ ┃ ┗ 📜index.jsx           # GPT로부터 받은 피드백 출력
 ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┗ 📜index.jsx           # 네비게이션 바
 ┃ ┃ ┣ 📂qustion
 ┃ ┃ ┃ ┗ 📜index.jsx           # 문제 출력 컴포넌트
 ┃ ┃ ┣ 📂sidebar
 ┃ ┃ ┃ ┣ 📜Modal.jsx           # 모달 (예: 히스토리, 설정)
 ┃ ┃ ┃ ┗ 📜index.jsx           # 사이드바 UI
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┃ ┗ 📜index.jsx           # 타이틀, 헤더
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜qustions.js           # 질문 데이터 리스트
 ┃ ┃ ┗ 📜theme.js              # 다크모드 관련 설정
 ┃ ┣ 📜App.jsx                 # 라우팅 및 전체 앱 구성
 ┃ ┣ 📜Test.jsx                # 테스트용 임시 컴포넌트
 ┃ ┣ 📜App.css / index.css     # 전역 스타일
 ┃ ┗ 📜main.jsx                # 앱 엔트리 포인트
```

---

## 🧪 설치 및 실행 방법

1. **저장소 클론**

   ```bash
   git clone https://github.com/ydsic/may_study_project.git
   cd may_study_project
   ```

2. **의존성 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   npm run dev
   ```

---

## ✨ 향후 계획

- ✅ 다크모드 지원
- ✅ 답변 히스토리 기능 구현
- 🔄 질문 카테고리 필터 기능 추가
- 🔄 사용자 인증 및 로그인 기능 도입
- 🔄 히스토리별 성취도 분석 대시보드

## 배포 방식

- Github Actions을 이용하여 main branch에 push를 하면 자동으로 gh-pages branch에 build한 파일이 올라가면서 Github Pages로 배포하는 방식

---

## 사용법

- 서버리스 프로젝트라 ChatGPT API 키를 올릴 방법이 없어서 input 태그 안에 직접 API 키를 넣는 방식으로만 동작합니다. 사용을 해보고 싶으신 분들께선 ydsic99@gmail.com 으로 메일 주시면 API Key를 보내드리겠습니다.
