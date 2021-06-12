import myimg from '../static/food.png'

const Header = () => {
    return (
        <div className="header">
            <div className="parent">
                <img className="img" src={myimg} style={style} alt="logo" />
                <h1 className="title">Food Safari</h1>
            </div>
            <p className="discription" ><hr className="small-line" />These are some of the top rated foods all across in india.</p>
            <br></br>
        </div>
        
    );
}

export default Header;

const style = {
    width: "7vw"
}