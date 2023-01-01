import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(mnt(new Date()).format("DD-MM-YYYY"))

document.getElementById("header")
.innerHTML="index page";

document.getElementById("button")
.addEventListener("click",()=>{
    import("./lazy").then(
        (module)=>{
            // console.log(module)
            const {sum} = module;
            sum(4,4)
        }
    )
})

























document.getElementById("header")
.innerHTML="index page";


















