import style from './button2.css'

const element = document.createElement("button");
element.innerHTML="button 2";
element.classList.add([style.button]);
document.body.appendChild(element);