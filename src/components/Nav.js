import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../Images/pokemon-logo.png'

const Nav = () => {
  return (
    <div>       
        <Navbar>
        
            <Navbar.Brand href="/#">
            <img
                alt="pokemon logo"
                src={logo}
                width="200"
                height="200"
                className="pokemon-logo"
            />{' '}
            
            </Navbar.Brand>
        </Navbar>
    </div>
  )
}

export default Nav