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