document.querySelector('body').addEventListener("keyup", function (event) {
    if (document.querySelector('input:focus') !== null && document.querySelector('input:valid') !== null) {
        document.querySelector('input').style.borderColor = 'green'
        document.querySelector('input').style.color = 'green'
        document.querySelector('form > button').style.color = 'green'
        document.querySelector('form > button').style.borderColor = 'green'
        console.log('valid')
    }
    if (document.querySelector('input:focus') !== null && document.querySelector('input:invalid') !== null) {
        document.querySelector('input').style.borderColor = 'red'
        document.querySelector('input').style.color = 'red'
        document.querySelector('form > button').style.color = 'red'
        document.querySelector('form > button').style.borderColor = 'red'
        console.log('invalid')
    }
})

document.querySelectorAll('.pag > div').forEach(e => {
    e.addEventListener('mouseover', function () {
        e.querySelector('.title').style.top = '0'
        e.style.backgroundSize = '110%'
        e.style.backgroundPosition = '-10px 0'
    }) 
})

document.querySelectorAll('.pag > div').forEach(e => {
    e.addEventListener('mouseout', function () {
        e.querySelector('.title').style.top = '50px'
        e.style.backgroundSize = '100.5%'
        e.style.backgroundPosition = '0 0'
    })
})

