import myimg from '../static/food.png'

const Header = () => {
    return (
        <div className="header">
            <div className="parent">
                <img className="img" src={myimg} style={style} alt="logo" />
                <h1 className="title">Trending Food Safari</h1>
            </div>
            <p className="discription" ><hr className="small-line" />These are some of my favorite street foods across in india with their ratings</p>
            <br></br>
        </div>
        
    );
}

export default Header;

const style = {
    width: "7vw"
}