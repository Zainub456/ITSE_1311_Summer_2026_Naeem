import React from "react";
import ReservationForm from '../components/ReservationForm';

function ReservationsPage() {
    return (
        <div className="container mt-5">
            <h1>Please make a reservation</h1>
            <p>We look forward to seeing you and your pup!</p>
            <ReservationForm />
        </div>
    )
}
 export default ReservationsPage