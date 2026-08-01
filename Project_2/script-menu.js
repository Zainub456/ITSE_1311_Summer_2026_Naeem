/*table formatting*/
const ourMenu = [
    {combo: "Bento Breakfast Combo 1", main:"Sunny side up roll", side:"Miso Soup", price:"15"},
    {combo: "Bento Breafast Combo 2", main:"Fruit and Oats pup roll", side: "Doggy bone", price:"16"},
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



const tableBody = document.getElementById('menu-rows');

let tableHTML = "";

ourMenu.forEach(item => {
    const formattedPrice = currencyFormatter.format(item.price);

    tableHTML += `
        <tr>
            <td><strong>${item.combo}</strong></td>
            <td>${item.main}</td>
            <td>${item.side}</td>
            <td>${formattedPrice}</td>
        </tr>
    `;
});

tableBody.innerHTML = tableHTML; 

/*start form validation and formatting*/

