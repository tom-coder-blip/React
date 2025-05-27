import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Card, Button, Form } from 'react-bootstrap';

class GitHubRepo extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
            searchTerm: '',
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isLoading: true });
        this.getGitHubRepos(this.state.searchTerm);
    }

    getGitHubRepos(_searchTerm) {
        axios.get("https://api.github.com/search/repositories?q=" + _searchTerm )
            .then(res => {
                this.setState({
                    isLoading: false,
                    repos: res.data.items
                });
                console.log(res.data.items);
            })
            .catch(err => {
                console.error('Error fetching repos:', err);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const repoCards = this.state.repos.map((repo) =>
            <Card key={repo.id} style={{ marginBottom: '1rem' }}>
                <Card.Body>
                    <Card.Title>{repo.full_name}</Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                    <Card.Text>⭐ Stars: {repo.stargazers_count}</Card.Text>
                    <Button variant="primary" href={repo.html_url} target="_blank">View Repo</Button>
                </Card.Body>
            </Card>
        );

        return (
            <div className="container mt-4">
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="text"
                        value={this.state.searchTerm}
                        placeholder="Search GitHub Repositories"
                        onChange={this.handleChange}
                        className="mr-2"
                    />
                    <Button type="submit" variant="dark">Search</Button>
                </Form>

                <h3 className="mt-4">GitHub Repository Results</h3>

                {this.state.isLoading ? (
                    <ReactLoading type="spin" color="#000" />
                ) : (
                    repoCards
                )}
            </div>
        );
    }
}

export default GitHubRepo;