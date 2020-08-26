const InfoContainer = ({ name, description, city, country, rooms, price }) => {
    return (<div className="infoContainer">
        <h3 >{name}</h3>
        <p>{description}</p>
        <p>{city}, {country}</p>
        <p>{rooms} habitaciones</p>
        <small>{'$'.repeat(price)}</small>
    </div>)
}