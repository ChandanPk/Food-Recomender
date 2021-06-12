import Button from './components/Button';
import Header from './components/Header';
import Review from './components/Review';
import './index.css'


function App() {

  const streetFoods = [
    {item:"Shavarma", rating: "9/10"},
    {item: "Manchurian", rating: "4/10"},
    {item: "Noodles", rating: "8.2/10"}
  ]

  // const restaurentFoods = [
  //   {item:"chiken pery pery", rating: "9/10"},
  //   {item: "Corn soup", rating: "4/10"},
  //   {item: "Baby corn", rating: "8.2/10"}
  // ]

  const restaurentFoods = [
    {item:"chiken BBQ", rating: "9/10"},
    {item: "Burger", rating: "4/10"},
    {item: "kolkata rolls", rating: "8.2/10"}
  ]

  return (
    <div className="App">
      <Header />
      <Button />
      <Review contents={streetFoods} />
    </div>
  );
}

export default App;
