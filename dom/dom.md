# DOM (Document Object Model)

## DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

## DOM API
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API



자신들만의 오브젝트로 변환하는 것 
자바스크립트 -> Node로 변환하는 것 


Node > EventTarget 상속한다. 
노드의 종류는 굉장히 다양하다

HTMLElemnt 
어떤 태그를 사용하느냐에 따라서 달라진다.

모든 태그의 요소는 HTML element > element > node > event Target이다.

DOm Tree 
자신들만의 오브젝트로 트리로 변화가 된다.

HTML안에도 상응하는 DOM요소들이 있다는 것이다.

브라우저가 실행될때

      Window 
dom   BoM  javascript 
document 

## Dom
모든 Node는 Event Target 이다.

eventTarget가 제공하는 API이다.
addEventListerner()
remvoeEventListerner()
dispathEvent()

Node
https://developer.mozilla.org/en-US/docs/Web/API/Node 

Event Target
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

Node 

console.log($0.nodeChild .. ect);
노드에 관련된 것들 콘솔로그를 찍어본다.?

## CSSON css Object Model

DOM + css = CSSON

exteral, embeded, inline, user-agent stylesheet


CSSON
https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model


## Render Tree

Dom + CSSON  = Render Tree 

dom 불러오고 Css불러오고  Render Tree(사용자에게 궁극적으로 보이는 것) 만들어지는 것이다.
display: none은 Render Tree에는 없다.

head에 들어가는 것들은 meta, title, link 등등 이런 부분들은 Render Tree에 포함되지 않는다.
사용자에게 보여지는 부분이 아니니까

## 성능보장 렌더링 순서 

https://developers.google.com/web/fundamentals/performance/critical-rendering-path

Critical rendering path
request/response > loading > scripting > rendering > layout > painting

operation 

layout -> paint -> compostion

layout - 큰 레이어 위치 잡고
paint - 레이어 끼리 뭉쳐서 하나  레이어기능을 가지고 부분을 고쳐서 나가는 성능개선을 위함
composition - 미리 준비한 레이아웃을 순서대로 함께모아서 표기해는 것이다.

.
포인트 
construction
time to render 
불필요한, wrapping 요소 없애고 요소들을 작게하고, 쓸때없는 규칙들을 많이 만들면 안된다.

operation 
paint의 과정이 많이 일어 나면 안된다.
layout를 완전 포지션을 바꾸게 되면 위치가 변경이되는 부분은 제일 최악인 경우다.

javascript나 Css로 dom요소를 조작할때 composition만 다시 일어난다면 제일 베스트 
paint가 다시 일어난다면 썩 좋지는 않는다.
layout을 일어나게 한다면 정말 최악이구 애니메이션을 다시 고려해야하는 대상이 된다.


## 디버깅 툴 layouts
확인이 가능하다.
will-change 남용은 안된다. 성능의 대한

## CSS triggers 

애니메이션을 사용할때에 경우를 고려하면서 생각한다.
Blink , V8=> 크롬
Gecko > 파이어폭스
webkit > IOS 사파리에서 사용하는 것 
EdgeHTML > 크롬 엔진을 사용한다. 오랜된 엣지

디폴트
change from default

주기적으로 
Subsequent updates 

움직일때는 transform 값을 넎은 것이 좋다.
http://csstriggers.com/

그래서 최악 > 레이아웃을 변화하게 하는 요소 
wdith, height 등등 확인하면서 사용한다.

## 성능 개선 기능 (개발툴 사용하여)
performance
- 모든일, 상태 이런 것들 
- Recoding 버튼을 눌러서 > 상태를 보는데 부분적으로 상태가 가능한떼
1초당 > 16ms동안 이루어져야한다. 16ms넘어가면 사용자가 힘들어한다.
상세하게 우리가 성능에 대한것들 

크롬 개발 툴 command shif p 
Rendering - show layout shift regions > 레이아웃이 어떻게 발생하는지 보여준다.


## DOM요소 조작
선택적으롷 것에 엄청 유용하다.
querySelector를 사용할때에 속성값까지 제어가 가능하다.
querySelector('img[src=특정 이미지 가지고 온다 ]');

class 
querySelector권장>
setAttribute('class', 'class name')
insertBefor(해당, 그것위에 올리는 것); 원하는 곳에 동적으로 추가한다.
append vs appendChild 차이점 

innerHTML = ``;
innerHTML vs textContent
상황에 따라서 


shoppingList

플러스 버튼을 눌러서 작성을 하고,
리스트가 찍히고, 
버튼을 클릭하면 삭제가 되고
입력창에 엔터하면 찍히고,

> ciritical rendering
https://developers.google.com/web/fundamentals/performance/critical-rendering-path