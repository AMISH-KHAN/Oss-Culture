import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <h1>Unlock the World of Open Source:</h1>
        <p>
        Unlock the World of Open Source: 
        Your Journey Begins Here, 
        Where Learning Meets Possibility.
        </p>
        <button>
          Discover more
        </button>
        <div className="logo">
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <h1>Roadmap</h1>
        <p>Navigating open source can sometimes feel like a complex maze, but with our roadmap, it becomes a clear and enjoyable path.</p>
      </div>
      <div className="line"></div>
      <div className="container row m-5">
      <div className="left-side col-md-6">
        <div className="1">
          <h1>What is open source</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          </div>
          <div className="link">
            link 2 
          </div>
          <div className="link">
            link 3 
          </div>
          <button>Beginners</button>
          <button>non-technical</button>
          <button>all</button>
        </div>
        <div className="1">
          <h1>Opensource opportunities</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          </div>
          <div className="link">
            link 2 
          </div>
          <div className="link">
            link 3 
          </div>
          <button>Beginners</button>
          <button>non-technical</button>
          <button>all</button>
        </div>
        <div className="1">
          <h1>What is open source</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          </div>
          <div className="link">
            link 2 
          </div>
          <div className="link">
            link 3 
          </div>
          <button>Beginners</button>
          <button>non-technical</button>
          <button>all</button>
        </div>
      </div>
      

      
      <div className="rigt-side col-md-6">
        <div className="1 my-3">
          <h1>What is Git and GitHub</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          </div>
          <div className="link">
            link 2 
          </div>
          <div className="link">
            link 3 
          </div>
          <button>Beginners</button>
          <button>non-technical</button>
          <button>all</button>
        </div>
        <div className="1 my-3">
          <h1>How to contribute</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          </div>
          <div className="link">
            link 2 
          </div>
          <div className="link">
            link 3 
          </div>
          <button>Beginners</button>
          <button>non-technical</button>
          <button>all</button>
        </div>
       
        </div>
        </div>
    </>
  )
}

export default App
