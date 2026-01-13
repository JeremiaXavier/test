import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
            <ul>
                <Link to={'/search'}>search bus</Link>
                <Link to={'/booking'}>booking</Link>
                <Link to={'/profile'}>profile</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Home