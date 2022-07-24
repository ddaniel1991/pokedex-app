import React from 'react'
import { Table } from 'react-bootstrap'

const TypeTable = (props) => {
    let pokeTypes = props.pokeTypes
   
    
  return (
    <div>
        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {pokeTypes.map((type) => (
                    
                        

                        <tr className={`type-table ${type.type.name}`} key={type.slot}>
                            <td className='type-table-number '>{type.slot}</td>
                            <td className='type-table-attribute '>{type.type.name}</td> 
                        </tr>
                    

                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default TypeTable