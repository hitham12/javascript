const listele = document.querySelector('.start-here')

listele.innerHTML = "main title"

const newlistele = document.createElement('li');
newlistele.innerHTML = "sub title 4";
listele.nextElementSibling.children[0].append(newlistele);

const lastchild = listele.nextElementSibling.nextElementSibling;
lastchild.remove();

document.title = "Master Of The Dom";
