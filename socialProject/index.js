'use strict'

const BTN = document.querySelector('#sendList'),
      VALUE = document.querySelector('#addList'),
      CONTENT = document.querySelector('.wrapper__content-lists'),
      LISTNONE = document.querySelector('.wrapper__content-none'),
      LISTNONES = document.querySelector('.wrapper__content-nones'),
      LI = document.querySelector('.wrapper__content-list'),
      FINISHLIST = document.querySelector('.wrapper__content-finished');


//  Добавление задачи в список
BTN.addEventListener('click', addLi)

// Удаление задач в списке
CONTENT.addEventListener('click', removeLi)
FINISHLIST.addEventListener('click', removeLi)

// Завершение задачи в списке
CONTENT.addEventListener('click', finishedWork)

// Очищение значение в инпуте при клике
VALUE.addEventListener('click', () => {
    if (VALUE.value == 'ВЫ НЕ ЗАДАЛИ НАЗВАНИЕ') {
        VALUE.value = ''
    }
})


function addLi (event) {
    event.preventDefault()

    if (!VALUE.value == '') {
        const createLi = `
        <li class="wrapper__content-list">
            ${VALUE.value}
            <div class="list-block">
                <span class="delete">-</span>
                <span class="add">+</span>
            </div>
        </li>
        `

        if (CONTENT.children.length > 0) {
            LISTNONE.style.display = 'none'
        }

        CONTENT.insertAdjacentHTML('afterbegin', createLi)
        VALUE.value = ''
        VALUE.focus()
    } else {
        VALUE.value = 'ВЫ НЕ ЗАДАЛИ НАЗВАНИЕ'
    }
}

function removeLi (event) {
    if (event.target.classList.contains('delete')) {
        (event.target.closest('.wrapper__content-list')).remove()
    }

    if (FINISHLIST.children.length == 0) {
        titleFinishedWorks.style.display = 'none'
    }
}

function finishedWork (event) {
    if (event.target.classList.contains('add')) {

        const li = event.target.closest('.wrapper__content-list')
        li.querySelector('.add').remove()
        li.classList.add('finished')
        FINISHLIST.append(li)

        if (CONTENT.children.length < 2) {
            LISTNONE.style.display = 'block'
        }

        if (FINISHLIST.children.length > 1) {
            LISTNONES.style.display = 'none'
        }
    }
}