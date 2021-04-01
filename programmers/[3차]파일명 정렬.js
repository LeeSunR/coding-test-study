function solution(files) {
  // 대소문자는 신경쓰지 x
  // 만약 head에서 다른 문자열이 나왔을 경우 A-F순으로(대소문자 구별 x) 정렬 아닐경우 숫자에서 비교
  // 숫자 - 2 vs 02 -->  02 먼저 그 외 앞의 0은 없는 셈

  //1. array의 문자열 length 확인 후 같은 것들인지 확인 (대소문자 구별 x)
  //2. 다 같다 -> 숫자들 비교
  //   다 같지 않다 -> 문자 비교 후 숫자 비교
  //    img12.png 라면 --> ["img","1"]
  //     F-5 Freedom Fighter 라면  --> ["F-","5"]
  let answerWrap = files.map((file, index) => ({ file, index }));
  const compare = (a, b) => {
    const reg = /(\D*)(\d*)/i;
    const A = a.match(reg);
    const B = b.match(reg);
    const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const compareNumber = (a, b) => {
      return parseInt(a) > parseInt(b) ? 1 : parseInt(a) < parseInt(b) ? -1 : 0;
    };
    return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead;
  };
  answerWrap.sort((a, b) => {
    const result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  });
  return answerWrap.map((answer) => answer.file);
}
