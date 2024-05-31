// 반복문

// for 문

for(let i=0; i<10;i++){
    console.log('안녕', i)
}

// 1~5 출력
for(let i=1;i<6;i++){
    console.log(i)
}

console.log("=================")
// 5 ~ 1
for(let i=5; i >0; i--){
    console.log(i)
}

console.log("=================")
// 1부터 n까지의 합 구하기
let n=10;
let sum =0;
for(let i=1; i<=n;i++){
    sum += i;    
}
console.log(sum);

console.log("=================")

// 1 ~ 20까지 숫자를 반복
// 1 ~ 20 중에 짝수 일때의 합
// for , if 문 중첩
let evenSum =0;
for(let i=1; i<=20; i++){
    if(i%2===0){
        evenSum +=i;
    }
}
console.log(evenSum);

console.log("=================")

// while 문

let index = 0;
while(index <10){
    console.log('안녕', index);
    index += 1;
}

let index2 = 0;
while(true){
    console.log('Hi', index2);
    index2 +=1;
    if(index2 ===10){
        break;
    }
}

console.log("========while 구구단=========")

// while 문 이용 구구단
let i= 2, j = 1;
while(i<10){
    while(j<10){
        console.log(`${i}단 : ${i} x ${j} = ${i*j}`);
        j++;
    }
    i++;
    j=1;
}

console.log("=========for 구구단========")


for(let i=2;i<10;i++){
    for(let j=1;j<10;j++){
        console.log(`${i}단 : ${i} x ${j} = ${i*j}`);
    }    
    
}

console.log("=================")


// do ~ while 문
/*
- JS에서 사용되는 반복문 중 하나
- 조건이 참인지 여부에 상관없이 코드블록을 최소 한번 실행한 후 조건 검사
- 즉) 항상 코드 블록을 한번 실행한 다음, 조건이 참인 동안 반복진행
*/

// do{
//     // 실행할 code block
// }while(조건);

// 예시 1
// let g = 1;
// do{
//     console.log(g);
//     g++;
// }while(g<=5);

// 예시 2
// let number;

// do{
//     number = parseInt(prompt("10보다 큰 숫자를 입력하세요."), 10);
// }while(number <= 10);
// console.log("입력한 숫자 : ", number);


// ============================
// break & continue
// 반복문에서 사용되는 제어문

// 1. break
// 반복문을 중단하고 빠져나옴

// 2. continue
// 현재 반복을 중지하고 다음 반복으로 넘어감

// 예시1
for(let i = 1; i <=10;i++){
    if(i === 5){ // i = 5일때 반복문 종료
        break;
    }
    console.log(i);
}
// 출력결과: 1, 2, 3, 4
console.log("=================")


// 예시2
for(let i=1; i<=5;i++){
    if(i === 3){ // i = 3일때 해당 반복 중지하고 다음으로 넘어감
        continue;
    }
    console.log(i);
}
// 출력결과: 1, 2, 4, 5

// 반복문 실습 1번

// let number = Number(prompt("숫자입력"))
// for(let i = 1; i<=number;i++){
//     if(i%13===0 && i%2===1){
//         console.log(i);
//     }
// }

console.log("=================1")

// 실습 2번
let sum2 = 0;
for(let i=0; i<=100;i++){
    if(i%2===0 || i%5===0){
        sum +=i;        
    }
}
console.log(sum);