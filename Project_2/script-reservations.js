/*start form validation and formatting*/

/*character lenght for notes section*/

document.getElementById('notes').maxLength =20;

/*event listener*/

document.getElementById('reservationForm').addEventListener('submit', 
function(event){
event.preventDefault();

/*error display*/

const errorDisplay = document.getElementById('errorMessage')
const successDisplay = document.getElementById('successMessage');



errorDisplay.textContent = '';
successDisplay.textContent = '';
successDisplay.style.display = 'none';




const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const party = document.getElementById('party').value.trim();
const seating = document.querySelector('input[name="seating"]:checked');

/*console log*/
console.log({name, email, party,seating: seating?.value})


/*form validation*/

if (!name) {
    errorDisplay.textContent = 'Name required';
    } else if (!email || !email.includes('@')) {
        errorDisplay.textContent = 'a valid email is required' ;
    } else if (!party || party < 1|| party > 8) {
        errorDisplay.textContent = 'Reservation size should be between 1 and 8';
    } else if (!seating) {
        errorDisplay.textContent = 'please select your seating area';
    } else if (!email || !email.includes('@')) {
    } else {
        successDisplay.innerHTML = `
         <h3>Your Reservation is confirmed!</h3>
         <p>Name:${name}</p>
         <p>Email:${email}</p>
         <p>Party size: ${party}</p>
         <p>Seating area:${seating.value}</p>

        `;


        successDisplay.style.display = 'block';

            this.reset();
        }
    });
    
    
