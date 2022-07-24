import React from 'react'
import { Table } from 'react-bootstrap'

const StatTable = ({statTableData}) => {
    let pokeStats = statTableData

  return (
    <div>
        <Table striped>
            <thead>
                <tr>
                <th>Attribute</th>
                <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {pokeStats.map((stat, index) => (
                    <tr key={index}>
                        <td className='stat-table-attribute'>{stat.stat.name}</td>
                        <td className='stat-table-value'>{stat.base_stat}</td> 
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default StatTable