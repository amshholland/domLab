const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let number = document.getElementById('number').value;
    let coinType = document.getElementById('coin').value;

    const coinDiv = document.getElementById('coins');

    for (let i = 1; i <= number; i++) {
        let newCoin = document.createElement("div");
        newCoin.classList.add('coin');

        if (coinType === "Penny") {
            newCoin.classList.add("penny");
            coinDiv.append(newCoin);
            newCoin.innerText = coinType;
        }
        else if (coinType === "Nickel") {
            coinDiv.append(newCoin);
            newCoin.classList.add("silver");
            newCoin.classList.add("nickel");
            newCoin.innerText = coinType;
        }
        else if (coinType === "Dime") {
            coinDiv.append(newCoin);
            newCoin.classList.add("silver");
            newCoin.classList.add("dime");
            newCoin.innerText = coinType;
        }
        else {
            coinDiv.append(newCoin);
            newCoin.classList.add("silver");
            newCoin.classList.add("quarter");
            newCoin.innerText = coinType;
        }
    }
});
