/**
 * 객체 타입간의 호환성
 * 구조적 타입 시스템
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog;
// dog = animal; // 'breed' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
};

book = programmingBook;
// programmingBook = book; // 'skill' 속성이 'ProgrammingBook' 형식에 없지만 'Book' 형식에서 필수입니다.

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs', // 객체 리터럴은 알려진 속성만 지정할 수 있으며 'Book' 형식에 'skill'이(가) 없습니다.
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs', // 객체 리터럴은 알려진 속성만 지정할 수 있으며 'Book' 형식에 'skill'이(가) 없습니다.
});

func(programmingBook);
