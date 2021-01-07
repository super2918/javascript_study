# Coordinates (좌표)

(0, 0) 

left, top
right, bottom (좌표에서 right, bottom / css와의 다른 의미)

 X : 수평 , Y: 수직 

 ## Element.getBoundingClientRect(); 
 
 - windo 위에서 얼마나 떨어져 있는지 요소 사이즈, 정보, top, left 값을 얻어온다.
 - bottom, right은 left에서, top에서 부터 시작해서 거리를 생각한다. css와 컨셉이 다르다.
 
page X, Y vs client X, Y 다르다.

event에는 client X, Y 값이 들어 있다. 사용자가 보는 페이지와 상관없이 브라우저에서 보이는 값부터 시작한다.
page X, Y는  페이지 자체에서 떨어져 있는 값을 말한다. 페이지 문서의 시작점부터 다르다.


![getBounding](https://mdn.mozillademos.org/files/17155/element-box-diagram.png);  