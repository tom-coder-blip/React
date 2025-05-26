//Displays the main UI and reuses the <Rating /> component with different props

import React, { Component } from 'react'; //Component is the base class for creating class-based components.
import Products from './Products';
import { Button, Badge } from 'react-bootstrap';
import Rating from './Rating'; //This imports a custom component named Rating

//This defines a React component class named App which extends from Component
class App extends Component {
  render() { //It defines what JSX (HTML-like syntax) the component should output to the UI.
    const isValid = true;

    //JSX Return Block
    return (
      <div style={{ padding: '20px' }}>
        <Products />
        <Button variant="primary" disabled={!isValid}>Default</Button>

        <div style={{ marginTop: '20px' }}>
          <h5>
            <Badge pill bg="info" text="dark" className="me-2">Rating 1</Badge>
            <Rating rating="1" />
          </h5>
          <h5>
            <Badge pill bg="primary" text="light" className="me-2">Rating 2</Badge>
            <Rating rating="2" />
          </h5>
          <h5>
            <Badge pill bg="success" text="light" className="me-2">Rating 3</Badge>
            <Rating rating="3" />
          </h5>
          <h5>
            <Badge pill bg="warning" text="dark" className="me-2">Rating 4</Badge>
            <Rating rating="4" />
          </h5>
          <h5>
            <Badge pill bg="danger" text="light" className="me-2">Rating 5</Badge>
            <Rating rating="5" />
          </h5>
        </div>
      </div>
    );
  }
}

export default App