# INHA UMC

인하대학교 UMC(University MakeUs Challenge) 공식 홈페이지

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Variables + Inline Styles
- **Font**: Pretendard, DM Mono

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Parts.tsx
│   ├── Events.tsx
│   ├── Apply.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useReveal.ts
│   └── useTyping.ts
└── lib/
    └── utils.ts
```

## 페이지 구성

| 섹션   | 설명                        |
| ------ | --------------------------- |
| Hero   | 메인 타이틀 + 타이핑 이펙트 |
| About  | 동아리 소개 + 통계          |
| Parts  | 7개 파트 소개               |
| Events | 최근 활동 카드              |
| Apply  | 지원 안내                   |

## 모집 상태 변경

`src/app/page.tsx`의 `RECRUITING` 값을 수정

```ts
const RECRUITING = true; // 모집 중
const RECRUITING = false; // 모집 준비 중
```
