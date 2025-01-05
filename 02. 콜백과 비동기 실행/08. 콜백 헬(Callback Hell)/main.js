import { getEmployees, json, groupEmployees } from "./function.js";

/**
 * 콜백 헬에 대한 설명:
 * - 콜백 헬이란 비동기 작업에서 콜백 함수가 여러 번 중첩되어 코드의 가독성이 떨어지는 문제를 말합니다.
 * - 이해하기 어렵고 디버깅이 힘들며, 코드의 유지보수성이 낮아지는 단점이 있습니다.
 * - 이러한 문제를 해결하기 위해 Promise, async/await와 같은 대안이 등장했습니다.
 */

// 콜백 헬 문제를 보여주는 예제
// 순차적으로 getEmployees, json, groupEmployees를 호출하며 데이터 처리를 진행
// 콜백이 중첩되어 코드가 읽기 어렵고 유지보수가 힘들어지는 문제 발생
getEmployees((response) => {
  console.log("Step 1: Received employee data.");
  json(response, (data) => {
    console.log("Step 2: Parsed JSON data.");
    groupEmployees(data, (result) => {
      console.log("Step 3: Grouped employees by department.");
      console.log(result);
    });ㅊ
  });
});