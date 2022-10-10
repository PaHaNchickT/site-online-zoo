import animals from './animals.js';
import feedback from './feedback.js';

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
const pagSplitter = document.querySelector('.pag-splitter')

/////////////////////////////////////////////////engine////////////////////////////////////////////////

let divCustom
let divCenter = pagBox.childNodes[1]
let divAdd = pagBox.childNodes[3]
let isClicked = false
let n

pagFill('center')
pagFill('add')

btnL.addEventListener('click', function () {
    pagSplitter.style.display = 'block'
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
    divCenter.addEventListener('transitionend', function () { pagSplitter.style.display = 'none' })
})

btnR.addEventListener('click', function () {
    pagSplitter.style.display = 'block'
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
    divCenter.addEventListener('transitionend', function () { pagSplitter.style.display = 'none' })
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
    fbBtn.style.left = '2px'
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////feedback//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const fbBtn = document.querySelector('.fb-btn')
const fbBase = document.querySelector('.slider-btn')
const fbBg = document.querySelector('.slider-bg')
const sliderItems = document.querySelector('.slider-itms')
const userZero = document.querySelector('.user0')
const fbExit = document.querySelector('.fb-exit')
let step

/////////////////////////////////////////////fg-btn-engine/////////////////////////////////////////////

function feedBack(event) {
    step = (fbBase.offsetWidth - fbBtn.offsetWidth / 2 + 8) / 8
    if ((event.force === 1 || event.which === 1) && (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 0) && (Math.round(event.clientX - fbBase.getBoundingClientRect().left + fbBtn.offsetWidth / 2) <= 598.5)) {
        if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 0 && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < step) {
            fbBtn.style.left = '2px'
            fbFill(0)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 2 * step) {
            fbBtn.style.left = `${step}px`
            fbFill(1)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 2 * step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 3 * step) {
            fbBtn.style.left = `${2 * step}px`
            fbFill(2)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 3 * step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 4 * step) {
            fbBtn.style.left = `${3 * step}px`
            fbFill(3)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 4 * step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 5 * step) {
            fbBtn.style.left = `${4 * step}px`
            fbFill(4)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 5 * step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 6 * step) {
            fbBtn.style.left = `${5 * step}px`
            fbFill(5)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 6 * step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 7 * step) {
            fbBtn.style.left = `${6 * step}px`
            fbFill(6)
        } else if (Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) >= 7 * step && Math.round(event.clientX - fbBase.getBoundingClientRect().left - fbBtn.offsetWidth / 2) < 8 * step) {
            fbBtn.style.left = `${7 * step}px`
            fbFill(7)
        }
    }
}

fbBg.addEventListener('mousemove', function (event) {
    feedBack(event)
})

fbBg.addEventListener('touchmove', function (event) {
    feedBack(event.touches[0])
})

/////////////////////////////////////////////fb-btn-filling/////////////////////////////////////////////

let prev = 0
function fbFill(num) {
    fbAnim(num, prev)
    feedback.forEach((e, i) => {
        switch (i) {
            case num: {
                fbInner(1, e)
            }; break
            case num + 1: {
                fbInner(3, e)
            }; break
            case num + 2: {
                fbInner(5, e)
            }; break
            case num + 3: {
                fbInner(7, e)
            }; break
        }
    })
    prev = num
}

fbFill(0)
function fbInner(pos, fb) {
    sliderItems.childNodes[pos].querySelectorAll('p')[0].textContent = `${fb.name}`
    sliderItems.childNodes[pos].querySelectorAll('p')[1].textContent = `${fb.date}`
    sliderItems.childNodes[pos].querySelectorAll('p')[2].textContent = `${fb.text}`
    sliderItems.childNodes[pos].querySelector('div').style.backgroundImage = `url(${fb.icon})`
}

function fbAnim(now, prev) {
    if (now > prev) {
        fbItemAnim(7)
    } else if (now < prev) {
        fbItemAnim(1)
    }
}
console.log(window.getComputedStyle(document.querySelector('.user-del')).display)

function fbItemAnim(n) {
    sliderItems.childNodes[n].style.transition = '0s'
    sliderItems.childNodes[n].style.backgroundColor = '#fed2a3'
    setTimeout(() => {
        sliderItems.childNodes[n].style.transition = '1s'
        sliderItems.childNodes[n].style.backgroundColor = '#F1F3F2'
    }, 50)
}

//////////////////////////////////////////////popup///////////////////////////////////////////


function popupOpen(e) {
    userZero.style.display = 'block'
    splitter.style.display = 'block'
    fbExit.style.display = 'block'
    splitter.style.opacity = '0.5'
    document.querySelector('html').style.overflowY = 'hidden'
    if (e.className !== 'user0') {
        userZero.querySelectorAll('p')[0].textContent = e.querySelectorAll('p')[0].textContent
        userZero.querySelectorAll('p')[1].textContent = e.querySelectorAll('p')[1].textContent
        userZero.querySelectorAll('p')[2].textContent = e.querySelectorAll('p')[2].textContent
        userZero.querySelector('div').style.backgroundImage = e.querySelector('div').style.backgroundImage
    }
}
function popupClose() {
    userZero.style.display = 'none'
    splitter.style.display = 'none'
    fbExit.style.display = 'none'
    document.querySelector('html').style.overflowY = 'visible'
}

sliderItems.childNodes.forEach(e => {
    e.addEventListener('click', function () {
        popupOpen(e)
    })
})

fbExit.addEventListener('click', function (event) {
    popupClose()
})

splitter.addEventListener('click', function () {
    popupClose()
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