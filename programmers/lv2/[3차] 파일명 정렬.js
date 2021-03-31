function solution(files) {
    //버블정렬
    for(let i=0; i<files.length-1; i++){
        for(let j=0; j<files.length-1-i; j++){
            if(compare(files[j],files[j+1])){
                let temp = files[j];
                files[j] = files[j+1];
                files[j+1] = temp;
            }
        }
    }
    
    return files;
}

// word2가 더 클경우 true
function compare(word1, word2) {
    let result = true;
    let slice_word1 = slice(word1);
    let slice_word2 = slice(word2);
    if(slice_word1[0] < slice_word2[0]) result = false;
    else if(slice_word1[0] > slice_word2[0]) result = true;
    else {
        if(slice_word1[1] < slice_word2[1]) result = false;
        else if(slice_word1[1] > slice_word2[1]) result = true;
        else result = false;
    }
    return result
}

//파일명을 HEAD, NUMBER, TAIL로 분리
//모든 문자 대문자로 변경
//숫자 0010 -> 10 으로 변경
function slice(word){
    let position = 0
    let result = ['','',''];
    word.split('').forEach((ch)=>{
        if(position==0 && ch!==" " && !isNaN(ch)) position = 1;
        if(position==1 && isNaN(ch)) position = 2;
        result[position]+=ch.toUpperCase();
    })
    result[1] = parseInt(result[1]);
    return result;
}