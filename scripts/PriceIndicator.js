const PriceIndicator = ({ price }) => {
    const arr = [...Array(4).keys()]
    return (
        <div className="price-container">
            {arr.map((i) =>
                <span key={`price-${i}`} className={`material-icons ${i + 1 <= price ? '' : 'clear'}`} >
                    monetization_on
                </span>
            )}
        </div >
    )
}