const form = document.querySelector('#form'),
    name1 = document.querySelector('.name'),
    age = document.querySelector('.age'),
    email = document.querySelector('.email'),
    btn = document.querySelector('.btn'),
    message = document.querySelector('.message');


function confirmData() {
    message.innerHTML = '';
    message.innerHTML += `<div> ${name1.value}</div>`
    message.innerHTML += `<div> ${age.value}</div>`
    message.innerHTML += `<div> ${email.value}</div>`
    message.innerHTML += `<input class="btn1" type="button" value="confirm">`
    message.innerHTML += `<input class="cancel" type="button" value="cancel">`
}

function handlesubmit(e) {
    confirmData();
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
    handlesubmit();
    let btn1 = document.querySelector('.btn1')
    let cancel = document.querySelector('.cancel')
    cancel.addEventListener('click', (ele1) => {
        message.innerHTML = '';
    })
    btn1.addEventListener('click', (ele) => {
        message.innerHTML = "“congratulations you successfully sent this form”"
    })

}); 