(function() {
  const $itemWrap = document.querySelector('.items');
  const $input = document.querySelector('.form__input');
  const $addButton = document.querySelector('.form__button');

  /*
  1. 사용자가 입력한 입력 정보를 가져온다. >  사용자가 아무것도 입력하지 않았을 경우 vs 입력을 했을 경우 오류 적인 상황 > 사용자 관련하여
  2. 새로운 아이템을 만든다.
  3. Items를 컨테이너 안에 새로 만든 item을 추가한다.
  4. 새로 추가된 Item에 위치에 스크롤링
  5. 인풋을 초기화 한다.
  */

  function onAdd() {
    const text = $input.value;

    // 오류적인 상황
    if(text === '') {
      $input.focus();
      alert('텍스트를 입력 하시오');
      return;
    }
    
    const item = createListitme(text);
    $itemWrap.appendChild(item);

    item.scrollIntoView({block: 'center'}); // 사용자 편의
    
    $input.value = ''; // 초기화? 
    $input.focus();
  }

  function createListitme(text) {
    const $itemRow = document.createElement('li');
    $itemRow.setAttribute('class', 'item item__row');

    const $itemName = document.createElement('span');
    $itemName.setAttribute('class', 'item__name');
    $itemName.innerText = text;  // 사용자가 입력한 값을 전달하는 파라미터로 전달하는 것 

    const $itemDelete = document.createElement('button');
    $itemDelete.setAttribute('class', 'button item__delete');
    $itemDelete.innerHTML = '<i class="fas fa-minus-circle"></i>';
    
    $itemDelete.addEventListener('click', () => {
      $itemWrap.removeChild($itemRow);
    });

    $itemRow.appendChild($itemName);
    $itemRow.appendChild($itemDelete);

    $itemWrap.appendChild($itemRow);

    return $itemRow;
  }

  function init() {
    $input.addEventListener('keypress', (event) => {
      if(event.key === 'Enter') { // Enter key
        onAdd();
      }
    });

    $addButton.addEventListener('click', () => {
      onAdd();
    });
  }

  init();

})();
