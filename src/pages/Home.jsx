import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Card from "react-bootstrap/Card";
import "./Home.css";
import axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import Rate from "../Components/Rate";


const Home = () => {
  const [search, setSearch] = useState([]);
  const navigate = useNavigate()

  const getRecipe = async (e) => {
    await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
    ).then((res) => setSearch(res.data.meals));
  };


  return (
    <div className="home">
      <Header />
      <div className="home-in">
        <input
          className="input-home"
          type="input"
          placeholder="Search for Recipes"
          onChange={getRecipe}
        />
        <div className="recipes">
          {search?.map((item) => {
            return (
              <Card className="home-card" key={item?.idMeal} style={{ width: "18rem" }}>
                <Card.Img
                  className="w-75"
                  variant="top"
                  src={item?.strMealThumb}
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-center">
                    {item?.strMeal}-{item?.strCategory}
                  </Card.Title>
                  <Card.Title className="text-center">
                    {item?.strArea}
                  </Card.Title>
                <Button onClick={()=> navigate(`/${item.idMeal}`, {state:item})}>Go for Recipe</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
