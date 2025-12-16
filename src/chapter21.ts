/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; Error
  // let str: string = unknownVar; Error
  // let bool: boolean = unknownVar; Error
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10; Error
  //   let never2: never = 'string'; Error
  //   let never3: never = true; Error
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar; Error
}
