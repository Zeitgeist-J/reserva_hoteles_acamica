const HotelsContainer = ({ hotels }) => {
    return <div className="hotels-container">
        {hotels.length ? hotels
            .map((hotel, index) => <Hotel key={index} {...hotel} />) :
            <h3>No se han encontrado hoteles con tus criterios de búsqueda :(</h3>
        }
    </div>;
}