function tokenCost(tokenQuantity) {

    // discount quantity and value
    const first100Rate = 100;
    const second100Rate = 90;
    const restTokenRate = 70;

    if (tokenQuantity <= 100) {
        const cost = tokenQuantity * first100Rate;
        return cost;
    }
    else if (tokenQuantity <= 200) {
        const first100Cost = 100 * first100Rate;
        const restTokenQuantity = tokenQuantity - 100;
        const restTokenCost = restTokenQuantity * second100Rate;
        const totalCost = first100Cost + restTokenCost;
        return totalCost;
    }
    else {
        const first100Cost = 100 * first100Rate;
        const second100Cost = 100 * second100Rate;
        const restTokenQuantity = tokenQuantity - 200;
        const restTokenCost = restTokenQuantity * restTokenRate;
        const totalCost = first100Cost + second100Cost + restTokenCost;
        return totalCost;
    }

}

const totalCost = tokenCost(250);
console.log(totalCost);