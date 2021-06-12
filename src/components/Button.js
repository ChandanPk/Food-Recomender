const Button = (props)=> {
    return(
        <div className="button">
            <div className="btn-parent">
                <button onClick={()=> {props.handleClick1()}}>Restaurent foods</button>
                <button onClick={()=> {props.handleClick2()}}>Ghar ki Rasoi</button>
                <button onClick={()=> {props.handleClick3()}}>Street foods</button>
            </div>
            <hr className="hori-line"/> 
        </div>
    );
}

export default Button;