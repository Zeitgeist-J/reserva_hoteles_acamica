class Hotel extends React.Component {
    render() {
        console.log(this.props)
        const { photo, slug } = this.props;
        return <div className="hotel">
            <img src={photo} width="350 " heigth="350" alt={`${slug}-image`} />
            <InfoContainer {...this.props} />
        </div>
    }
}