import React, { useEffect } from 'react'
import './Kboard.css'
const Kboard = (props) => {

useEffect(()=>{
    console.log(props.props.color);
})
  return (
    <div>
    <div className='kboard center column' style={{background: props.props.color}}>
    <h3 className='center'>{props.props.board}</h3>
    <div className='kboardinnerblock'>

    </div>
    </div>

    </div>
  )
}

export default Kboard