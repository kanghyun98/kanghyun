---
date: '2021-08-31'
title: '함수 선언식과 함수 표현식 | 자바스크립트'
tags: ['JavaScript', 'Study']
summary: '함수표현식과 함수 선언식의 차이점 이해하기'
thumbnail: '../thumbnails/thumbnail_function-declarations-and-expressions.jpg'
---

자바스크립트를 배우고나서 **함수를 선언**할 때마다 최신 문법으로 알려진  `arrow function` 방법만을 사용해왔다. 그런데 다른 분들의 여러 코드들을 보다보니 함수를 선언하는 방식이 조금 다른 것을 볼 수 있었는데, 무엇이 어떻게 다른지 가볍게 정리해보았다. 



## 함수 선언식이란? (Function Declarations)

함수의 **정의부만 존재**하고, 별도의 할당 명령(변수 할당)이 없는 함수

**대부분의 일반 프로그래밍 언어에서 함수를 선언하는 방식**이다.

```js
function 함수명() { 
    ... 
}
```

```js
// 예시
function add(a, b) {
    return (a + b);
}
add(1, 2);	// 3
```



## 함수 표현식이란? (Function Expression)

자바스크립트 함수에서 사용가능한 선언 방식

이 방식이 웹 공부하면서 처음 본 함수 선언 방식인데, 함수의 사용 방법은 동일하다.

```js
const 함수명 = function() {
	...
}
```

```js
// 예시
const minus = function(a, b) {
    return (a - b);
}
minus(3, 1);	// 2
```



## 함수 선언식 vs 함수 표현식

두 방식이 생긴 것도 크게 다르지 않고 사용법도 동일해서 처음 배웠을 때 다르다는 것을 모르고 그냥 넘어간 것 같다. 하지만 다른 두 방식이 존재하는데에는 이유가 분명히 존재한다. 



### 이유1) 호이스팅

**함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않아 호이스팅 꼬임을 방지할 수 있다.**



#### 호이스팅이 뭘까?

위 말을 이해하기 위해 호이스팅이 뭔지 이해해보자.

자바스크립트는 코드를 실행할 때, 실행할 코드에 제공할 환경 정보들을 모아놓은 객체인 실행 컨텍스트를 활성화시키는데, 그 중 변수 정보를 수집하는 과정을 '호이스팅'이라고 한다.

호이스팅에 대해 간단하게 설명하자면, 우리가 프로그래밍하면서 선언한 변수들이 순서대로 코드의 맨 위로 자동으로 올라가게 되고,  그 순서대로 코드가 실행된다고 생각하면 된다. (물론 실제로 코드가 올라가는 것이 아닌 이해를 돕기 위해 올라간다고 표현하는 것이다.)

```js
console.log(a);	// "hello"
const a = "hello";

console.log(b);	// "test"
const b = "test";
```

```js
// 호이스팅: 위의 코드가 마치 아래와 같이 코딩된 것처럼 실행된다.(실제로 코드가 변하는 것x)
const a = "hello";
const b = "test";

console.log(a);
console.log(b);
```



#### 호이스팅과 함수 선언 방식

이제 호이스팅이 무엇인지 간단하게 이해했다면, 함수의 두 가지 선언 방식이 호이스팅이랑 무슨 상관인지 알아보자.

호이스팅은 함수를 선언할 때, **함수 선언식**으로 선언되어 있으면 함수를 통채로 위로 올린 것처럼 코드를 실행시킨다. 아래 예시를 통해 무슨 소리인지 이해해보자.

```js
add(10, 2);	// 12
function add(a, b) {
    return (a + b);
}
```

```js
// 호이스팅에 의한 코드 인식
function add(a, b) {
    return (a + b);
}
add(10, 2);
```

이렇기 때문에 add() 함수를 선언하기 전에 사용하여도 함수가 실행되는 것이다.



이번에는 **함수 표현식**으로 함수를 선언해보자. 

