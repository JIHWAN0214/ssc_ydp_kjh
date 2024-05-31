// 내장 메서드란?
// 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드
// 따로 설치하거나 추가 설정할 필요 없음

// 1. 문자열 관련 내장 메서드
// 문자열을 다루는데 유용한 기능들 제공

let str = 'Happy Birthday'
let str2 = '    Happy Birthday   '

// - 문자열 인덱싱
console.log(str[0]); // H
console.log(str[0] + str[12]); // Ha
console.log(str[0] + str[1] + str[8] +str[11]); // Hard

// - 문자열 길이 (length는 메서드가 아닌 속성)
console.log(str.length); // 14
console.log(str2.length); // 21

// - 대소문자 변환 메서드
console.log(str.toUpperCase()); // HAPPY BIRTHDAY
console.log(str.toLowerCase()); // happy birthday

// - 양끝 공백 제거 
console.log(str2.trim());
console.log(str2.trim().length); // 14

console.log('========================');


// indexOf() : 글자의 위치(인덱스) 찾기
// 위치: 0부터 시작
console.log(str.indexOf('y')); // 4
console.log(str.indexOf('i'));
console.log(str.indexOf(' ')); // 5
console.log(str.indexOf('v')); // 존재하지 않는 문자는 -1 반환
console.log(str.indexOf()); // 또한 매개변수에 아무 값도 없을때도 -1 반환

// slice() : 문자열 자르기
// 매개변수에 음수값이 들어간다면 뒤에서부터 숫자를 센다
console.log(str.slice(10)); // 10번위치의 글자부터 마지막 글자까지 슬라이싱해 출력
console.log(str.slice(1,5)); // 1번째 위치 글자부터 4번째 위치까지의 글자 출력
console.log(str.slice(-4)); // 뒤에서부터 셀때는 1부터 시작, 뒤에서 4번째 위치의 글자부터 끝글자까지 출력

console.log('========================');

// replace() : 문자열 바꾸기
console.log(str.replace('p', 'w')); // 첫 p만 w로 바뀜
console.log(str.replaceAll('p', 'w')); // 모두 바꾸기

// split() : 매개변수를 기준으로 문자열 쪼개서 배열로 변환(이때 매개변수값은 배열에서 제외)
let str3 = 'dinner';
console.log(str3.split('e'));
console.log(str3.split('n')); // ['di', '', 'er']

// repeat() : 매개변수값만큼 반복
console.log(str3.repeat(4));

console.log('========================');


// ==================================
// 2. 배열 관련 메서드
let arr = [1,2,3,4,5];
let arr2 = ['quokka', 'dog', 'koala', 'panda'];

// push() : 배열 맨 끝에 요소 추가
arr.push(6);
arr.push(10)
console.log(arr);

// pop() : 맨 끝의 요소 제거
arr.pop();
console.log(arr);

// unshift() : 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2);

// shift() : 맨 앞에 요소를 제거
arr2.shift();
console.log(arr2);

// length : 배열의 길이 변환
console.log(arr.length);

// include() : 괄호 안의 요소가 있는지 없는지 검사 후 true,false 반환
// if 문과 사용 가능
console.log(arr2.includes('cat'));
console.log(arr2.includes('dog'));

// reverse() : 배열 역순 변환
// console.log(arr.reverse());
console.log(arr); // 원본 배열이 변경됨

// join() : join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

console.log('==========================');

// 3. 메서드 체이닝
// 여러 메서드를 연결해서 사용할 수 있다
console.log('hello'.split('').reverse().join(''));
