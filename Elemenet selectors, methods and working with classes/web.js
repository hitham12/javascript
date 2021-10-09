const newWeb = document.querySelector('#newWeb');
const myimg = document.createElement('img');
myimg.src = 'https://images.unsplash.com/photo-1632604846106-ec68cb24a6bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80'

myimg.style.width = '200px'
document.body.append(myimg)
newWeb.innerHTML = 'hi its wajde this is my new web page in js <br> this is my dog'
newWeb.style.color = "blue" 