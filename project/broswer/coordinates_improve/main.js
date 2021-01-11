(function(){
  const $startButton = document.querySelector('.start');
  const $stopButton = document.querySelector('.stop');
  const $corrdinatesWrap = document.querySelector('.corrdinates');
  const $target = document.querySelector('.target');
  const $corrdinatesInfo = document.querySelector('.target span');
  const $targetLineVertical = document.querySelector('.vertical');
  const $targetLinehorizontal = document.querySelector('.horizontal');
  const $targetRect = $target.getBoundingClientRect();
  const $targetHalfWidth = $targetRect.width / 2;
  const $targetHalfHeight = $targetRect.height / 2;


  // game이 시작되면 좌표 구하는 함수 실행한다.
  function startGame() {
    $startButton.addEventListener('click', getCorrdinates);
    $corrdinatesWrap.addEventListener('mousemove', (event) => {
      getCorrdinates(event);
    });
  }


  function getCorrdinates(event) {

    showTarget();
  
    let corrdinatesX = event.clientX;
    let corrdinatesY = event.clientY;

    $target.style.transform = `translate(${corrdinatesX - $targetHalfWidth}px, ${corrdinatesY - $targetHalfHeight}px)`;
    $targetLineVertical.style.transform = `translateX(${corrdinatesX}px)`;
    $targetLinehorizontal.style.transform = `translateY(${corrdinatesY}px)`;

    $corrdinatesInfo.textContent = `corrdinates : ${corrdinatesX} * ${corrdinatesY}`;
  }

  function showTarget() {
    $corrdinatesWrap.classList.add('show');
  }

  function removeTarget() {
    $corrdinatesWrap.classList.remove('show');
    $corrdinatesInfo.textContent = '';
  }

  function stopGame() {
    $stopButton.addEventListener('click', removeTarget);
  }

  function init() {
    startGame();
    stopGame();
  }

  init();

})();