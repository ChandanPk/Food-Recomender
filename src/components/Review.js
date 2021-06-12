const Review = (props)=> {
 const foods = props.foods;
//  console.log(data);
    return(
        <div className="reviews">
               {foods.map((food)=> {
                   return <div className="showCase">
                       <h4>{food.item}</h4>
                       <p className="rating">{food.rating}</p>
                  </div>
               })}
        </div>
    );
}

export default Review;