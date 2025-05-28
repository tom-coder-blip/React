import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; //firebase: Connects to Firebase (authentication, database, etc.).
import { Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], //: Stores all user records from Firebase.
            showDeleteDialog: false, //Controls whether the delete confirmation dialog is shown.
            selectedUser: {} //Stores the user that you want to delete.
        };
        this.add = this.add.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.delete = this.delete.bind(this);
    }

    //This method runs once after the component is displayed.
    componentDidMount() {
        firebase.database().ref('/') //It connects to the Firebase Realtime Database
            .on('value', snapshot => {
                let returnArr = [];
                //loops through database
                //pushes values to state
                snapshot.forEach(data => {
                    let user = data.val();
                    user['key'] = data.key;
                    returnArr.push(user); //Adds each user to the users array in the component state.
                });
                //users array now has 10 objects
                this.setState({
                    users: returnArr
                })
            });
    }

    //When the "Add" button is clicked, it sends the user to the /add route where UserForm is shown.
    add(e) {
        this.props.history.push("/add");
    }

    // Called when "Remove" is clicked; opens a confirmation dialog and saves the selected user.
    openDeleteDialog(user) {
        this.setState({
            showDeleteDialog: true,
            selectedUser: user
        });
    }

    //Hides the confirmation dialog
    closeDeleteDialog() {
        this.setState({
            showDeleteDialog: false,
            selectedUser: {}
        });
    }

    //Removes the selected user from Firebase by using their unique key.
    delete(e) {
        //removing user by unique identifier (key)
        firebase.database().ref('/' + this.state.selectedUser.key).remove()
            .then(x => {
                console.log("SUCCESS");
                this.closeDeleteDialog(); //Closes the dialog after success
            })                                        //or
            .catch(error => {
                alert("Could not delete the user."); //shows an alert on error.


                console.log("ERROR", error)
            });
    }

    render() {
        //populates table rows with database objects
        //Loops through all users in the state and creates a table row for each.
        const listUsers = this.state.users.map((user) =>
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><Link to={`/edit/${user.key}`}>Edit</Link></td>
                <td><Button onClick={this.openDeleteDialog.bind(this, user)}>Remove</Button></td>
            </tr>
        );

        //Final Render Output
        return (
            <div>
                <Button variant="primary" onClick={this.add}>Add</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>
                <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete
                            {this.state.selectedUser.username}?</p>
                        <hr />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.delete}>Delete</Button>
                        <Button onClick={this.closeDeleteDialog}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default User;