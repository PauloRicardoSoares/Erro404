
const check = document.getElementById('close-menu');
const line = document.querySelector('.close-menu-label');


check.addEventListener('click', e => {
    if (check.checked){
        line.classList.toggle("change");
    }else{
        line.classList.remove("change");
    }
})

function closer() {
    line.classList.remove("change");
    document.querySelector('.close-menu').checked = false;
}
