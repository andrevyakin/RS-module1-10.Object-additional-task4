const toDaysWinner = {
    prize: "10 000$",
}

const winnerApplicants = {
    "001": {
        name: "Максим",
        age: 25,
    },
    "201": {
        name: "Светлана",
        age: 20,
    },
    "304": {
        name: "Екатерина",
        age: 35,
    },
}

//Изменил функцию, чтобы результат вллючал и максимальное значение тоже
getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getWinner = (applicants, winnerObject) => {

    //отсортированные по возрастанию номерки игроков
    const playerNumbers = Object.keys(applicants).slice().sort();
    //количество попыток
    let count = 0;

    let winnerNumber = 0;
    while (!playerNumbers.some(i => Number(i) === (winnerNumber = getRandomNumberInRange(Number(playerNumbers[0]), Number(playerNumbers[playerNumbers.length - 1])))))
        if (count++ === 100) break;

    const add0 = number => ("00" + number).slice(-3);

    //count 101, потому что у === приоритет 9, а у ++ 16. То есть сначала сравнит с 100, выйде из while, а потом увеличит до 101.
    return count === 101
        ? "В этом розыгрыше призовые номерки не выпали..."
        : {
            prize: winnerObject.prize,
            name: applicants[add0(winnerNumber)].name,
            age: applicants[add0(winnerNumber)].age
        }
}

const resultWinner = getWinner(winnerApplicants, toDaysWinner);
console.log(resultWinner);
// { prize: "10 000$", name: "Максим", age: 25 }