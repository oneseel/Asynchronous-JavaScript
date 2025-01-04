function forEach(array, callback) {
  for (let elt of array) {
    callback(elt);
  }
}

const words = ["JavaScript", "Java", "Python"];

// 배열의 요소를 출력하세요. Arrow Function을 사용하세요.
forEach(words, (word) => console.log(word));

// 배열의 요소를 대문자로 출력하세요. function 키워드로 함수를 선언하고 콜백으로 전달하세요.
forEach(words, (word) =>  console.log(word.toUpperCase()));
