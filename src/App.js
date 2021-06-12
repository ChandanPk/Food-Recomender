import Button from './components/Button';
import Header from './components/Header';
import Review from './components/Review';
import {useState} from 'react';
import './index.css';


function App() {

  const [food, setFood] = useState([
    {item:"Shavarma", rating: "8.5/10"},
    {item: "Manchurian", rating: "7.9/10"},
    {item: "Noodles", rating: "8.2/10"}
  ]);

  const handleClick1 = ()=> {
    setFood([
      {item:"Grilled Chicken Escalope", rating: "9/10"},
      {item: "Mutton Korma.", rating: "10/10"},
      {item: "Keema Samosa with Yoghurt Dip.", rating: "9.5/10"}
    ])
  }

  const handleClick2 = ()=> {
    setFood([
      {item:"Aloo Gobi", rating: "9.7/10"},
      {item: "Matar Paneer ", rating: "8.9/10"},
      {item: "Butter chicken", rating: "9.9/10"}
    ])
  }

const handleClick3 = ()=> {
  setFood([
    {item:"Shavarma", rating: "9/10"},
    {item: "Manchurian", rating: "4/10"},
    {item: "Noodles", rating: "8.2/10"}
  ])
}

  return (
    <div className="App">
      <Header />
      <Button handleClick1={handleClick1} handleClick2={handleClick2} handleClick3= {handleClick3} />
      <Review foods={food} />
    </div>
  );
}

export default App;
