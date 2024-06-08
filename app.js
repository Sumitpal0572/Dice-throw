
function rollDice() {

    const diceValues = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];

  
    const sortedIndices = diceValues.map((value, index) => [value, index])
        .sort(([a], [b]) => b - a)
        .map(([_, index]) => index);


    diceValues.forEach((value, index) => {
        const dice = document.getElementById(`dice${index + 1}`);
        dice.textContent = value;
        dice.className = 'dice';  

        if (index === sortedIndices[0]) {
            dice.classList.add('highest');
            dice.style.backgroundColor = "green";
        } else if (index === sortedIndices[1]) {
            dice.classList.add('second-highest');
            dice.style.backgroundColor = "yellow";

        } else {
            dice.classList.add('lowest');
            dice.style.backgroundColor = "red";

        }
    });
}