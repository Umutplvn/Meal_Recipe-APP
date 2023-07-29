import React, { useState } from 'react'
import {AiOutlineStar} from "react-icons/ai"
import {Rating} from 'react-simple-star-rating'
import "./Rate.css"
const Rate = () => {

const [rate, setRate]=useState(0)

const handleRate=(value)=>{
    setRate(value)
}
const handleReset=(e)=>{
    e.preventDefault()
    setRate(0)
    e.target[0].value=""
}

  return (
    <div className='rate d-flex flex-column align-items-center' >
<Rating className=' text-center '  onClick={handleRate} initialValue={rate}/>
<form onSubmit={handleReset} action="" className='d-flex flex-column w-100 align-items-center' style={{fontFamily:"sans-serif", color:"white"}}>
<textarea style={{width:"20rem", height:"4rem", margin:"1rem", padding:"0.5rem", border:"none"}} placeholder='Rate this recipe and send us your feedback...'></textarea>
<button   className='btn btn-primary'>Submit</button>
</form>
    </div>
  )
}

export default Rate