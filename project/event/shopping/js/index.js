(function() {
  const $itemWrap = document.querySelector('.items');
  const $input = document.querySelector('.form__input');
  const $addButton = document.querySelector('.form__button');

  function onAdd() {
    const text = $input.value;

    if(text === '') {
      $input.focus();
      alert('텍스트를 입력 하시오');
      return;
    }
    
    const item = createListitme(text);
    $itemWrap.appendChild(item);

    item.scrollIntoView({block: 'center'});
    $input.value = '';
    $input.focus();
    
    $itemWrap.addEventListener('click', hadleClickEvent);
  }

  function createListitme(text) {
    const $itemRow = document.createElement('li');
    $itemRow.setAttribute('class', 'item item__row');

    const $itemName = document.createElement('span');
    $itemName.setAttribute('class', 'item__name');
    $itemName.innerText = text;

    const $itemDelete = document.createElement('button');
    $itemDelete.setAttribute('class', 'button item__delete');
    $itemDelete.innerHTML = '<i class="fas fa-minus-circle"></i>';

    $itemRow.appendChild($itemName);
    $itemRow.appendChild($itemDelete);
    $itemWrap.appendChild($itemRow);
    
    return $itemRow;
  }

  function hadleClickEvent(event) {
    const currentItem = event.target.closest('.item__delete');
    
    if(currentItem) {
      const el = currentItem.closest('.item__row');
      $itemWrap.removeChild(el);
    }
  }

  function init() {
    $input.addEventListener('keypress', (event) => {
      if(event.key === 'Enter') {
        onAdd();
      }
    });

    $addButton.addEventListener('click', () => {
      onAdd();
    });
  }

  init();

})();
