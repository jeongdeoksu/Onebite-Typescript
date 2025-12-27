/**
 * 타입 추론
 */

let a = 10;
let b = 'hello';
let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterlood',
  },
  urls: ['https://winterlood.com'],
};

let { id, name, profile, urls } = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return 'hello';
}

let d; // 암묵적으로 any 타입으로 추론됨
d = 10; // 숫자 타입으로 진화
d.toFixed();
d.toUpperCase(); // error

d = 'hello'; // 문자 타입으로 진화
d.toUpperCase();
d.fixed(); // error

const num = 10; // 10 리터럴 타입
const str = 'hello'; // 'hello' 리터럴 타입

let arr = [1, 'string']; // (number | string)[] Union 타입
