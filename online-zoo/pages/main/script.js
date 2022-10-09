import animals from './animals.js';
// import vars from './style.sass';
// console.log(variables)

const body = document.querySelector('body')
const input = document.querySelector('input')
const inputfocus = document.querySelector('input:focus')
const inputvalid = document.querySelector('input:valid')
const inputinvalid = document.querySelector('input:invalid')
const formbutton = document.querySelector('form > button')
const pagdiv = document.querySelectorAll('.pag > div')

////////////////////////////////////////////////base/////////////////////////////////////////////////////

body.addEventListener("keyup", function (event) {
    if (inputfocus !== null && inputvalid !== null) {
        input.style.borderColor = 'green'
        input.style.color = 'green'
        formbutton.style.color = 'green'
        formbutton.style.borderColor = 'green'
    }
    if (inputfocus !== null && inputinvalid !== null) {
        input.style.borderColor = 'red'
        input.style.color = 'red'
        formbutton.style.color = 'red'
        formbutton.style.borderColor = 'red'
    }
})

pagdiv.forEach(e => {
    e.addEventListener('mouseover', function () {
        e.querySelector('.title').style.top = '0'
        e.style.backgroundSize = '110%'
        e.style.backgroundPosition = '-10px 0'
    })
})

pagdiv.forEach(e => {
    e.addEventListener('mouseout', function () {
        e.querySelector('.title').style.top = '50px'
        e.style.backgroundSize = '100.5%'
        e.style.backgroundPosition = '0 0'
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////pagination/////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const pagBox = document.querySelector('.pagBox')
const pagEl = document.getElementsByClassName('card1')[0]
const btnL = document.querySelector('.btnL')
const btnR = document.querySelector('.btnR')
const splitter = document.querySelector('.splitter')

/////////////////////////////////////////////////core////////////////////////////////////////////////

let divCustom
let divCenter = pagBox.childNodes[1]
let divAdd = pagBox.childNodes[3]
let isClicked = false
let n

pagFill('center')
pagFill('add')

btnL.addEventListener('click', function () {
    splitter.style.display = 'block'
    if (isClicked === false) {
        divAdd.style.transition = '0s'
        divAdd.style.left = '1193.6px'
        pagFill('add')
        setTimeout(() => {
            divAdd.style.transition = '1s'
            divAdd.style.left = '0'
            divAdd.style.opacity = '1'
            divCenter.style.left = '-1193.6px'
        }, 1)
        divCenter.style.opacity = '0'
        isClicked = true
    } else {
        divCenter.style.transition = '0s'
        divCenter.style.left = '1193.6px'
        pagFill('center')
        setTimeout(() => {
            divCenter.style.transition = '1s'
            divCenter.style.left = '0'
            divCenter.style.opacity = '1'
            divAdd.style.left = '-1193.6px'
        }, 1)
        divAdd.style.opacity = '0'
        isClicked = false
    }
    divCenter.addEventListener('transitionend', function () { splitter.style.display = 'none' })
})

btnR.addEventListener('click', function () {
    splitter.style.display = 'block'
    if (isClicked === false) {
        divAdd.style.transition = '0s'
        divAdd.style.left = '-1193.6px'
        pagFill('add')
        setTimeout(() => {
            divAdd.style.transition = '1s'
            divAdd.style.left = '0'
            divCenter.style.opacity = '0'
            divAdd.style.opacity = '1'
        }, 1)
        divCenter.style.left = '1193.6px'
        isClicked = true
    } else {
        divCenter.style.transition = '0s'
        divCenter.style.left = '-1193.6px'
        pagFill('center')
        setTimeout(() => {
            divCenter.style.transition = '1s'
            divCenter.style.left = '0'
            divAdd.style.opacity = '0'
            divCenter.style.opacity = '1'
        }, 1)
        divAdd.style.left = '1193.6px'
        isClicked = false
    }
    divCenter.addEventListener('transitionend', function () { splitter.style.display = 'none' })
})

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

function boxResize() {
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

    if (window.screen.width >= 1600) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 34)))
        divAdd.style.width = `${(pagEl.clientWidth + 34) * n}px`
        divCenter.style.width = `${(pagEl.clientWidth + 34) * n}px`
    } else if (window.screen.width >= 1000 && window.screen.width < 1600) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 4)))
        divAdd.style.width = `${(pagEl.clientWidth + 4) * n + 46}px`
        divCenter.style.width = `${(pagEl.clientWidth + 4) * n + 46}px`
    } else if (window.screen.width >= 640 && window.screen.width < 1000) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 4)))
        divAdd.style.width = `${(pagEl.clientWidth + 4) * n + 24}px`
        divCenter.style.width = `${(pagEl.clientWidth + 4) * n + 24}px`
    } else if (window.screen.width >= 320 && window.screen.width < 640) {
        n = Math.floor((pagBox.clientWidth / (pagEl.clientWidth + 4)))
        divAdd.style.width = `${(pagEl.clientWidth + 4) * n + 4}px`
        divCenter.style.width = `${(pagEl.clientWidth + 4) * n + 4}px`
    }
}

boxResize()

window.addEventListener('resize', function () {
    boxResize()
})

///////////////////////////////////////////filling/////////////////////////////////////

function pagFill(divType) {
    let count = []
    let i = 0
    let change = 0
    while (count.length < 7) {
        count.push(i)
        i++
    }
    i = 0

    if (divType === 'center') {
        divCustom = pagBox.childNodes[1]
    } else {
        divCustom = pagBox.childNodes[3]
    }

    animalChange()

    function animalChange() {
        let value = Math.floor(Math.random() * 7)
        if (typeof count[value] !== 'string') {
            count[value] = 'none'
            i++
            if ((i + change) < 12) {
                divCustom.childNodes[i + change].style.backgroundImage = `url(${animals[value]['pic']})`
                divCustom.childNodes[i + change].querySelector('div').style.backgroundImage = `url(${animals[value]['food']})`
                divCustom.childNodes[i + change].querySelector('div').querySelector('h6').textContent = animals[value]['name']
                divCustom.childNodes[i + change].querySelector('div').querySelector('p').textContent = animals[value]['loc']
                if (animals[value]['food'].slice(19, 23) === 'bana') {
                    divCustom.childNodes[i + change].querySelector('div').classList.add('banana')
                    divCustom.childNodes[i + change].querySelector('div').classList.remove('fish')
                } else {
                    divCustom.childNodes[i + change].querySelector('div').classList.remove('banana')
                    divCustom.childNodes[i + change].querySelector('div').classList.add('fish')
                }
            }
            change++
            animalChange()
        } else if ((typeof count[value] === 'string') && i < 7) {
            animalChange()
        }
    }

}