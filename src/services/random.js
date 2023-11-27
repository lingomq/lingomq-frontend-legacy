export const getRandomNumbers = (length) => {
    let numbers = [];

    for (let i = 0; i < length; i++)
    {
        let randomInt = 0;
        while (numbers.includes(randomInt))
        {
            randomInt = Math.floor(Math.random() * length);
        }
        
        numbers.push(randomInt);
    }

    return numbers;
}