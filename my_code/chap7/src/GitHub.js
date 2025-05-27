import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            data: [], //stores the GitHub user results.
            searchTerm: '', //stores what the user types.
            isLoading: false //shows a spinner when waiting for API data.
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //react hook
    //called when the component is first rendered
    // componentDidMount() {
    //     this.getGitHubData('J4d4');
    // }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value }); //Updates the searchTerm state as the user types in the input box
    }

    handleSubmit(e) { //Runs when the form is submitted.
        e.preventDefault();
        this.setState({
            isLoading: true //Sets isLoading to true (to show the spinner).
        })
        this.getGitHubData(this.state.searchTerm); //Calls getGitHubData() with the search term.
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm) //Sends a GET request to the GitHub API using Axios.
            .then(res => {
                //change state (no longer loading)
                this.setState({
                    isLoading: false, //on success it Stops showing the spinner.
                    data: res.data.items //display users on webpage
                })
                //print results to console
                console.log(res.data.items);
            });
    }
    render() {
        const listUsers = this.state.data.map((user) => //Loops over the data array to display each GitHub user:
            <Media key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        //Rendering the UI
        // form where users enter the GitHub username to search.
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub User Results</h3>
                {this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" /> //Shows a loading spinner while isLoading is true.
                }
                {listUsers}
            </div>
        );
    }
}
export default GitHub;