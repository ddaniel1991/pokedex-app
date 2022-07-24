import React from 'react'
import { Navbar } from 'react-bootstrap'

const Nav = () => {
  return (
    <div>       
        <Navbar>
        
            <Navbar.Brand href="/#">
            <img
                alt="pokemon logo"
                src="/images/pokemon-logo.png"
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