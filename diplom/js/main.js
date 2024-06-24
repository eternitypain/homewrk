(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 1,
        pagination: {
            el: ".swiper-scrollbar",
            type: "progressbar",
        },
    });

    // модалка хедер
    const modal = document.querySelector('.modal__window-opened');
    const openModalButton = document.querySelector('.burger__right-logo');
    const closeModalButton = document.querySelector('.modal__window-control-icon');
    const cityLinks = document.querySelectorAll('.modal__item a');
    const cityNameElement = document.querySelector('.nav__link-right-city');

    // открытие модального окна
    openModalButton.addEventListener('click', function () {
        modal.classList.add('is-visible');
    });

    // закрытие модального окна
    closeModalButton.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем действие по умолчанию для ссылки
        modal.classList.remove('is-visible');
    });

    // изменение названия города
    cityLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем действие по умолчанию для ссылки
            const cityName = this.textContent;
            cityNameElement.textContent = cityName;
            modal.classList.remove('is-visible');
        });
    });

    //модалка мейн
    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('trialLessonModal');
        const openModalButton = document.querySelector('.trial__button');
        const closeModalButton = document.querySelector('.close-button');

        // открытие модального окна
        openModalButton.addEventListener('click', function () {
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('is-visible');
            }, 10);
        });

        // закрытие модального окна
        closeModalButton.addEventListener('click', function () {
            modal.classList.remove('is-visible');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        });

        // закрытие модального окна при клике вне его
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.classList.remove('is-visible');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 500);
            }
        });
    });
    // Аккордеонннн

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contactForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Предотвращаем отправку формы по умолчанию

            // Проверка валидности формы
            if (form.checkValidity()) {
                // Если форма валидна, можно отправить данные на сервер или выполнить другие действия
                // Например, отправка данных на сервер через fetch или XMLHttpRequest

                // Очистка формы после отправки
                form.reset();

                // Сообщение об успешной отправке (опционально)
                alert('Форма успешно отправлена!');
            } else {
                // Если форма не валидна, можно показать сообщение об ошибке (опционально)
                alert('Пожалуйста, заполните все поля корректно.');
            }
        });
    });

//бургеррррррррррррррррррр

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger__header-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Маскаааа для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()
