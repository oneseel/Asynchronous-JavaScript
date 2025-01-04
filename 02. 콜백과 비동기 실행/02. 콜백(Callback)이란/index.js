function sayHello(name) {
  console.log(`Hello ${name}`);
}

function sayGoodbye(name) {
  console.log(`Goodbye ${name}!`);
}

function printMessage(func, name) {
  console.log("Printing message...");
  func(name);
}

// 다른 함수의 아규먼트로 전달되는 함수를 콜백이라고 한다.
printMessage(sayHello, "JavaScript!");
