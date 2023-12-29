const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
const count = document.getElementById('counter')

inc.addEventListener('click', increase)
dec.addEventListener('click',decrease)

function increase(){
    let c = parseInt(count.innerHTML);
    c = c + 1;
    count.innerHTML = c;
}

function decrease(){
    let c = parseInt(count.innerHTML);
    c = c - 1;
    count.innerHTML = c;
}