import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Categories.css"

const Categories = () => {
  const [main, setMain] = useState();

  const category = async () => {
    await axios("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      (res) => setMain(res.data.categories)
    );
  };

  useEffect(() => {
    category();
  }, []);

  console.log(main);

  return (
    <div className="category-main">
      {main?.map((item) => {
        return (
          <Card  key={item.idCategory} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.strCategoryThumb} />
            <Card.Body className="categories-card">
              <Card.Title className="text-center">{item.strCategory.toUpperCase()}</Card.Title>
              <Card.Text className="card-text">
                {item.strCategoryDescription}
              </Card.Text>
              <Button variant="primary">Go For Recipes</Button>
            </Card.Body>
          </Card>
        );
      })}
      
    </div>
  );
};

export default Categories;
