class InfoContainer extends React.Component {
    render() {
        const { name, description } = this.props;
        return (<div className="infoContainer">
            <h3 >{name}</h3>
            <p>{description}</p>

        </div>)
    }
}