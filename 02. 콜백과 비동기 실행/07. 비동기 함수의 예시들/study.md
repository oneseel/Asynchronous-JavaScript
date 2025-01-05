# 비동기 함수 복습 및 예시

## 비동기 함수의 기본 동작

비동기 함수는 다음과 같은 흐름으로 동작합니다:
1. 비동기 함수 이전에 있는 코드 실행
2. 비동기 함수 실행: 특정 조건을 만족하면 콜백을 실행하도록 함
3. 비동기 함수 이후에 있는 코드 실행
4. 특정 조건이 만족되는 시점에 콜백 실행

예시:
```javascript
setTimeout(callback, delay);
```
- `setTimeout()` 이전의 코드 실행
- `setTimeout()` 함수 실행: `delay` 만큼 기다리는 타이머 시작
- `setTimeout()` 이후의 코드 실행
- `delay`가 지나면 `callback` 실행

---

## 1. `setInterval()` 함수

`setInterval()` 함수는 일정한 시간 간격을 두고 콜백을 반복적으로 실행합니다.

### 예시:
```javascript
console.log('Start');

setInterval(() => console.log('2초가 지났습니다'), 2000);

console.log('End');
```

### 실행 결과:
```
Start
End
2초가 지났습니다
2초가 지났습니다
2초가 지났습니다
...
```

- 콜백은 `interval`이 지난 후 처음으로 실행됩니다.
- 반복을 멈추려면 `clearInterval()`을 사용합니다.

### `clearInterval()` 예시:
```javascript
console.log('Start');

const intervalID = setInterval(() => console.log('2초가 지났습니다'), 2000);

// 7초 후에 `setInterval()` 해제
setTimeout(() => clearInterval(intervalID), 7000);

console.log('End');
```
- 7초 후에는 더 이상 콜백이 실행되지 않습니다.

---

## 2. DOM의 `addEventListener()` 함수

`addEventListener()`는 웹 페이지 요소에 상호 작용이 있을 경우 실행할 콜백을 등록합니다.

### 예시:
```javascript
const btn = document.querySelector('.my-btn');

btn.addEventListener('click', () => console.log('button clicked!'));
```

- `btn` 요소에 클릭 이벤트가 발생하면 콜백이 실행되어 `button clicked!`가 출력됩니다.

---

## 3. React의 `useEffect()` 함수

React의 `useEffect()` 함수는 특정 작업을 컴포넌트가 화면에 그려지는 시점에 실행합니다.

### 예시:
```javascript
function PostList() {
  useEffect(() => console.log('render finished!'), []);

  return (
    <div className="post-list">
      <div className="post-item">...</div>
      <div className="post-item">...</div>
      <div className="post-item">...</div>
    </div>
  );
}
```

- 컴포넌트가 화면에 렌더링된 후 `useEffect()` 콜백이 실행됩니다.
- 웹 리퀘스트 등의 작업을 통해 더 복잡한 동작을 구현할 수 있습니다.

---

## 4. Express의 `get()` 함수

Express의 `get()` 함수는 서버에서 특정 주소로 들어온 요청을 처리하는 콜백을 등록합니다.

### 예시:
```javascript
app.get('/hello', (req, res) => {
  res.send('Success!');
});
```

- `/hello` 주소로 GET 요청이 들어오면 콜백이 실행됩니다.
- 콜백은 요청 객체(`req`)와 응답 객체(`res`)를 파라미터로 받습니다.
- 응답 객체를 이용해 클라이언트로 적절한 응답을 보냅니다.

---

위에서 살펴본 비동기 함수들은 다양한 환경에서 활용되며, 각각의 동작 원리를 이해하면 더욱 효율적인 코드를 작성할 수 있습니다.
