export const questions_list = [
  // HTML & CSS
  "HTML5의 <section>과 <article> 태그를 구분하여 사용하는 기준은 무엇인가요?",
  "meta viewport 태그가 모바일 웹 렌더링에 미치는 영향은 무엇인가요?",
  "CSS Box-Model의 content, padding, border, margin 영역이 레이아웃 계산에 반영되는 순서를 설명하세요.",
  "inline 요소와 block 요소의 기본 차이점과 대표적인 예시는 무엇인가요?",
  "Flexbox의 main-axis, cross-axis 개념을 실제 레이아웃 예와 함께 설명해주세요.",
  "grid-template-areas를 사용해 3행 3열 레이아웃을 정의하는 방법은 무엇인가요?",
  "position: sticky가 동작하려면 어떤 조건(부모·스크롤 컨텍스트)이 충족되어야 하나요?",
  "z-index가 stacking context를 새로 생성하는 대표적인 CSS 속성 두 가지는 무엇인가요?",
  "CSS specificity를 계산할 때 inline style이 class 선택자보다 우선되는 이유를 설명하세요.",
  "CSS 변수를 :root에 선언했을 때의 장점과 런타임에서 값을 변경하는 방법은?",
  "Reflow(레이아웃)와 Repaint(리페인트)가 발생하는 대표적인 코드 예시는 무엇인가요?",

  // JavaScript (언어 기초 & ES6+)
  "호이스팅이 let/const 선언에는 어떻게 다르게 적용되나요?",
  "클로저가 메모리 누수를 일으킬 수 있는 상황과 방지 방법을 설명하세요.",
  "this 바인딩이 정의되는 순서(암시적, 명시적, new, 화살표 함수)를 예시와 함께 설명해주세요.",
  "프로토타입 체인에서 프로퍼티 조회가 실패하면 어떤 과정으로 undefined가 반환되나요?",
  "ES6 모듈 import 구문이 CommonJS require와 달리 정적 분석 가능한 이유는 무엇인가요?",
  "Symbol()을 객체 프로퍼티 키로 사용했을 때 for…in 루프에 포함되지 않는 이유를 설명하세요.",
  "async/await로 구성한 함수 내부에서 try/catch 없이 발생한 예외는 어디로 전파되나요?",
  "Promise.all 과 Promise.allSettled의 반환 값 차이를 설명하세요.",
  "event.currentTarget과 event.target의 차이를 실제 코드로 보여주세요.",
  "캡처링 단계에서 addEventListener('click', handler, true)를 사용하면 얻을 수 있는 이점은?",
  "setTimeout의 최소 지연 시간이 4 ms로 강제되는 상황은 무엇인가요?",

  // 이벤트 루프 & 브라우저 엔진
  "브라우저 이벤트 루프에서 microtask 큐가 macrotask 큐보다 먼저 비워지는 이유는 무엇인가요?",
  "requestAnimationFrame 콜백의 실행 시점과 FPS(60 Hz) 상한을 설명하세요.",
  "웹 워커(Web Worker)가 메인 스레드와 통신할 때 postMessage로 전달되는 데이터가 복사·이동되는 과정을 설명하세요.",
  "가비지 컬렉션의 Mark-and-Sweep 알고리즘이 단순 참조 카운팅보다 메모리 누수를 줄이는 이유는 무엇인가요?",

  // 네트워크 & HTTP
  "HTTP 1.1에서 keep-alive가 성능에 기여하는 방식은 무엇인가요?",
  "HTTP/2의 헤더 압축(HPACK)이 서버·클라이언트 통신량을 줄이는 원리를 설명하세요.",
  "HTTPS 핸드셰이크에서 서버 인증서의 공개 키가 사용되는 단계는 어디인가요?",
  "TLS 세션 재사용(Session Resumption)이 재협상 시간을 줄이는 방법은 무엇인가요?",
  "CORS preflight 요청(OPTIONS)의 응답 헤더에 Access-Control-Allow-Headers가 필요한 상황은?",
  "쿠키 속성 Secure, HttpOnly, SameSite=Lax가 각각 방어하는 공격 벡터를 설명하세요.",
  "브라우저 캐시에서 Cache-Control: no-store 헤더가 있을 때 Service Worker가 캐싱을 우회하는 방법은?",
  "ETag와 Last-Modified 헤더가 동시에 존재할 때 브라우저는 어떤 우선순위로 검증(request validation)을 수행하나요?",
  "DNS 조회 과정에서 순차적으로 접근하는 Root, TLD, Authoritative 네임서버의 역할을 설명하세요.",
  "CDN이 오리진 서버 대신 응답할 때 Origin Shield 계층이 성능·비용 최적화에 기여하는 이유는?",

  // React (Core & Hooks)
  "React의 Virtual DOM이 실제 DOM과 동기화되는 과정을 단계별로 설명하세요.",
  "Reconciliation 과정에서 key prop이 변경되지 않을 때 컴포넌트 인스턴스가 재사용되는 이유는?",
  "useState가 배열·객체 상태를 업데이트할 때 반드시 불변성(immutable)을 유지해야 하는 이유는?",
  "useEffect의 의존성 배열이 빈 배열([])일 때와 생략될 때의 실행 타이밍 차이는?",
  "useRef로 DOM 요소에 직접 접근할 때 주의해야 할 메모리 해제(clean-up) 패턴은 무엇인가요?",
  "React.memo가 얕은 비교(shallowEqual)로 props 변경 여부를 판단하는 한계는 무엇인가요?",
  "useCallback과 useMemo를 과도하게 사용했을 때 오히려 성능이 저하되는 이유를 설명하세요.",
  "React 18의 자동 배칭(Auto-Batching)이 setState 호출을 통합하는 조건은 무엇인가요?",
  "Suspense를 이용한 코드 스플리팅에서 fallback UI가 렌더되는 정확한 시점은?",
  "startTransition API가 UI 응답성을 개선하는 원리를 설명하세요.",
  "forwardRef와 useImperativeHandle을 조합해 부모 컴포넌트가 자식 메서드(showModal 등)에 접근하도록 구현하는 예시는?",
  "Error Boundary가 class 컴포넌트로만 구현되는 이유와 현대 React에서 함수를 사용한 대안은?",

  // 상태 관리 & 데이터
  "Redux의 단방향 데이터 흐름을 세 단계(Action → Reducer → Store)로 설명하세요.",
  "Redux Toolkit의 createSlice가 reducer, action creator 코드를 줄여주는 방식은 무엇인가요?",
  "Context API가 전역 상태를 관리할 때 렌더링 계층이 깊어질수록 성능 이슈가 생기는 이유는?",
  "Zustand에서 selector 함수를 사용하여 불필요한 재렌더를 방지하는 패턴은 무엇인가요?",
  "서드파티 SWR(React Query)의 stale-while-revalidate 전략이 UX에 기여하는 과정을 설명하세요.",

  // TypeScript
  "타입 별칭과 인터페이스가 동일한 형태를 선언할 때 Merge(병합) 가능 여부가 어떻게 다르나요?",
  "제네릭 제약조건에서 extends 키워드를 사용하여 타입 범위를 제한하는 이유는 무엇인가요?",
  "유니온 타입에서 공통 프로퍼티가 선택적(optional)일 때 타입 내로잉이 실패하는 사례를 설명하세요.",
  "keyof와 typeof를 조합하여 객체 키를 기반으로 추론된 타입을 생성하는 코드 예시는?",
  "Mapped Type Utility인 Partial<T>가 선택적 프로퍼티를 만드는 내부 구현을 설명하세요.",
  "Type Guard 함수가 is 키워드를 반환 타입에 사용할 때 컴파일러가 수행하는 제어 흐름 분석은?",
  "never 타입을 반환하는 함수가 프로그램 제어 흐름에서 어떤 의미를 가지나요?",
  "strictNullChecks 옵션을 꺼둔 코드베이스에서 발생할 수 있는 런타임 오류 예시는?",
  "Declaration Merging으로 글로벌 Window 인터페이스에 커스텀 프로퍼티를 추가할 때 주의할 점은?",
  "Structural Typing(구조적 타이핑)이 Nominal Typing과 다르게 타입 호환성을 판단하는 방식은?",

  // 빌드 & 배포
  "Webpack에서 Loader가 파일별 변환을 담당하고 Plugin이 번들 전체를 조작하는 예시는?",
  "Tree-Shaking이 ES6 모듈의 정적 import를 필요로 하는 이유는 무엇인가요?",
  "코드 스플리팅을 위해 React.lazy와 dynamic(import)을 사용하는 비용-효익을 비교하세요.",
  "Vite가 ESBuild를 사용해 초기 번들 시간을 단축하는 메커니즘은 무엇인가요?",
  "Babel preset-env가 브라우저 타겟을 설정할 때 core-js polyfill을 자동으로 주입하는 방식은?",
  "소스맵(Source Map)이 프로덕션 빌드에서 보안 위험을 초래할 수 있는 이유와 안전한 배포 전략은?",

  // 테스트 & 품질
  "Jest의 가상 타이머(fake timers)가 setTimeout 내부 로직을 테스트하는 방법은?",
  "React Testing Library에서 ‘queryByRole’ 대신 ‘getByRole’을 사용했을 때 테스트가 실패하는 이유는?",
  "Unit Test, Integration Test, E2E Test를 우선순위로 배치할 때 피라미드 전략이 권장되는 이유는?",
  "Mock Service Worker(MSW)를 이용해 API 통신을 가로채는 장점은 무엇인가요?",
  "CI 파이프라인에서 테스트 병렬 실행(parallelization)이 빌드 시간을 단축하는 원리는?",

  // 성능 최적화
  "Core Web Vitals 중 LCP 2.5 s 기준을 만족하기 위해 이미지 최적화(Image Component, preload) 전략을 설명하세요.",
  "CLS 점수를 악화시키는 레이아웃 시프트를 예방하기 위한 width/height 속성 설정 이유는?",
  "코드 스플리팅과 HTTP/2 Push를 함께 사용했을 때 중복 전송을 피하는 방법은?",
  "preload와 prefetch가 각기 다른 우선순위 큐에 자원을 배치하는 과정을 설명하세요.",
  "Critical CSS 추출(critical-path CSS inlining)이 first paint 시간을 줄이는 이유는?",

  // 웹 보안
  "XSS 공격 방지를 위한 Content-Security-Policy 디렉티브 'script-src'에 nonce를 적용하는 절차는?",
  "CSRF 토큰을 SameSite=None 쿠키와 이중 제출 방식을 조합할 때 이점은 무엇인가요?",
  "OAuth 2.0 Authorization Code Flow에서 PKCE(Proof Key for Code Exchange)가 추가되는 배경은?",
  "HTTPS Strict-Transport-Security(HSTS)가 MITM 공격을 완화하는 원리는 무엇인가요?",
  "JWT 토큰 저장 위치를 localStorage 대신 Secure-SameSite 쿠키로 설정했을 때 장단점은?",

  // 운영체제 & 자료구조 기초
  "프로세스와 스레드의 주소 공간 공유 여부가 컨텍스트 스위칭 비용에 미치는 영향은?",
  "멀티코어 CPU에서 스레드 풀(Thread Pool)이 스레드 생성 비용을 줄이는 원리는?",
  "세마포어와 뮤텍스가 데드락 조건(상호 배제·점유 대기 등)에 어떻게 관여하나요?",
  "힙 메모리 단편화(External Fragmentation)를 완화하기 위한 세대별(Generational) GC의 아이디어는?",
  "빅-O 표기법으로 배열 검색 O(n)과 해시 테이블 검색 O(1)의 차이를 실제 코드 실행 시간 예와 함께 설명하세요.",
  "QuickSort의 평균 시간 복잡도 O(n log n)이 배열이 이미 정렬된 경우 O(n²)로 악화되는 이유는?",

  // Next.js (Pages Router)
  "getStaticProps가 빌드 시점에만 실행될 때 ‘데이터 최신화’가 필요한 경우 Incremental Static Regeneration을 적용하는 방법은?",
  "getServerSideProps를 적용한 페이지에서 캐싱 헤더(Cache-Control)를 통해 TTFB(Time To First Byte)를 줄이는 전략은?",
  "SSR과 CSR를 혼합한 하이브리드 라우팅에서 클라이언트 네비게이션(Link) 시 데이터 Prefetch가 동작하는 원리를 설명하세요.",
  "Next.js Image 컴포넌트가 브라우저 원본 이미지보다 LCP 점수를 개선하는 이유는 무엇인가요?",
  "API Routes에서 미들웨어(middleware.ts)를 활용해 공통 인증 로직을 삽입하는 과정은?",

  // Next.js (App Router)
  "App Router에서 layout.tsx와 page.tsx 파일의 역할 및 차이는 무엇인가요?",
  "React Server Components가 App Router 기본 설정에서 클라이언트 컴포넌트와 구분되는 기준은 무엇인가요?",
  "Server Actions를 사용해 폼 데이터를 mutate할 때 서버와 클라이언트 간 데이터 흐름이 어떻게 동작하나요?",
  "Parallel Route 디렉터리(@modal 등) 구조가 모달 UI 구현에 기여하는 방식을 설명하세요.",
  "Intercepting Routes([...] 파일)를 사용해 URL을 마스킹하면서 새로운 화면을 띄우는 원리를 설명하세요.",
  "App Router에서 fetch 함수의 기본 캐싱 동작과 revalidate 옵션을 설정해 데이터 새로고침을 제어하는 방법은?",
  "route.ts(또는 route.js) 파일로 정의한 Custom Route Handler가 기존 API Routes 방식과 다른 점은 무엇인가요?",
  "Dynamic Segment([id])와 Catch-all Segment([...slug])가 타입 안전 내비게이션에 미치는 영향은 무엇인가요?",
  "괄호식 그룹 디렉터리(app/(auth)/login/page.tsx)가 번들 크기에 영향을 주지 않는 이유는 무엇인가요?",
  "pages와 app 디렉터리를 병행 운영할 때 빌드·라우팅 우선순위는 어떻게 되나요?",
  "loading.tsx와 error.tsx 파일이 Suspense fallback 및 에러 경계를 통합하는 과정을 설명하세요.",
];
