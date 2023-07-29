import "./Category.css";
import Card from "react-bootstrap/Card";
import Header from "../Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Category = () => {
  const [category, setCategory] = useState();

  const getCategory = async () => {
    await axios("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      (res) => setCategory(res.data.categories)
    );
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
    <Header/>
      <h1 className="category-title">The Category You Are Craving</h1>
      <div className="category">
        {category?.map((meal) => {
          return (
            <Card key={meal.idCategory} style={{ width: "18rem" }}>
              <Card.Img
                className="w-100"
                variant="top"
                src={meal.strCategoryThumb}
              />
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="text-center">{meal.strCategory.toUpperCase()}</Card.Title>
                <Card.Text className="card-text">
                  {meal.strCategoryDescription}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        
      </div>
      <Footer/>
    </>
  );
};

export default Category;
