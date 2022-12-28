const btns = document.querySelector('.wrapper-btns')
const result = document.querySelector('.calc-result')

let value = ''

btns.addEventListener('click', e => {
    if (!e.target.classList.contains('calc-btn')) {
        return
    };

    if (e.target.textContent == 'C') {
        value = '0'
        result.textContent = value
    } else if (e.target.textContent == 'X') {
        value = value.slice(0, -1)
        result.textContent = value
    } else if (e.target.textContent == '=') {
        value = eval(value);
        result.textContent = value;
    } else {
        value += e.target.textContent
        result.textContent = value
    }

    if (value.slice(0, 1) == '0') {
        value = ''
        result.textContent = value
    }
})