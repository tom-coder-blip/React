import React from 'react'
import Products from './Products'
import Ballers from './BestBallers'


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
      <Ballers />
    </div>
  )
}

export default App
