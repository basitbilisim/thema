const button = document.getElementById("button")
const toggle = document.getElementById("toggle")
const body = document.getElementById("body")

toggle.onclick = function(){
    let active = button.classList.toggle("active")
    if(active){
        body.classList.toggle("dark-mode")
    }else {
        body.classList.remove("dark-mode")
    }
}
