## 🌴 로컬 실행방법

- git clone https://github.com/youngduck/ht-global-assignment.git
- pnpm install
- pnpm run dev
- http://localhost:5173/

## 🌴 결과물 링크

- Github Actions: [https://ht-global-test.store/](https://ht-global-test.store/)
- Vercel: [https://ht-global-assignment.vercel.app/](https://ht-global-assignment.vercel.app/)
- Figma: [Figma](https://www.figma.com/file/GRikoI2OHQ0DuPNRuxWdeA/Untitled?type=design&node-id=0%3A1&mode=design&t=uhhXpL3O5pZfpy8C-1)

## 🌴 주요 기술

- 코어 : React,TypeScript
- 상태관리 : Recoil
- 스타일링 : SCSS
- 패키지 매니저 : PNPM
- 빌드 : Vite
- CI/CD : GitHub Actions
- Mock Server : json-server

## 🌴 확장성, 재사용성, 유지보수성을 위한 코드 구성

- SCSS

  - 재사용 스타일링 전역 설정 : base, mixin, variables
  - 개별 컴포넌트 스타일링 파일분리 : ex) banner.scss

- Hook처리를 통한 무한스크롤 컨텐츠,아이템 동적교체

  - 무한스크롤 훅 (API, 아이템 )

- Navbar 데이터 추가삭제

## 🌴 Commit 컨벤션

| 이름     |                    설명                    |
| :------- | :----------------------------------------: |
| chore    |        패키지 설치, 설정 파일 수정         |
| feat     |                 기능 개발                  |
| style    |                디자인 작업                 |
| rename   | 파일 폴더명 변경, 함수명 상수(변수)명 변경 |
| refactor |                  리팩토링                  |
| init     |                 초기 세팅                  |
| docs     |                 문서 작성                  |

## 🌴 폴더 구조

src
┣ assets
┃ ┣ images
┃ ┃ ┣ banner
┃ ┃ ┃ ┣ htchart.png
┃ ┃ ┃ ┣ htmusicaward.jpg
┃ ┃ ┃ ┗ whosfan.jpg
┃ ┃ ┣ chart
┃ ┃ ┃ ┗ albumCover
┃ ┃ ┃ ┃ ┣ duck.png
┃ ┃ ┃ ┃ ┗ polarBear.png
┃ ┃ ┗ whook
┃ ┃ ┃ ┣ blackpink.webp
┃ ┃ ┃ ┗ bts.png
┃ ┗ icons.tsx
┣ component
┃ ┣ banner
┃ ┃ ┣ banner.scss
┃ ┃ ┗ Banner.tsx
┃ ┣ chartItem
┃ ┃ ┣ chartItem.scss
┃ ┃ ┗ ChartItem.tsx
┃ ┣ eventItem
┃ ┃ ┣ eventItem.scss
┃ ┃ ┗ EventItem.tsx
┃ ┣ layout
┃ ┃ ┣ footer
┃ ┃ ┃ ┗ Footer.tsx
┃ ┃ ┣ header
┃ ┃ ┃ ┗ Header.tsx
┃ ┃ ┗ navbar
┃ ┃ ┃ ┣ navbar.scss
┃ ┃ ┃ ┗ Navbar.tsx
┃ ┣ loading
┃ ┃ ┣ loading.scss
┃ ┃ ┗ Loading.tsx
┃ ┣ provider
┃ ┃ ┗ GestureProvider.tsx
┃ ┗ whookItem
┃ ┃ ┣ whookItem.scss
┃ ┃ ┗ WhookItem.tsx
┣ constants
┃ ┗ links.ts
┣ hooks
┃ ┗ useInfinityScroll.tsx
┣ mock
┃ ┣ bannerData.ts
┃ ┗ db.json
┣ pages
┃ ┣ chargepage
┃ ┃ ┗ Chargepage.tsx
┃ ┣ eventpage
┃ ┃ ┣ eventPage.scss
┃ ┃ ┗ EventPage.tsx
┃ ┣ homepage
┃ ┃ ┣ homepage.scss
┃ ┃ ┗ Homepage.tsx
┃ ┣ newspage
┃ ┃ ┗ Newspage.tsx
┃ ┣ notFound
┃ ┃ ┗ NotFound.tsx
┃ ┣ storepage
┃ ┃ ┗ Storepage.tsx
┃ ┗ whookpage
┃ ┃ ┣ whookPage.scss
┃ ┃ ┗ Whookpage.tsx
┣ scss
┃ ┣ abstracts
┃ ┃ ┣ \_base.scss
┃ ┃ ┣ \_mixin.scss
┃ ┃ ┗ \_variables.scss
┃ ┗ main.scss
┣ services
┃ ┗ api.ts
┣ store
┃ ┗ atom.ts
┣ types
┃ ┗ types.ts
┣ App.tsx
┣ main.tsx
┣ Routes.tsx
┗ vite-env.d.ts
