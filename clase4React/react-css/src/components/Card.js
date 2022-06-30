import './../App.css';
const Card = ({logo,nombre,descripcion,logo2,color}) => {

    return (
        <div className="card">
            <div className={`circle ${color}`}>
                <img src={logo} className="logo"/>
            </div>
            <div className="content">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <a href="#">Explore</a>
            </div>
            <img src={logo2} className="product_img"/>
        </div>
    );
}
export default Card;