/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  color: string;
}

// interface Dog {
//   name: string;
//   color: string;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   color: string;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   color: string;
//   isFly: boolean;
// }

interface Dog extends Animal {
  // name: 'Hello'; //* 다시 정의한 타입 원본 타입의 서브 타입이여야만 함
  isBark: boolean;
}

const dog: Dog = {
  name: 'Hello',
  color: '',
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

// type은 객체가 아니면 확장 불가

type Person = {
  name: string;
  age: number;
};

interface Student extends Person {} // interface는 객체면 확장 가능
