const InfoContainer = ({ name, description, city, country, rooms, price }) => {
    return (
        <div className="infoContainer">
            <h3>{name}</h3>
            <p>{description}</p>
            <IconText
                icon={'room'}
                text={`${city}, ${country}`}
            />
            <IconText
                icon={'hotel'}
                text={`${rooms} habitaciones`}
            />
            <PriceIndicator
                price={price}
            />
        </div>
    )
}