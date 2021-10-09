const mycheck = document.querySelector('#mycheck')
const img = document.querySelector('#img')

mycheck.addEventListener('click', myFunction)


function myFunction() {

    if (mycheck.checked == true) {

        img.style.display = 'block';
        document.body.append(img)
    } else {
        img.style.display = 'none';
    }
} 