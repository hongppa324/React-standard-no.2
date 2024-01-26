# React Standard class mission #2 : todo-list

## 🖥️ 프로젝트 소개

React 입문 과제였던 TodoList를 처음부터 아무것도 참조하지 않고 만들어보기.

## 🎬 구현 사이트 이미지

- 페이지 이미지 : ![Alt text](/asset/page-screenshot.png)

## 🕰️ 개발 기간

- 2024.01.24 (수) - 2024.01.26 (금)

## 📌 구현 기능

[기존 요구사항]

- UI
- Todo 추가
- Todo 삭제
- Todo 완료 상태 변경 (Working <-> Done)

[피드백 후 수정사항]

- id : unique
- list 추가 시 validation check & input 창에 focus
- list 삭제 시 confirm message
- 첫 화면에서 제목 input 창에 autofocus
- +@ styled-component, GlobalStyles, useRef 등 숙련 주차 강의 내용 적용

## ❗ 요구 사항

### 디자인은 취향 존중, 화면 구성은 동일하게!!

1. id : unique하게

2. useState 훅 사용하기

3. 컴포넌트 구조 아래와 동일하게

## 🔗 컴포넌트 구조

- **App.jsx** : Main
- **InputArea.jsx** : TodoList 추가
- **TodoList.jsx** : TodoList 레이아웃
  - **Todo.jsx** : TodoList Card 위치 결정 => Working or Done, 버튼 함수
- **Footer.jsx** : Footer

## ⚙️ 개발 환경 / 기술스택

- **`npm`**
- **`create-react-app`**
- React
- JavaScript
- HTML
- CSS
