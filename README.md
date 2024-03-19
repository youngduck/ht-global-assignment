## 🌴 로컬 실행방법
```
 git clone https://github.com/youngduck/ht-global-assignment.git
```

```
pnpm install
```

```
pnpm run dev
```
- visit http://localhost:5173/

## 🌴 결과물 링크

### AWS 배포 사이트: [http://coding-test-assignment.s3-website.ap-northeast-2.amazonaws.com/](http://coding-test-assignment.s3-website.ap-northeast-2.amazonaws.com/)
### Vercel 배포 사이트: [https://ht-global-assignment.vercel.app/](https://ht-global-assignment.vercel.app/)



## 🌴 주요 기술

- 코어 : React,TypeScript
- 상태관리 : Recoil
- 스타일링 : SCSS
- 패키지 매니저 : Pnpm
- 빌드 : Vite
- CI/CD : GitHub Actions
- Mock Server : json-server

## 🌴 확장성, 재사용성, 유지보수성을 위한 코드 구성

### 1. SCSS
  - CSS 모듈화 : mixin, variables 사용
    
### 2. 배포전략
- Github Action CI/CD 구축
![file cover - 1](https://github.com/youngduck/ht-global-assignment/assets/46455370/c155a4bb-e2e4-46bf-aa38-fce331781411)

### 3. Hooks,동적 함수 사용 동적컨텐츠 구현
> useInfinityScroll hooks + fetch API(apiKey.value) + 단일 컴포넌트(EventItem) => 무한스크롤 EventList 컴포넌트 구현

![file cover - 2](https://github.com/youngduck/ht-global-assignment/assets/46455370/e3c5e8f7-fb7b-4c96-92ab-d6e70eef0e0e)
![image](https://github.com/youngduck/ht-global-assignment/assets/46455370/81aba9c5-c8ea-4608-a4b5-a6aa5bd63a56)


![안녕하세요](https://github.com/youngduck/ht-global-assignment/assets/46455370/5a657ba3-14c3-4a77-991f-357c239b5e72)



### 4. fetch 함수 객체화
 ![image](https://github.com/youngduck/ht-global-assignment/assets/46455370/acb207d0-ecdf-4b6a-9cb5-9c828cedb3a4)
 ![image](https://github.com/youngduck/ht-global-assignment/assets/46455370/378e7afb-c807-4f72-8c5c-82d4c88395d7)




## 🌴 src 폴더구조
- assets
- component
  - banner 
  - contents
      - chart (item,list)
      - whook (item,list)
      - event (item,list)
      - news (item,list)
      - store (item,list)
      - whook (item,list)
  - layout 
      - navbar
  - loading
  - provider
- constants
- hooks
- mock
- pages
- scss
- services
- store
- types


## 🌴 구현 기능 (width: 425px 화면)
### 카테코리 탭 클릭 이동
![탭 클릭이동](https://github.com/youngduck/ht-global-assignment/assets/46455370/06a1f943-eeb7-4d50-b61b-480c4f189695)
### 카테고리 좌우 슬라이드 모션이동
![탭 모션이동](https://github.com/youngduck/ht-global-assignment/assets/46455370/7326ecfd-35b9-4f9a-ba11-4b346aa19c3c)
### 배너 무한루프, 클릭시 외부링크 이동
![배너무한루프,링크이동,슬라이드](https://github.com/youngduck/ht-global-assignment/assets/46455370/9635ffd0-6463-4f2a-8181-a90704af2aa7)
### 무한 스크롤
![무한스크롤](https://github.com/youngduck/ht-global-assignment/assets/46455370/1aa8b993-9091-4b34-a981-32d362ea5378)

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




