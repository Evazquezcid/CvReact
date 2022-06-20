import React from 'react'
import "./Competencias.scss"

const competencias = ({competencias}) => {
  return (
    <div className='competencias'>
    <h3> - Competencias - </h3>
    <p>{competencias}</p>
 
    </div>
  )
}

export default competencias