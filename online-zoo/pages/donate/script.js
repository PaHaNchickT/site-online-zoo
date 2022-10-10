const body = document.querySelector('body')
const input = document.querySelector('input')
const inputfocus = document.querySelector('input:focus')
const inputvalid = document.querySelector('input:valid')
const inputinvalid = document.querySelector('input:invalid')
const formbutton = document.querySelector('form > button')
const pagdiv = document.querySelectorAll('.pag > div')

////////////////////////////////////////////////base/////////////////////////////////////////////////////


document.querySelector('body').addEventListener("keyup", function (event) {
    if (document.querySelector('.email:focus') !== null && document.querySelector('.email:valid') !== null) {
        document.querySelector('.email').style.borderColor = 'green'
        document.querySelector('.email').style.color = 'green'
        document.querySelector('form > button').style.color = 'green'
        document.querySelector('form > button').style.borderColor = 'green'
        console.log('valid')
    }
    if (document.querySelector('.email:focus') !== null && document.querySelector('.email:invalid') !== null) {
        document.querySelector('.email').style.borderColor = 'red'
        document.querySelector('.email').style.color = 'red'
        document.querySelector('form > button').style.color = 'red'
        document.querySelector('form > button').style.borderColor = 'red'
        console.log('invalid')
    }
})

document.querySelectorAll('.count > div').forEach(e => {
    e.addEventListener('mouseover', function () {
        e.querySelector('.point').style.backgroundColor = 'orange'
    })
})

document.querySelectorAll('.count > div').forEach(e => {
    e.addEventListener('mouseout', function () {
        e.querySelector('.point').style.backgroundColor = 'yellow'
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////burger///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const burger = document.querySelector('.burger')
const burgerExit = document.querySelector('.burger-exit')
const menu = document.querySelector('.menu')
const burgerSplitter = document.querySelector('.burger-splitter')
const logo = document.querySelector('.logo')
const by = document.querySelector('.by')

burger.addEventListener('click', function () {
    burgerOpen()
})
burgerExit.addEventListener('click', function () {
    burgerClose()
})
burgerSplitter.addEventListener('click', function () {
    burgerClose()
})

function burgerOpen() {
    burger.style.display = 'none'
    menu.style.display = 'block'
    by.style.display = 'block'
    burgerSplitter.style.display = 'block'
    burgerSplitter.style.opacity = '0.5'
    burgerExit.style.display = 'block'
    menu.style.opacity = '0'
    by.style.opacity = '0'
    logo.classList.add('burger-on')
    logo.style.opacity = '0'
    setTimeout(() => {
        burgerSplitter.style.opacity = '0.5'
        menu.style.opacity = '1'
        by.style.opacity = '1'
        logo.style.opacity = '1'
    }, 50)
}

function burgerClose() {
    burger.style.display = 'block'
    menu.style.display = 'none'
    by.style.display = 'none'
    burgerSplitter.style.display = 'none'
    burgerSplitter.style.opacity = '0'
    burgerExit.style.display = 'none'
    logo.classList.remove('burger-on')
}

switch (window.screen.width) {
    case 1600: (function () {
        pageReload()
    })()
        break;
    case 1000: (function () {
        pageReload()
    })()
        break;
    case 640: (function () {
        pageReload()
    })()
        break;
    case 320: (function () {
        pageReload()
    })()
        break;
}

function pageReload() {
    if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
            localStorage['firstLoad'] = true;
            window.location.reload();
        }
        else
            localStorage.removeItem('firstLoad');
    }
}

window.addEventListener('resize', function () {
    pageReload()
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////amount///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const count = document.querySelector('.count')
const price = document.querySelector('.price')
const inputAmount = document.querySelectorAll('input')[0]
inputAmount.value = 100

count.childNodes.forEach((e1, i1) => {
    if (e1.className) {
        e1.addEventListener('click', function () {
            removeCh()
            price.childNodes.forEach((e2, i2) => {
                if (e2.className) {
                    if (i1 === i2) {
                        e2.classList.add('text-checked')
                        inputAmount.value = e2.textContent.slice(1, e2.textContent.length)
                    }
                }
            })
            e1.classList.add('checked')
        })
    }
})

function removeCh() {
    count.childNodes.forEach(e => {
        if (e.className) {
            e.classList.remove('checked')
        }
    })
    price.childNodes.forEach(e => {
        if (e.className) {
            e.classList.remove('text-checked')
        }
    })
}

inputAmount.addEventListener('input', function () {
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4)
    } else if (input.value < 25) {
        removeCh()
    }
    count.childNodes.forEach((e1, i1) => {
        if (e1.className) {
            price.childNodes.forEach((e2, i2) => {
                if (e2.className) {
                    if (i1 === i2) {
                        if (input.value === e2.textContent.slice(1, e2.textContent.length)) {
                            removeCh()
                            e2.classList.add('text-checked')
                            e1.classList.add('checked')
                        } else if ((input.value > 25 && input.value < 50) || (input.value > 50 && input.value < 100) || (input.value > 100 && input.value < 250) || (input.value > 250 && input.value < 500) || (input.value > 500 && input.value < 1000) || (input.value > 1000 && input.value < 2000) || (input.value > 2000 && input.value < 5000)) {
                            removeCh()
                        }
                    }
                }
            })
        }
    })
})