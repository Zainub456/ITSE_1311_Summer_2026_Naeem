import { useRef, useEffect } from 'react';

export default function ReservationForm() {
    const noteRef = useRef(null);
    const errorRef = useRef(null);
    const successRef = useRef(null);


useEffect(() => {
    if (noteRef.current) {
        noteRef.current.maxLength = 20;

    }
}, []);

const handleSubmit = (event) => {
    event.preventDefault();

    const errorDisplay = errorRef.current;
    const successDisplay = successRef.current;


    if (errorDisplay && successDisplay) {
        errorDisplay.textContent = '';
        successDisplay.textContent = '';
        successDisplay.style.display = 'none';
    }
};


return (
    <form id="reservationForm" onSubmit={handleSubmit}>
        <p>
            <label>
                Name: <input type="text" id="name" maxLength={20} />
            </label>
        </p>

        <p> 
            <label>
                Email: <input type="email" id="email" required />
            </label>
        </p>

        <p>
            <label>
                Party size: <input type="number" id="party"  min="1" max="8"/>
            </label>
        </p>

        <p>
            <input type="radio" name="seating" value="inside"  required /> Seating Inside

        </p>

        <p>
            <input type="radio" name="seating" value="outside" required /> Seating Outside
        </p>

        <p>
            <label>
                Dietary notes:
                <input type="text" id="notes" ref={noteRef} maxLength={30} />
            </label>
        </p>

        <p>
            <input type="checkbox" name="newsletter" value="yes" /> Sign up for our newsletter?
        </p>

        <p>
            <label htmlFor="date">Date: </label>
            <input type="date" id="date" required />
        </p>

        <p>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" required />
        </p>

        <p>
            <input type="submit" className="submit" value="Confirm my reservation!" />
            <input type="reset" className="reset" value="Reset" />

        </p>

    </form>
    );
}