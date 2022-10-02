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