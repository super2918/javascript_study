(function() {
  const $input = document.querySelector('.input');
  const $comfirmButton = document.querySelector('.confirm');
  const $shoppingList = document.querySelector('.shopping-list');

  function makeShoppingItem() {
    const $item = document.createElement('li');
    const $itemText = document.createElement('p');
    const $removeButton = document.createElement('button');
    const $removeIcon = document.createElement('i');

    $item.setAttribute('class', 'item');
    $removeButton.setAttribute('class', 'button remove');
    $removeIcon.setAttribute('class', 'fas fa-trash-alt');

    $item.append($itemText);
    $item.append($removeButton);
    $removeButton.append($removeIcon);
    $shoppingList.append($item);

    const inputValue = $input.value;
    $itemText.textContent += inputValue;

    $removeButton.addEventListener('click', removeShoppingItem);
  }
 
  function removeShoppingItem(event) {
    const selector = event.target;
    selector.closest('li').remove();
  }

  function getShoppingList() {
    makeShoppingItem();
  }

  function handleClickEvent() {
    getShoppingList();
  }

  function init() {
    // event 등록
    $input.addEventListener('keydown', (event) => {
      const keycode = event.keyCode;

      if(keycode === 13) {
        getShoppingList();
        $comfirmButton.addEventListener('click', handleClickEvent);    
      }
    });

    // $comfirmButton.addEventListener('click', handleClickEvent);
  }

  init();

})();
