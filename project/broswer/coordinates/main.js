(function(){
  const $startButton = document.querySelector('.start');
  const $stopButton = document.querySelector('.stop');
  const $corrdinatesWrap = document.querySelector('.corrdinates');
  const $target = document.querySelector('.target');
  const $corrdinatesInfo = document.querySelector('.target span');
  const $targetLineVertical = document.querySelector('.vertical');
  const $targetLinehorizontal = document.querySelector('.horizontal');


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

    $target.style.top = `${corrdinatesY}px`;
    $target.style.left = `${corrdinatesX}px`;

    $targetLineVertical.style.left = `${corrdinatesX}px`;
    $targetLinehorizontal.style.top = `${corrdinatesY}px`;

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
    printTargetInfo();
  }

  function init() {
    startGame();
    stopGame();
  }

  init();

})();