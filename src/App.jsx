import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./css/App.css";
import Container from "./components/Container";
import InnerCointer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [currentFoodId, setCurrentFoodId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search setData={setFoodData} />
      <Container>
        <InnerCointer>
          <FoodList foodData={foodData} setFoodId={setCurrentFoodId} />
        </InnerCointer>
        <InnerCointer>
          <FoodDetail foodId={currentFoodId} />
        </InnerCointer>
      </Container>
    </div>
  );
}

export default App;
