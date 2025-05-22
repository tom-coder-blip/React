import React, { Component } from "react";

class Nicknames extends Component {
    render() {
        let nicknames = ["Bigman", "Jack", "Cash", "Cristiano"];
        let nicknameList = [];

        for (let i = 0; i < nicknames.length; i++) {
            nicknameList.push(<li key={i}>{nicknames[i]}</li>)
        };
        return (
            <div>
                <h2>Nicknames</h2>
                <ul>{nicknameList}</ul>
            </div>
        );
    }

}

export default Nicknames;