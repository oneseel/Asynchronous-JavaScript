# 비동기 실행의 특징

## 1. 비동기 함수의 콜백 실행 순서

비동기 함수는 이후에 있는 코드를 모두 실행한 후에 콜백을 실행합니다.

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');
```

### 실행 결과:
```
1
3
4
5
6
7
8
9
10
2
```

`setTimeout(() => console.log('2'), 0);`은 바로 실행하라는 뜻으로 작성되었지만, 
비동기 함수 이후에 있는 코드들이 모두 실행된 후에 콜백이 실행됩니다.

#### 특징:
- 비동기 함수의 콜백은 아무리 빨리 실행돼도 이후 코드가 모두 실행된 뒤에 실행됩니다.
- 이후 코드가 오래 걸리더라도 콜백은 마지막에 실행됩니다.

### 예시:
```javascript
console.log('1');

setTimeout(() => console.log('2'), 1000);

// 1초 이상 걸리는 작업들
```

위 코드에서도 `console.log('2')`는 가장 마지막에 실행됩니다.

### 참고:
- 대부분의 경우 비동기 작업이 더 오래 걸리기 때문에, 콜백의 실행 타이밍이 몇 밀리초 단위로 중요한 경우는 드뭅니다.

---

## 2. 실행할 콜백이 여러 개일 경우, 동기적으로 실행된다

비동기 작업의 콜백이 여러 개인 경우, 순차적으로(동기적으로) 실행됩니다.

### 예시:
```javascript
console.log('1');

setTimeout(() => console.log('2'), 1001);

setTimeout(() => console.log('3'), 1000);

console.log('4');
```

### 실행 순서:
```
1
4
3
2
```

#### 동작 원리:
- 두 번째 `setTimeout()`의 콜백이 실행되는 동안 첫 번째 `setTimeout()`의 타이머가 끝나면, 
  콜백은 순차적으로 실행됩니다.

---

## 3. 비동기 작업의 효율성
- 비동기 작업은 특정 시간을 기다리거나 사용자의 상호 작용, 웹 요청 결과를 기다리는 작업처럼 시간이 오래 걸리는 경우가 많습니다.
- 이러한 작업은 병렬적으로 처리되므로 충분히 효율적인 코드를 작성할 수 있습니다.

---