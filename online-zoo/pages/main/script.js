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
///////////////////////////////////////////////carousel//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const pagBox = document.querySelector('.pagBox')
const btnL = document.querySelector('.btnL')
const btnR = document.querySelector('.btnR')
const pagMain = document.querySelector('.pagMain')
const pagAdd = document.querySelector('.pagAdd')

/////////////////////////////////////////////////core////////////////////////////////////////////////

btnL.addEventListener('click', function () {
    let divCenter = pagBox.childNodes[1]
    let divAdd = pagBox.childNodes[3]

    if (divCenter.getBoundingClientRect().left < divAdd.getBoundingClientRect().left) {
        divCenter.style.left = '-1193.6px'
        divCenter.style.opacity = '0'
        divAdd.style.left = '0'
        divAdd.style.opacity = '1'
        setTimeout(() => {
            divCenter.style.left = '1193.6px';
            divAdd.style.left = '0'
    }, 750)
    } else {
        divAdd.style.left = '-1193.6px'
        divAdd.style.opacity = '0'
        divCenter.style.left = '0'
        divCenter.style.opacity = '1'
        setTimeout(() => {
            divCenter.style.left = '0'
            divAdd.style.left = '1193.6px'
    }, 750)
    }
})

// btnR.addEventListener('click', function (event) {
//     pagMain.style.left = '0'
//     pagAdd.style.left = '1193.6px'
//     pagBox.childNodes.forEach((e, i) => {
//         if (e.className) {
//             console.log(e.getBoundingClientRect().left)
//         }
//     })
// })