// 배열에서 반복문 사용하기
// 1. 기본 for 문
// 2. for of 문
// 3. forEach() 메서드

const fruits = ['사과', '배', '포도', '망고', '바나나'];
for(let f = 0; f<fruits.length;f++){
    console.log(fruits[f]);
}

console.log('======================');

// 공통 예제
const arr = [1,2,5,6,7];
const alphabets= ['a', 'b', 'c', 'd'];




// 1. 기본 for
for(let a=0; a < arr.length; a++){
    console.log(arr[a]);
}

console.log('======================');

// 2. for of
// 배열의 요소를 직접 참조하므로 인덱스 사용 필요 없음
// 순서가 있는 구조에 적합
// 배열 'alphabets'의 각 요소를 반복하면서 'alpha' 변수에 순서대로 할당하고
// 각각 요소에 대해 반복문의 코드블록을 실행한다.

for(let alpha of alphabets) {
    console.log('alpha > ', alpha);
}

console.log('======================');

// 3. forEach()
// 배열의 각 요소에 대해 지정된 함수를 실행
// 일반적으로 배열을 순회하면서 각 요소에 대해 
// 동일한 작업을 수행할 때 사용 

alphabets.forEach(function(alpha){
    // alpha : currentValue 의미. 반복하고 있는 현재 요소
    console.log(alpha);
})

alphabets.forEach(function(alpha, index){
    // alpha : currentValue 의미. 반복하고 있는 현재 요소
    // index : currentvalue의 인덱스(위치)
    console.log(alpha, index);
})

alphabets.forEach(function(alpha, index, arr){
    // alpha : currentValue 의미. 반복하고 있는 현재 요소
    // index : currentvalue의 인덱스(위치)
    // arr : forEach를 호출한 배열을 의미
    console.log(alpha, index, arr);
})


console.log('======================');


// map, filter, find 메서드
// 조건에 따라 요소를 변형하거나 선택

// 1. map
// 배열의 각 요소에 지정된 함수를 호출하고 그 결과로 새로운 배열 생성

const numbers = [1,2,3,4,5,];
const doubleNumbers = numbers.map(function(num){
    return num*2;
})
console.log(doubleNumbers);

// 2. filter
//  배열의 각 요소에 대해 지정된 함수를 호출하고 
// 그 결과가 'true'인 요소들로 이루어진 새로운 배열을 생성

const pracNumbers = numbers.filter(function(num){
    return num % 2 ===0;
})
console.log(pracNumbers);


// 3.find
// 조건을 만족하는 '첫 번째 요소' 찾아서 배열이 아닌 '값'으로 반환 
// 조건에 만족 -> 해당 요소 반환
// 조건에 불만족 -> undefined 반환
const pracNumbers2 = numbers.find(function(num){
    return num % 2 === 0;
})
console.log(pracNumbers2);

// 추가적으로 참고) for in
// object(객체)에 사용가능한 반복문
// Key로 접근, 객체의 key를 반복

const dog = {
    name: '태풍',
    gender:'male',
    info: 'cute'
}; // 객체의 키와 밸류 

for(let key in dog) {
    console.log(key, dog[key]);
    // object의 각 속성(key, value)에 대해 실행할 코드
    // key :  key 
    // value : dog[key]
}

// 참고
// 변수=key= 각 속성의 키를 저장하는 변수
// 객체=dog= 속성을 반복할 객체