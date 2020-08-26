const Hotel = ({ photo, slug, ...props }) => {
    // console.log(this.props)
    return <div className="hotel">
        <img src={photo} width="350 " heigth="350" alt={`${slug}-image`} />
        <InfoContainer {...props} />
    </div>
}