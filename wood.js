function woodCalculator(chairQuantity, bedQuantity, tableQuantity) {
    // per product quantity
    const perChairWood = 3;
    const perBedWood = 10;
    const perTableWood = 50;

    // total quantity
    const chairWood = chairQuantity * perChairWood;
    const bedWood = bedQuantity * perBedWood;
    const tableWood = tableQuantity * perTableWood;

    // in total
    const totalWood = chairWood + bedWood + tableWood;
    return totalWood;


}

const totalWood = woodCalculator(0, 0, 1);
console.log(totalWood);