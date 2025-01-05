console.log("1");

setTimeout(() => console.log("2"), 3000); // 3초 후 실행

console.log("3");

// 1, 3, 2 순서로 출력됩니다. 2는 3초 뒤에 출력됩니다.
