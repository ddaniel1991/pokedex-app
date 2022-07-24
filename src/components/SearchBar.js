import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { toast } from 'react-toastify'

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState(1)

    const handleUserInput = (e) => {
        e.preventDefault()
        setUserInput(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(userInput < 1 || userInput > 905) {
            toast.error("The pokemon number entered is invalid")
            props.retrieveCurrentPokemon(1)
            setUserInput(1)
            return
        }
        else {
        console.log(userInput)
        props.retrieveCurrentPokemon(userInput)
        setUserInput(userInput)
        }
    }
    const handleForwardButton = (e) => {
        if(userInput === 905) {
            toast.error("This is the last pokemon on the list")
            return
        }
        else {

            let newId = parseInt(userInput) + 1
            props.retrieveCurrentPokemon(newId)
            setUserInput(newId)
            console.log(userInput)
        }

    }

    const handleBackwardButton = (e) => {
       
        if(userInput === 1) {
            toast.error("This is the first pokemon on the list")
            return
        }
        else {
            let newId = parseInt(userInput) - 1
            props.retrieveCurrentPokemon(newId)
            setUserInput(newId)
            console.log(newId)
        }

    }

    

  return (
    <div className='search-bar'>
        <Row className='pt-3'>
            <Col>
                <Button className='pokemon-scroll-buttons' type='button' onClick={handleBackwardButton}><FaArrowLeft /></Button>
            </Col>
            <Col>
                <form className='pokemon-id-search-form' onSubmit={handleOnSubmit}>
                    <input 
                        type='number' 
                        placeholder="Enter Pokemon #" 
                        className='pokemon-id-input-field' 
                        onChange={handleUserInput}
                        value={userInput}
                        />
                    <Button type='submit' className='search-button'>GO!</Button>
                </form>
            </Col>
            <Col>
                <Button className='pokemon-scroll-buttons' type='button' onClick={handleForwardButton}><FaArrowRight /></Button>
            </Col>
        </Row>
        <hr />

  

    </div>
  )
}

export default SearchBar