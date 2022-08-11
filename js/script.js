const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    items = document.querySelectorAll('.menu__link'),
    links = document.querySelectorAll('.promo__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

items.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

links.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
        link.classList.add('btn');
        links[index === 0 ? index + 1 : index - 1].classList.remove('btn');
    });
});

const counters = document.querySelectorAll('.progress__wrapper-value'),
    lines = document.querySelectorAll('.progress__wrapper-percentage');

counters.forEach((item, index) => {
    if (parseInt(item.innerHTML) >= 0 && parseInt(item.innerHTML) <= 100) {
        lines[index].style.width = item.innerHTML;
        return;
    }
    item.innerHTML = 'Error';
});


$(document).ready(function () {
    // PHP mailer
    $('form').submit(function (e) {
        //Событие submit - отправка заполненной формы
        e.preventDefault(); //Отключает стандартное поведение браузера - перезагрузка при отправке формы.
        $.ajax({
            //Метод для отправки формы
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize(), //Подготовка информации из формы для отправки на сервер в нужном формате
        }).done(function () {
            //После выполнения прерыдущей операции, выполнить следующее
            $(this).find('input').val(''); //Очистка всех инпутов после отправки
            $('form').trigger('reset'); //Очистить все формы
        });
        return false;
    });
});
