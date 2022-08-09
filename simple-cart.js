const shoppingList = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 1800 },
    { name: 'belt', price: 500 },
];


function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}


const expence = totalCost(shoppingList);
console.log(expence);