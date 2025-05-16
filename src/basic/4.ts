function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// check
console.log(showMessage("Hello World"));
console.log(calc(10, 20));
console.log(customError());
