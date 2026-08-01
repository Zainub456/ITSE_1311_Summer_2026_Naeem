
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('bentoCart')) || {};
    const tbody = document.getElementById('cart-rows');
    tbody.innerHTML = '';

let totalSum = 0;

for (let name in cart) {
    const item = cart[name];
    const lineTotal = item.price*item.qty;

    totalSum += lineTotal;

tbody.innerHTML +=`

<tr>
    <td><stong>${name}</strong></td>
    <td>$${item.price}</td>
    <td>${item.qty}</td>
    <td>$${line.total}</td>
</tr>

`:
}


document.getElementById('Total').innerText = "Total: $" + totalSum.toFixed(2);
}

function submitOrder() {
    alert("Order Submitted!");
    localStorage.removeItem('bentoCart');
    window.location.href ='menu.html';

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btn-submit').addEventListener('click', submitOrder);
    renderCart();
});
