import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="main-container">

      
      <div className="header row" >
        <div className="text-main col-md-6">

        <h1>Unlock the World of Open Source:</h1>
        <p>
        Your Journey Begins Here,<br />
        Where Learning Meets Possibility.
        </p>
        <button className='btn btn-outline-primary btn-lg hero-btn'>
          Discover more
        </button>
        </div>
        <div className="logo col-md-6">
         
        </div>
      </div>
      <div className='section-roadmap'>
        <h1>Roadmap</h1>
        <p>Navigating open source can sometimes feel like a complex maze, but with our roadmap, it becomes a clear and enjoyable path.</p>
      </div>
      {/* <div className="line"></div> */}
      <div className="container row m-auto">
      <div className="left-side col-lg-6 col-12">
        <div className="roadmap-div">
          <h1>What is open source</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          <button>Beginners</button>
          </div>
          <div className="link">
            link 2 
          <button>non-technical</button>
          </div>
          <div className="link">
            link 3 
          <button>all</button>
          </div>
        </div>
        <div className="roadmap-div">
          <h1>Opensource opportunities</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          <button>Beginners</button>
          </div>
          <div className="link">
            link 2 
          <button>non-technical</button>
          </div>
          <div className="link">
            link 3 
          <button>all</button>
          </div>
        </div>
        <div className="roadmap-div">
          <h1>What is open source</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          <button>Beginners</button>
          </div>
          <div className="link">
            link 2 
          <button>non-technical</button>
          </div>
          <div className="link">
            link 3 
          <button>all</button>
          </div>
        </div>
      </div>
      

      
      <div className="right-side col-lg-6 col-12">
        <div className="roadmap-div my-3">
          <h1>What is Git and GitHub</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          <button>Beginners</button>
          </div>
          <div className="link">
            link 2 
          <button>non-technical</button>
          </div>
          <div className="link">
            link 3 
          <button>all</button>
          </div>
        </div>
        <div className="roadmap-div my-3">
          <h1>How to contribute</h1>
          <p>brief info definition of oss</p>
          <div className="link">
            link 1 
          <button>Beginners</button>
          </div>
          <div className="link">
            link 2 
          <button>non-technical</button>
          </div>
          <div className="link">
            link 3 
          <button>all</button>
          </div>
        </div>
       
        </div>
      </div>
      <div className='container-fluid about'>
        <h1>About</h1>
        <p>
        Welcome to our open source adventure, where we demystify the incredible world of open source software and empower newcomers to embark on a transformative learning journey. At our platform, we've carefully crafted a roadmap that guides you, step by step, from being an absolute beginner to becoming a proficient contributor in the vibrant open source community. Whether you're a tech enthusiast, a curious explorer, or an aspiring developer, we provide the knowledge, resources, and mentorship you need to navigate this exciting landscape with ease. <br /><br />

Navigating open source can sometimes feel like a complex maze, but with our roadmap, it becomes a clear and enjoyable path. We've designed a user-friendly experience that allows you to 'nagivate' your way through the world of open source, providing you with insights, lessons, and hands-on experience. Join us in your quest to learn, contribute, and collaborate with like-minded individuals from all around the globe. Together, we can harness the power of open source, shape the future, and make a lasting impact.
        </p>
      </div>
      <div className="team">
        <div className="member-1">
          <img src="" alt="" />
          <p>Name1</p>
        </div>
        <div className="member-2">
          <img src="" alt="" />
          <p>name2</p>
        </div>
        <div className="member-3">
          <img src="" alt="" />
        <p>name 3</p>
        </div>
        </div>
        </div>
      <Footer/>
    </>
  )
}

export default App
