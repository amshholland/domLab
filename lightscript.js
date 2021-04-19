const on = document.getElementById("on").addEventListener('click', light);
const off = document.getElementById("off").addEventListener('click', light);
const toggle = document.getElementById("toggle").addEventListener('click', light);
const end = document.getElementById("end").addEventListener('click', light);
const lightBulb = document.getElementById("lightBulb");

function light() {
    turnOff(() => {
        lightBulb.classList.add('off');
    });
    lightBulb.classList.remove('lightBulb toggle')

    toggle(() => {
        lightBulb.classList.toggle('toggle');
    });

    end(() => {
        lightBulb.lightBulb.remove();
    });
}