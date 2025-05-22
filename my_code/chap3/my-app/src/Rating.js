//Controls how star ratings are shown and allows interaction using state and events

import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'; //import star icons such as a filled star and outlined star

//class component called Rating
class Rating extends Component {
    constructor(props) { //props is an object that holds data passed from the parent component.
        super(props); //Calls the parent class constructor – needed to access this.props
        this.state = { rating: this.props.rating }; //Data that a component uses and can change
    }

    handleClick(ratingValue) {
        this.setState({ rating: ratingValue })
    } //When a star is clicked, this method: Updates the component’s state using setState and causes the UI to re-render with the new rating.

    //This code is rendering stars for a rating system.
    render() {
        return (
            <div>
                <h1>Rating: {this.state.rating}</h1>
                {this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 1)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 1)}/>
                )}
                {this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 2)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 2)}/>
                )}
                {this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 3)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 3)}/>
                )}
                {this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 4)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 4)}/>
                )}
                {this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 5)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this, 5)}/>
                )}
            </div>
        );
    }
}

export default Rating;
