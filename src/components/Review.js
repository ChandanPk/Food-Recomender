const Review = (props)=> {
 const data = props.contents;
    return(
        <div>
               { data.map((element) => { 
                    <div className="items">
                    <h3>{element.item}</h3>
                    <p>{element.rating}</p>
                </div>
                } )}
        </div>
    );
}

export default Review;