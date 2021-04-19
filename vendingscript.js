
const hotDog = document.getElementById("hotDog");
const peanuts = document.getElementById("peanuts");
const soda = document.getElementById("soda");
const beer = document.getElementById("beer");
const totalDiv = document.getElementById('total');

let total = 0;

hotDog.addEventListener("click", () => {
    total += Number(hotDog.value);
    totalDiv.innerText = `Total: $${total}`;
});

peanuts.addEventListener("click", () => {
    total += Number(peanuts.value);
    totalDiv.innerText = `Total: $${total}`;
});

soda.addEventListener("click", () => {
    total += Number(soda.value);
    totalDiv.innerText = `Total: $${total}`;
});

beer.addEventListener("click", () => {
    total += Number(beer.value);
    totalDiv.innerText = `Total: $${total}`;
});
