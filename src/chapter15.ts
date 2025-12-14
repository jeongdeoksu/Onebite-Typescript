//* 15. 타입 별칭과 인덱스 시그니처

// 타입 별칭
type User = {
  id: number;
  name: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '이정환',
  birth: '2000-01-01',
  bio: '안녕하세요',
  location: '서울',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'KR',
  UnitedState: 'US',
  UnitedKingdom: 'UK',
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
