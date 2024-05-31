
// 코딩온 배열 만들기 & 합 구하기 과제 

let arr = [];
for(let i=1;i<=100;i++){
    arr.push(i);
}
console.log(arr);

// 배열의 합
let arrSum=0;
for(let i=0;i<arr.length;i++){
    arrSum += arr[i];
}
console.log(arrSum);

console.log('==========');

let arrSum2=0;
for(i of arr){
    arrSum2 += i;
}
console.log(arrSum2);

console.log('==========');

let arrSum3=0;
arr.forEach((i) => {
    arrSum3 += i;
})
console.log(arrSum3);

console.log('==========과제2');

// 내장 메서드 실습 과제 

let fruits1= ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고']
let fruits2= ['사과', '파인애플','수박','참외','오렌지', '망고']

let same = [];
let diff = [];

for(let i=0; i<fruits1.length;i++){
    if(fruits2.includes(fruits1[i])){
        same.push(fruits1[i])
    }else{
        diff.push(fruits1[i])
    }
}

for(let i=0;i<fruits2.length;i++){
    if(!fruits1.includes(fruits2[i])){
        diff.push(fruits2[i])
    }
}


console.log(same);
console.log(diff);