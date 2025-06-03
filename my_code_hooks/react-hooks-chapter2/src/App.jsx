import React from 'react'
import Products from './Products'
import Quotes from '/Quotes'
import reactbootstrap from 'react-bootstrap';

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Tan',
    imageUrl:'https://picsum.photos/200/300'
  }

  return (
    <div>
      <Quotes />
    </div>
  )
}

export default App
