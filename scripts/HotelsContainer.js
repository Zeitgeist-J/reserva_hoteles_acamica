const HotelsContainer = ({ hotels }) => {
    return <div className="hotels-container">
        {hotels.map((hotel, index) => <Hotel key={index} {...hotel} />)}
    </div>;
}