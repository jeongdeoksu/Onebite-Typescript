/**
 * 접근 제어자
 * access modifier
 * > public private protected
 */

class Employee {
  // 필드 기본 값은 public
  private name: string;
  protected age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메소드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    this.age;
    // this.name;
  }
    
  }
}

const employee = new Employee('홍길동', 27, '개발자');
// employee.name = '홍길동';
//employee.age = 30;
employee.position = '디자이너';
