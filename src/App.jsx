import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import './index.css';
import Container from './components/Container';
import AppBottomParagrabh from './components/AppBottomParagrabh';
import FoodInput from './components/FoodInput';

export default function App() {
  // map method
  // let foodItems = [];
  // let foodItems = ["fruit", "green vegitables", "vegitables", "milk", "sprouts", "salad", "dal", "ghee", "roti", "Rice", "green chili", "makkhan", "butter bread", "peanut butter"];
  let [foodItem, setFoodItem] = useState([]);
  // let [text, setText] = useState("Food item entered by user!");

  let [background, setBackground] = useState({
    color: 'black',
    background: 'white'
  });

  const onkeyDown = (e) => {
    if (e.key === 'Enter') {
      let item = e.target.value;
      setFoodItem([...foodItem, item]);
      e.target.value = "";
    }
  }


  return (
    <center>
      <Container>
        <div className="AppCard">
          <h1 className="headline">Healthy Food</h1>
          <ErrorMessage foodItems={foodItem} />
          <FoodInput handleKeyDown={onkeyDown} />
          {/* <p className={`${style["paragraph"]}`}>{text}</p> */}
          <FoodItems foodItems={foodItem} background={background} setBackground={setBackground} />
        </div>
      </Container>

      <Container>
        <AppBottomParagrabh />
      </Container>
    </center>
  )
}
