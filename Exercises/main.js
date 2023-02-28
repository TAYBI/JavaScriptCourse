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
receipt = document.getElementById('receipt');
receipt.innerHTML = '';

carts = [{
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
// EX 11