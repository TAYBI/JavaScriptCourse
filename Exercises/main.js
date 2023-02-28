// EX 9
function addToCart(btn) {
    document.getElementById('cart').innerHTML += ' - ' + btn.innerText
}
function clearCart() {
    document.getElementById('cart').innerHTML = ''
}
// --------------
function toInch() {
    inputValue = document.getElementById('input').value
    document.getElementById('result').innerHTML = (parseInt(inputValue) * 0.393701) + ' inche(s)'
}
function toCm() {
    inputValue = document.getElementById('input').value
    document.getElementById('result').innerHTML = (parseInt(inputValue) / 0.393701) + ' cm(s)'
}
////////////////////////////////////////////////////////////////////////////////////
// EX 10
const receipt = document.getElementById('receipt');
receipt.innerHTML = '';

const carts = [{
    name: 'Apple',
    price: 4,
    quantity: 2
}, {
    name: 'Orange',
    price: 3,
    quantity: 3
}]

function cartTotal() {
    total = 0
    carts.forEach(item => {
        div = document.createElement('div')
        div.innerHTML += item.name + ' $' + item.price + '*' + item.quantity + ' = $' + (item.price * item.quantity)
        receipt.appendChild(div)

        total += item.price * item.quantity
    });
    div = document.createElement('div')
    div.innerHTML = 'Cart total = $' + total
    receipt.appendChild(div)
}
cartTotal(carts)


////////////////////////////////////////////////////////////////////////////////////
// EX 12

function toUpper(value) {
    console.log(value.toUpperCase());
    return value.toUpperCase();
}
let temps = [-10, 7, 12, 18, -5, 19, 6, 1, -2, 19, 13, 7, 18, 11, -8, 4, 19, 17, -3, 6, 16, 18, 4, 10, 19, 14, 3, -7, 8, 18, 18, 0, 0, -6, 4, 8, 1, 11, 7, 9, -5, 17, -7, -6, 19, -2, 16, -5, 12, -9]

function aboveFreezing(array) {
    aboveFreezingTemps = []
    array.forEach(temp => {
        if (temp > 0) {
            aboveFreezingTemps.push(temp)
        }
    });
    return aboveFreezingTemps;
}

console.log(aboveFreezing(temps));