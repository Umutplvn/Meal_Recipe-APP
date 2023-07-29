import "./Detail.css"
import React from 'react'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Rate from '../Components/Rate';


const Details = () => {

const {state}=useLocation()
console.log(state);

  return (
    <>   
    <Header/>
     <div className='detail'>
      <img src={state.strMealThumb} alt="" className='detail-img' />
    <Table striped className='w-50 text-center m-auto detail-table'>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{state.strIngredient1}</td>
          <td>{state.strMeasure1}</td>
        </tr>
        <tr>
          <td>{state.strIngredient2}</td>
          <td>{state.strMeasure2}</td>
        </tr>
        <tr>
          <td>{state.strIngredient3}</td>
          <td>{state.strMeasure3}</td>
        </tr>
        <tr>
          <td>{state.strIngredient4}</td>
          <td>{state.strMeasure4}</td>
        </tr>
        <tr>
          <td>{state.strIngredient5}</td>
          <td>{state.strMeasure5}</td>
        </tr>
        <tr>
          <td>{state.strIngredient6}</td>
          <td>{state.strMeasure6}</td>
        </tr>
        <tr>
          <td>{state.strIngredient7}</td>
          <td>{state.strMeasure7}</td>
        </tr>

        <tr>
          <td>{state.strIngredient8}</td>
          <td>{state.strMeasure8}</td>
        </tr><tr>
          <td>{state.strIngredient9}</td>
          <td>{state.strMeasure9}</td>
        </tr><tr>
          <td>{state.strIngredient10}</td>
          <td>{state.strMeasure10}</td>
        </tr><tr>
          <td>{state.strIngredient11}</td>
          <td>{state.strMeasure11}</td>
        </tr><tr>
          <td>{state.strIngredient12}</td>
          <td>{state.strMeasure12}</td>
        </tr><tr>
          <td>{state.strIngredient13}</td>
          <td>{state.strMeasure13}</td>
        </tr><tr>
          <td>{state.strIngredient14}</td>
          <td>{state.strMeasure14}</td>
        </tr><tr>
          <td>{state.strIngredient15}</td>
          <td>{state.strMeasure15}</td>
        </tr><tr>
          <td>{state.strIngredient16}</td>
          <td>{state.strMeasure16}</td>
        </tr>
      </tbody>
    </Table>
<h3 className='ins-title mt-3'>INSTRUCTION</h3>
<p className='instruction'>{state.strInstructions}</p>

<Rate/>
<Footer/>
    </div>
    </>

  )
}

export default Details