함수 표현식 방식으로 함수를 선언 시에는 함수 통채로 호이스팅되는 것이 아닌, 아무것도 할당되지 않은 변수만 선언된다. 아래 코드를 통해 이해해보자.

```js
add(10, 2);	// Uncaught ReferenceError: add is not defined
const add = function(a, b) {
    return (a + b);
}
```

같은 로직의 add() 함수를 선언 방식만 바꿔서 사용했는데, 이번에는 오류가 떴다. 왜 그런지 호이스팅이 어떤 방식으로 이루어졌는지를 봐보자.

```js
const add;

add(10, 2);
const add = function(a, b) {
    return (a + b);
}
```

 위와 같이 아무것도 아닌 변수 add를 함수처럼 실행시켰으니 오류가 뜨는 것이다.

(`arrow function`도 함수 표현식과 동일하게 호이스팅)



### 이유2) 클로저

**함수 표현식으로 클로저를 생성할 수 있다.**



#### 클로저는 뭘까?

클로저는 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우, A의 실생 컨텍스트가 종료된 후에도 변수 a가 유지되는 것이다. (원래 함수 실행 종료 시 함수 내부 변수 값은 사라지고, 외부에서 지역 변수를 사용할 수 없다.)

```js
const outer = function() {
    const a = 1;			// outer() 내부에서 선언된 변수 a
    const inner = function() {
        return ++a;			// inner() 내부에서 외부 변수 a 사용
    }
    return inner;			// 외부 변수 a를 사용하는 inner() 반환
}
const outer2 = outer();		// a가 유지된다. (함수 표현식을 이용한 Closure)

console.log(outer2());	// 2
console.log(outer2());	// 3
```



#### 클로저를 왜 사용할까?

위 예시를 통해 함수 표현식을 이용해서 클로저를 만들 수 있다는 사실을 알게 되었다. 그렇다면 클로저를 굳이 왜 사용하는지가 알고 싶은데, 이는 DOM 요소에 이벤트를 추가해보며 **클로저의 유무**에 따라 어떻게 달라지는지 확인해보자.

`h3 태그 클릭 시, 해당 요소가 몇 번째인지 확인할 수 있는 코드`이다. (console 창에서 따라해보자!)

클로저 사용x)

```js
const elementList2 = document.querySelectorAll('h3');	// 2개

for (i = 0; i < elementList2.length; i += 1 ) {
    elementList2[i].onclick = function (event) {			// 각 태그 클릭 시, 1,1 출력
        console.log(i);
    };	
}
```

클로저를 사용하지 않은 경우, 출력 함수가 실행되는 시점은 for문이 종료되고 난 후이기 때문에, 최종 값인 2가 모든 태그 클릭 시 실행된다.



클로저 사용)

```js
const checkTestNumber = function(index) {
    return function elementClickEvent(event) {	// elementClickEvent에서 외부 변수 접근
        console.log(index+'번째 h3 태그');
    }
}

const elementList = document.querySelectorAll('h3');	// 2개

for (i = 0; i < elementList.length; i += 1 ) {
    elementList[i].onclick = checkTestNumber(i);	// 각 태그 클릭 시, 0,1 출력
}
```

클로저를 사용한 경우, i 값이 `checkTestNumber`에 전달되고, 클로저인 `elementClickEvent`가 인자 값 index에 접근하여 우리의 의도대로 index 값이 출력된다.



위와 같이 함수 표현식이 함수 선언식보다 권장되긴 하나, 두 방식의 차이점을 충분히 알고 사용한다면 어떠한 방식을 사용하든 크게 문제될 일은 없고, 혼란을 방지하기 위해 일관된 방식을 이용해 코드를 짜는게 더 중요한 점인 것 같다. 협업을 위해서는 내가 원하는 방식만 사용할 수는 없기 때문에, 그 때를 대비해서 위 개념들을 알고 있다면 도움이 될 것 같다.