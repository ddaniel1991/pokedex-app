import React from 'react'
import { Table } from 'react-bootstrap'
import {calculateHeight, calculateWeight} from '../functions/pokeFunctions'

const SizeTable = (props) => {
    let height = calculateHeight(props.height)
    let weight = calculateWeight(props.weight)
    // console.log(height, weight)
  return (
   
    <div>
        <Table striped className='size-table'>
            <tbody>
                <tr>
                    <th className='size-table-header'>Height</th>
                    <th className='size-table-header'>Weight</th>
                </tr>
                <tr>
                    <td className='size-table-header'>{height}</td>
                    <td className='size-table-value'>{weight}</td>
                </tr>
            </tbody>
           
        </Table>
    </div>
    
  )
}

export default SizeTable