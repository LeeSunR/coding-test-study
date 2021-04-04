function solution(bridge_length, weight, truck_weights) {
    let bridge = new Bridge(weight,bridge_length);
    
    while(true){
        let truck = truck_weights.shift();
        truck = truck?truck:0
        while(!bridge.nextTime(truck));
        if(truck_weights.length===0 && bridge.total===0) break; //대기중인 트럭과 다리위에 트럭이 없으면 break
    }
    return bridge.time;
}
class Bridge{
    
    //생성자
    constructor(weight,length) {
        this.weight = weight; //다리 허용 하중
        this.arr = new Array(length).fill(0); //다리길이 배열과 트럭이 없다는 의미로 0으로 초기화
        this.time = 0; //경과 시간
        this.total = 0; //다리위 트럭 무게 총 합계
    }
    
    /*  시간 경과 처리
    *   item = 대기중인 트럭 무게
    *   return = 트럭이 다리위로 올라가면 true
    */
    nextTime(item) {
        this.total -= this.arr.shift();
        this.arr.push(0);
        this.time++;
        if(this.total+item<=this.weight) { //무게를 계산해서 다리에 트럭 추가
            this.arr[this.arr.length-1]=item;
            this.total += item;
            return true;
        }
        else {
            return false;
        }
    }
}