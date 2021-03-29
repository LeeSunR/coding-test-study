function solution(n, t, m, p) {
  // n --> 진법
  // t --> 튜브 말해야 하는 결과값 갯수
  // m --> 인원 수
  // p가 튜브의 순서
  // n진수를  t * m 결과값까지 말해야하는데 튜브는 p번째로 순서대로 돌아가면서 말해야하는
  // 0, 1, 1, 0, 1, 1, 1, 0, 까지 얘기를 해야하는데 튜브의 순서가 p번째니까
  // 0 1 1 1
  var answer = "";
  let str = "";
  let lgh = t * m;
  let num = 0;
  while (str.length <= lgh) {
    str += num.toString(n).toUpperCase();
    num++;
  }
  for (let i = 0; i <= str.length; i++) {
    if (answer.length >= t) {
      break;
    } else {
      // 1. p번째인지 순서 확인해야 함
      if (i % m === p - 1) {
        answer += str[i];
      }
    }
  }
  return answer;
}
