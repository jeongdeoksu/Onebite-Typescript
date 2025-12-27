/**
 * 타입 단언 (Type Assertion)
 */

type Person = {
  name: string;
  age: number;
};

/**
 * let person = {};
 * person.name = '이정환'; // Error: {} 형식에 'name' 속성이 없습니다.
 * person.age = 27; // Error: {} 형식에 'age' 속성이 없습니다.
 */

let person = {} as Person;
person.name = '이정환';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

/**
 * let dog: Dog = {
 *  name: '돌돌이',
 *  color: 'black',
 *  breed: '진도', // Error: 'breed' 속성이 'Dog' 형식에 없습니다.
 * }
 */

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog;

/**
 * 타입 단엉의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나,
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as String; // Error: 'number' 형식을 'String' 형식으로 변환한 작업은 실수일 수 있습니다. 두 형식이 서로 충분히 겹치지 않기 때문입니다. 의도적으로 변환한 경우에는 먼저 'unknown'으로 식을 변환합니다.

// let num4 = 10 as unknown as string;

/**
 * const 단언 (const assertion)
 */

let num4 = 10 as const;

let cat = {
  name: '냥냥이',
  color: 'black',
} as const;

cat.name = ''; // Error: 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

/**
 * Non Null 단언 (Non-Null assertion)
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: 'hello',
  author: '이정환',
};

const len1: number = post.author?.length; // Error: 'number | undefined' 형식은 'number' 형식에 할당할 수 없습니다.

const len2: number = post.author!.length;
