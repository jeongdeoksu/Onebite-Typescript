/**
 * 인터페이스
 * 인터페이스에서는 유니온이나 인터섹션 타입을 만들 수 없음
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  sayHi(): void; // 호출 시그니처 이용
  sayHi(a: number, b: number): void; //* 호출 시그니처로 정의하면 오버로드 시그니처 사용 가능
}

// type Type1 = number | string | Person;
// type Type2 = number & string & Person;

const person: Person = {
  name: '정덕수',
  sayHi: function () {
    console.log('Hi');
  },
};

person.name = '김지연';

person.sayHi();
person.sayHi(1, 2);
