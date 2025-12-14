//* 18. void와 never 타입

// void
// 함수에서 반환값이 없을 때

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
a = 1;
a = 'hello';
a = {};
a = undefined;

// undefined 나 null은 꼭 return으로 반환해야 됨
function func3(): undefined {
  console.log('hello');
  return;
}

function func4(): null {
  console.log('hello');
  return null;
}

// never
// 존재하지 않은
// 불가능한 타입

function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error('error');
}

let a: never;

a = 1;
a = 'hello';
a = {};
a = undefined;
a = null;
a = true;
a = () => {};
