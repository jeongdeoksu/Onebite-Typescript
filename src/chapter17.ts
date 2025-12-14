//* 17. Any와 Unknown 타입

// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = true;
unknownVar = {};
unknownVar = () => {};

// unknownVar.toUpperCase();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
