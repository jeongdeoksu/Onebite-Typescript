//* Enum 타입

// 여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  KOREAN = 'ko',
  ENGLISH = 'en',
  CHINESE = 'zh',
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 0 : 관리자
  language: Language.KOREAN,
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 1 : 사용자
  language: Language.ENGLISH,
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 2 : 게스트
  language: Language.CHINESE,
};

console.log(user1);
console.log(user2);
console.log(user3);
