import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Card, Button, Form } from 'react-bootstrap';

class Premier extends Component {
    constructor() {
        super();
        this.state = {
            allTeams: [],
            teams: [],
            searchTerm: '',
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPremierLeagueTeams = this.getPremierLeagueTeams.bind(this);
    }

    componentDidMount() {
        this.getPremierLeagueTeams();
    }

    getPremierLeagueTeams() {
        this.setState({ isLoading: true });

        axios.get("https://api.football-data.org/v4/competitions/PL/teams", {
            headers: {
                'X-Auth-Token': 'dc1b2a1b58764f2ca0938c492efda8d5'

  // Replace with your Football-Data.org API key
            }
        })
        .then(res => {
            const allTeams = res.data.teams;
            this.setState({
                allTeams: allTeams,
                teams: allTeams,
                isLoading: false
            });
        })
        .catch(error => {
            console.error("Error fetching Premier League teams:", error);
            this.setState({ isLoading: false });
        });
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { allTeams, searchTerm } = this.state;
        const filteredTeams = allTeams.filter(team =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.setState({ teams: filteredTeams });
    }

    render() {
        const teamCards = this.state.teams.map((team) =>
            <Card key={team.id} style={{ marginBottom: '1rem' }}>
                <Card.Body>
                    <Card.Title>{team.name}</Card.Title>
                    <Card.Img
                        variant="top"
                        src={team.crest}
                        alt={`${team.name} logo`}
                        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                    />
                    <Card.Text><strong>Founded:</strong> {team.founded}</Card.Text>
                    <Card.Text><strong>Stadium:</strong> {team.venue}</Card.Text>
                    <Button variant="primary" href={team.website} target="_blank">Visit Website</Button>
                </Card.Body>
            </Card>
        );

        return (
            <div className="container mt-4">
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="text"
                        value={this.state.searchTerm}
                        placeholder="Search Premier League Teams"
                        onChange={this.handleChange}
                        className="mr-2"
                    />
                    <Button type="submit" variant="dark">Search</Button>
                </Form>

                <h3 className="mt-4">Premier League Teams</h3>

                {this.state.isLoading ? (
                    <ReactLoading type="spin" color="#000" />
                ) : (
                    teamCards
                )}
            </div>
        );
    }
}

export default Premier;