class HotelsContainer extends React.Component {
    render() {
        return <div className="hotels-container">
            {this.props.hotels.map((hotel, index) => <Hotel key={index} {...hotel}/>)}
        </div>;
    }
}