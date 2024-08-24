// index.js

document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    
    // Initialise le prix total
    let totalPrice = 0;

    cart.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const button = event.target;
            const price = parseFloat(button.getAttribute('data-price'));
            const countElement = button.parentElement.querySelector('.item-count');
            let count = parseInt(countElement.textContent);

            // Ajoute ou retire un article en fonction du bouton cliqué
            if (button.textContent === '+') {
                count++;
                totalPrice += price;
            } else if (button.textContent === '-' && count > 0) {
                count--;
                totalPrice -= price;
            }

            // Met à jour le nombre d'articles et le prix total
            countElement.textContent = count;
            totalPriceElement.textContent = totalPrice.toFixed(2) + '$';
        }
    });
});
