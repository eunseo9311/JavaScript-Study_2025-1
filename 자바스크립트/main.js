// 변수
let a = 1; //변경 불가
const b = 2; //변경 가능

Number //사칙연산도 다 가능하다

const c = 1;
const d = 1.1;

const zero = 1/0; //Infinity 어떠한 숫자를 넣더라도 이거보다 클 수 없다 무한대
//숫자로 존재할 수 없는 경우에는 Nan이 된다
// 'abc' ==> 숫자로 변경할 수 없음 ===> Nan
// console.log(Number('sss1123')) ===> Nan
console.log(zero);


Boolean
true / false
const x = true;
//조건문이라는 곳에서 사용을 한다~~~ㅇㅅㅇ


String
const bb ="hello world";
console.log(bb);

const rr ="hello";
const kk = "world";
console.log(rr + kk); //문자열을 합치기 가능하다
console.log(rr.length);
console.log(rr+kk.split(e)); //뭐를 기준으로 문자열을 나누는 것이다~
console.log(rr+kk.includes(e)); //Boolean 값으로 포함 여부를 알려준다

const grade = '5';
const text = "저는" + "grade" + "학년 입니다";
console.log(text);
console.log('저는 ${grade} 학년 입니다'); //이렇게 백틱을 넣어서 간단하게 만드는게 더 빠르다


Array
//사용법은 List에 가깝다
const n = [1,2,3,4,5];
const k = [1,2,3,"안뇽",5, True]; //배열 안에 정말 다양한걸 넣을 수 있다
console.log(n);
console.log(k.sort);
console.log(k.filter(v >= v,filter)); //이렇게 필터를 이용해서 더 큰 값만 알아볼 수도 있다
const nn = [1,2,3];
const pp = [4,5];
console.log(nn + pp); //배열끼리 더하는 것도 가능하다

//console.log(kk.map(v) =>
//{return v + 2}); 오류나니까 다시한번만 봅시다 ^^


Object; //객체!!!!!!!!를 잘 보는게 굉장ㅎㅣ중요하다
const p = {
    keyone: 'string',
    keytwo: 1,
    keythree: {
        true:
        [1,2,3]
    }
};

//사람에대한 정보를 담는 데이터같은거 전부 엵을 수 있는 방법?
//객체를 사용하면 바로 가능~

const 홍길동 = {
    age: 23,
    magjor: computer
};
홍길동.age;
홍길동['age'];
console.log(홍길동.age);

null; undefined;
//===> 비어 있는 값을 의미
//undefined ==> JS 비어 있는 값을 설명, 변수가 선언되었지만 값이 할당되지 않았을 때 자동으로 부여되는 값
//null ==> 의도적으로 비어 있음을 명시적으로 나타내기 위한 값, 객체를 명시적으로 비우거나 초기화할 때 사용
// null 은 값이 없음, undefined 은 값이 할당되지 않음


Function
function fn() {
    console.log("hello");

    const g = 1;
    const f = 2;

    return g+f;
}
const result = fn(); //함수에 대한 호출까지 해주면 끝
console.log(result);

//매개변수라는 개념
function fn(a,b) {} //이런식으로도 할수잇음


const re = () => {
    this;
    const v = 1;
    const m = 2;

    return v + m;
}

IIFE
//함수를 바로 실행시킬 수 있는 함수
(
    () => {
        console.log("hello");
    }
)();
//소괄호에 있는 내용을 바로 실행시켜볼 수 있다~


Conditional
//조건에 따른 분기를 처리할 수 있다

if (조건식 == 참) {
    console.log("참입니다.........")
} else {
    console.log("거짓입니도다.....")
}

if (1 == 2) {
    console.log("참입니다.........")
} else {
    console.log("거짓입니도다.....")
}

//조건 연산자가 굉장히 중요하다
//== 강제 형변환을 해서 값을 비교한다
// 1 == "1"
//=== 타입까지 비교를 진행한다
// 1 !=== "1"
const df = !True;
if(!df) {
    console.log("참입니다!")
}


// 조건문 & 함수 클린코드
function fun(num) {
    if (num>10){
        console.log("10보다 큽니다")
        return;
    } else if (num > 5){
        console.log("10보다 작고 5보다 크다")
        return;
    } console.log("5보다 작다")
}

//원래는 이런식으로 else를 써야 하는데 이렇게 else를 없애고 쓸수도 있다
function fuㅡ(num) {
    if (num>10){
        console.log("10보다 큽니다")
    } else if (num > 5){
        console.log("10보다 작고 5보다 크다")
    } else {
    } console.log("5보다 작다")
}