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

burger.addEventListener('click', function() {
    burgerOpen()
})
burgerExit.addEventListener('click', function() {
    burgerClose()
})
burgerSplitter.addEventListener('click', function() {
    burgerClose()
})

function burgerOpen() {
    menu.style.display = 'block'
    by.style.display = 'block'
    burgerSplitter.style.display = 'block'
    burgerSplitter.style.opacity = '0.5'
    burgerExit.style.display = 'block'
    logo.classList.add('burger-on')
}

function burgerClose() {
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
    console.log('jopa')
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