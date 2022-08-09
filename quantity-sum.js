const shoppingList = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 1800, quantity: 3 },
    { name: 'belt', price: 500, quantity: 2 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalProducts = product.price * product.quantity;
        // console.log(totalProducts);
        sum += totalProducts;
    }
    return sum;
}

const expence = totalCost(shoppingList);
console.log(expence);