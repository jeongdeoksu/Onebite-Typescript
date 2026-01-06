/**
 * 인터페이스와 클래스
 * 인터페이스는 무조건 public
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// class Character implements CharacterInterface {
//   name: string;
//   moveSpeed: number;

//   constructor(name: string, moveSpeed: number) {
//     this.name = name;
//     this.moveSpeed = moveSpeed;
//   }

//   move(): void {
//     console.log(`${this.moveSpeed} 속도로 이동`);
//   }
// }

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
