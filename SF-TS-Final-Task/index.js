// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName('LI');
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
function attachCloseButtonEvents() {
    var closeButtons = document.getElementsByClassName('close');
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function () {
            var li = this.parentElement; // Уточняем тип
            if (li) {
                li.style.display = 'none'; // Скрываем элемент
            }
        });
    }
}
// Initial attachment of close button events
attachCloseButtonEvents();
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement('li');
    var input = document.getElementById('myInput');
    if (!input)
        return; // Проверка на наличие input
    var inputValue = input.value.trim(); // Убираем пробелы
    if (inputValue === '') {
        alert('You must write something!'); // Проверка на пустое значение
    }
    else {
        var textNode = document.createTextNode(inputValue);
        li.appendChild(textNode);
        var ul = document.getElementById('myUL'); // Явное приведение типа
        if (ul) {
            ul.appendChild(li); // Добавляем новый элемент списка
        }
        // Создание кнопки закрытия
        var span = document.createElement('SPAN');
        var closeText = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(closeText);
        li.appendChild(span);
        // Привязываем событие к кнопке закрытия
        span.addEventListener('click', function () {
            var li = this.parentElement;
            if (li) {
                li.style.display = 'none';
            }
        });
    }
    input.value = ''; // Очищаем поле ввода
}
