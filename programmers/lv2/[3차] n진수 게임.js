function solution(n, t, m, p) {
    var answer = "" //리턴할 문자열
    var turn = 1 //현재 차례 1 ~ m까지
    var now = 0 //현재 숫자 0부터 시작
    while(true){
        var numString = now.toString(n).split(''); //현재 숫자를 N진수로 바꾼후 문자배열로 변환
        for(let i=0; i<numString.length; i++){
            if(turn==p){
                answer+=numString[i].toUpperCase();
                if(answer.length>=t) return answer;
            }
            turn = turn == m ? 1 : turn+1; 
        }
        now += 1;
    }
}
