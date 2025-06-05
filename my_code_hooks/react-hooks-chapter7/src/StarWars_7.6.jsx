import React, { use, Suspense, useState } from 'react'
import axios from 'axios' // npm install axios
import Spinner from 'react-bootstrap/Spinner'
import Avatar from 'react-avatar' // npm install react-avatar
import { Button } from 'react-bootstrap'


function fetchData(searchTerm) {
    return new Promise((resolve, reject) => {
        axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
            .then((res) => {
                console.log(res.data.results)
                resolve(res.data.results)
            })
    })
}

const Characters = ({ fetchDataPromise }) => {
    const data = use(fetchDataPromise)

    return (
        <div>
        <h3> StarWars Search Results</h3>    
        {data.map((item, index) => {
            return <div key={index} style={{ padding: 5 }}>
                <Avatar name={item.name} size="50" round={true} />  {item.name}
            </div>
        })}
        </div>
    )
}

function StarWars() {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = async (formData) => {
        setSearchTerm(formData.get('search'))
    }

    return (
        <div style={{padding:5}}>    
            <form action={handleSubmit}>
                <input type="text" name="search" />
                <Button type="submit" variant="primary">Search</Button>
            </form>
            <Suspense fallback={<Spinner animation="border" />}>
                <Characters fetchDataPromise={fetchData(searchTerm)} />
            </Suspense>
        </div>
    )
}

export default StarWars
