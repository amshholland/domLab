const on = document.getElementById("on");
const off = document.getElementById("off");
const toggle = document.getElementById("toggle");
const end = document.getElementById("end");
const lightBulb = document.getElementById("lightBulb");

on.addEventListener('click', () => {
    lightBulb.classList.remove('off');

});
off.addEventListener('click', () => {
    lightBulb.classList.add('off');

});
toggle.addEventListener('click', () => {
    lightBulb.classList.toggle('off')
});
end.addEventListener('click', () => {
    lightBulb.remove();
});