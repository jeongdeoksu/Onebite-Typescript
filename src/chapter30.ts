/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 기준1. 반환값의 타입이 호환되는가?
 * 기준2. 매개변수의 타입이 호환되는가?
 */

// 기준1. 반환값이 호환되는가?

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // error 'A' 형식은 'B' 형식에 할당할 수 없습니다.
// number 타입을 number literal 타입으로 할당할 수 없다.
//* 반환값 끼리의 다운케이스팅이 되면 호환이 안된다고 평가함

// 기준2. 매개변수의 타입이 호환되는가?
// 2-1.  매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // error 'D' 형식은 'C' 형식에 할당할 수 없습니다.
//* 매개변수를 기준으로 평가할 때는 업케이팅일 경우 호환이 안된다고 평가함

d = c;
//* 매개변수를 기준으로 평가할 때는 다운케이팅일 경우 호환이 가능하다고 평가함

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let amimalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// amimalFunc = dogFunc;
//* 매개변수를 기준으로 평가할 때는 업케이팅일 경우 호환이 안된다고 평가함

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// dogFunc = amimalFunc; // error 'Animal' 형식은 'Dog' 형식에 할당할 수 없습니다.

// 2-2. 매개변수의 개수가 다를 때
//* 매개변수의 갯수가 다를 때에는 할당하려고 하는 쪽의 함수의 타입의 매개변수의 갯수가 더 적을 때에만 호환이 가능하다고 평가함

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
