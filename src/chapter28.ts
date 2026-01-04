/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
//* 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 필수 매개변수는 선택적 매개변수 뒤에 오면 안된다.
 */

function introduce(name = '정덕수', age: number, tail?: number) {
  // tail? 선택적 매개변수 > number | undefined 타입
  // tail 연산을 하기 위해서는 타입 가드 typeof tail === 'number' 체크
  console.log(`name: ${name}`);
  if (typeof tail === 'number') {
    console.log(`tail: ${tail + 10}`);
  }
}

introduce('정덕수', 27, 181);

introduce('정덕수', 27);

// REST 매개변수
// 함수의 매개변수를 배열로 받는다.

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => {
    sum += it;
  });
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
