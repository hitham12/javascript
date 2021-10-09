const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {

    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}

function handlePaste(e) {
    const paste = e.clipboardData.getData('text');

    inputs.forEach((input, i) => {
        console.log(input);
        input.value = paste[i] || '';
    });
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput); 
