import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppies)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  return (
    <div className="App">
      <h1 className="header">Welcome to Our Puppy Pals!</h1>
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id} className="puppyList">{puppy.name}</p>
        })
      }
      {
        featPupId && (
          <div className="featPup">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default App
