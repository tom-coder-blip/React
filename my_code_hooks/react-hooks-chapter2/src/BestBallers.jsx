import React from 'react'

function Ballers() {
    const ballers = ["Dembele", "Mbappe", "Marmoush", "Salah", "De Bruyne", "Yamal"];

    // Use map to generate the list items
    const listOfBallers = ballers.map((baller, index) => (
        <li key={index}>{baller}</li>
    ));

     return (
        <div>
            <h1>List of Ballers</h1>
            <ul>
                {listOfBallers}
            </ul>
        </div>
    );
}

export default Ballers;
