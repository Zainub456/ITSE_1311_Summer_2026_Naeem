/*table formatting*/
const ourMenu = [
    {combo: "Bento Breakfast Combo 1", main:"Sunny side up roll", side:"Miso Soup", price:"15"},
    {combo: "Bento Breakfast Combo 2", main:"Fruit and Oats pup roll", side: "Doggy bone", price:"16"},
    {combo: "Lunch Combo 1", main: "Spicy tuna roll", side: "Cucumber salad", price:"20"},
    {combo: "Lunch Combo 2", main: "Pup Pumpkin roll", side: "Steamed carrots", price:"19"},
    {combo: "Lunch Combo 3", main: "Avocado roll", side: "Miso soup", price:"20"},
    {combo: "Dinner Combo 1", main: "Chicken Teriyaki with rice", side: "Cucumber salad", price:"23"},
    {combo: "Dinner Combo 2", main: "Seseme Beef with rice", side: "Mashed pumpkin", price:"24"},
    {combo: "Dinner Combo 3", main: "Ramen with Pork", side: "Steamed carrots", price:"23"},
    {combo: "Dinner Combo 4", main: "Ramen with Chicken", side: "Doggy bone", price:"23"},
    {combo: "Dinner Combo 5", main: "Seseme Tofu with broccoli", side: "Cucumber salad", price:"21"},

];

const currencyFormatter = new Intl.NumberFormat('en-US' , {
    style: 'currency',
    currency: 'USD',

})

const cart = [];

const tableBody = document.getElementById('menu-rows');
const mealFilter = document.getElementById('meal-filter');


function showMenu() {
    let tableHTML ="";
    const choice = mealFilter.value;

    ourMenu.forEach(item => {
        const comboLower = item.combo.toLowerCase();

        /*all menu items*/
        if(choice === "all" || comboLower.includes(choice)) {
            const formattedPrice = currencyFormatter.format(item.price);




    tableHTML += `
        <tr>
            <td class="item-name"><strong>${item.combo}</strong></td>
            <td>${item.main}</td>
            <td>${item.side}</td>
            <td class="item-price">${formattedPrice}</td>

            <td>
                <input type="number" class="qty-input" value="0" min="0" max="5" style="width:50px;">
            </td>
            <td> 
                <button class="btn btn-primary btn-sm add-btn"> Add to cart</button>
            </td>
        </tr>
    `;
        }
    });
       

tableBody.innerHTML = tableHTML;
attachCartEventListeners();
}

mealFilter.addEventListener("change", showMenu);

showMenu();

/*add to cart*/

const buttons = tableBody.querySelectorAll('.add-btn');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const row = event.target.closest('tr');
        const index = row.getAttribute('data-index');
        const item = ourMenu[index];
        const quantity = Number(row.querySelector('.qty-input').value);

        if (quantity <= 0) {
            alert("Please select more that zero");
            return;
        }
    

    let bentoCart = JSON.parse(localStorage.getItem('bentoCart')) || {};

    if (bentoCart[comboName]) {
        bentoCart[comboName].qty += quantity;
    } else {
        bentoCart[comboName] = {price: Number(item.price), qty: quantity};
    }


    localStorage.setItem('bentoCart', JSON.stringify(bentoCart));

    alert(`Added to cart: (${quantity}) x ${comboName}`);

    row.querySelector('.qty-input').value = "0";    
        });
    });







