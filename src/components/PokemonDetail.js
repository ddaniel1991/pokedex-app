import React from 'react'
import { Container, Col, Row, Table } from 'react-bootstrap'
import StatTable from './StatTable'
import TypeTable from './TypeTable'
import { threeDigitNumber, getAbilityDescription } from '../functions/pokeFunctions'
import SizeTable from './SizeTable'
import Typewriter from 'typewriter-effect/dist/core';



const PokemonDetail = (props) => {
  let pokeData = props.pokemon
  let description = props.description
  // let abilities = pokemon.abilities
  console.log(props)

  return (
    <div>
                
        <h3 className='pokemon-name'>#{threeDigitNumber(pokeData.id)} {pokeData.name}</h3>
        <Row className='pokedex-media-row'> 
          <Col md='1' > 
          
          </Col>
          <Col md='5'>
            <Container className='pokemon-image-container'>
              <img 
                src={pokeData.sprites.other['official-artwork'].front_default} 
                alt={pokeData.name} 
                className='pokemon-image'
                height='250'
                width='250'
              />
            </Container>
          </Col>
          <Col md='4'>
            <div className='pokedex-entry typewriter'>
           
              <p className=''>{description} </p>
            </div>
          </Col>
          <Col md='2' > 
          
          </Col>
    
        </Row>

        <Container className='pokemon-data-tables'>
          <Row>
            <Col md='4'>
              <SizeTable height={pokeData.height} weight={pokeData.weight} />
            </Col>
            <Col md='4'>
              <TypeTable pokeTypes={pokeData.types} />
            </Col>
            <Col md='4'> 
              <StatTable className='pokemon-stats' statTableData={pokeData.stats} />
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default PokemonDetail