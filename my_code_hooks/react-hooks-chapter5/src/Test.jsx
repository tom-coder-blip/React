import React, { useState } from 'react';


function PlayerList() {

    const playerList = ["Mbappe", "Messi", "Haaland", "Salah", "Palmer"];


    return (
        <div>
            <ul>
                <h2>PlayerList</h2>
                {playerList.map((player, index) =>
                    <li key={index}>{player}</li>)}
            </ul>
        </div>
    )
}

export default PlayerList 