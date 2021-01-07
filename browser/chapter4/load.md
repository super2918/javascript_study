# Window load

* defer, ansyc 차이점
* body 끝 script를 쓰는 것과 head script를 defer와 또는 ansyc를 사용하는 것의 차이점
* DOMContentLoaded - docement 즉, html만 다 완료되면 이것이 호출된다.
* 'load'-  web페이지 안에 css, font, images등 모든 것들이 다 완료가 되면 그때 호출한다.
* 'beforeunload' - 브라우저 페이지가 이제 사용자가 페이지를 나갈때 그 나가기전에 불려지는 함수와 
* 'unload' - unload가 되었을 때 불려 호출된다.

로드가 되는 시점들을 잘 파악하고 있어야 할거 같다.