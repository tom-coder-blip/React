import React, { Component } from 'react';

class Test extends Component {

    fruits = [];
    fruitList = ["Apple", "Banana", "Kiwi", "Orange", "Grapes"];

    render() {
        for (let i = 0; i < this.fruitList.length; i++) {
            this.fruits.push(<li key={i}>{this.fruitList[i]}</li>);
        }

        return (
            <div>
                <ul>
                <h1>My list of favourite fruits</h1>
                    {this.fruits.length > 0 && this.fruits}
                    {this.fruits.length === 0 && <li>Nothing to see here.</li>}
                </ul>
            </div>
        );
    }
}

export default Test;