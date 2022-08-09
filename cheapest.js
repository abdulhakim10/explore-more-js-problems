const phones = [
    { name: 'Samsung', camera: 12, storage: '64gb', price: 22000, color: 'black' },
    { name: 'xiaomi', camera: 12, storage: '64gb', price: 16000, color: 'gray' },
    { name: 'realme', camera: 12, storage: '64gb', price: 17000, color: 'black' },
    { name: 'i-phone', camera: 12, storage: '64gb', price: 92000, color: 'white' },
    { name: 'walton', camera: 12, storage: '64gb', price: 16500, color: 'blue' },
    { name: 'nokia', camera: 12, storage: '64gb', price: 24000, color: 'black' },
    { name: 'Symphony', camera: 12, storage: '64gb', price: 14500, color: 'black' },
];


function cheapestPhones(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhones(phones);
console.log(mySelection);