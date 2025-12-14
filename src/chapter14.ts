//* 14. 객체

// object (객체리터럴 타입)
// 구조적 타입 시스템 (반대는 명목적 타입 시스템 예 JAVA)
// Property Based Type System
let user: {
  id?: number; // ? 옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: 'John',
};

user = {
  name: '홍길동',
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

// config.apiKey = 'MY API KEY';
