const textArea = document.querySelector('#message_area'),
    btn = document.querySelector('#btn'),
    check = document.querySelector('#check');


btn.addEventListener('click', () => {
    let amount = (Number(textArea.value))
    for (let i = 0; i < amount; i++) {
        if (textArea.value < 18) {
            check.innerHTML = 'you’re too young'
            check.style.color = 'red';
        } else if (textArea.value > 18) {
            check.innerHTML = 'you can drink a beer'
            check.style.color = 'green';
        }
    }
}) 