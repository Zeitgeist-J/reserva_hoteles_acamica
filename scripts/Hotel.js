class Hotel extends React.Component {
    render() {
        console.log(this.props)
        return <div className="hotel">
            <img src={this.props.photo} width="400 " heigth="400" />

        </div>
    }
}