const Filters = ({
    initialDate,
    finalDate,
    selectedPrice,
    selectedCountry,
    filterChange,
    dateChange,
    selectedSize
}) => {
    return (<div className="filters">
        <input
            className="filter"
            type="date"
            name="initialDate"
            value={initialDate.format('YYYY-MM-DD')}
            onChange={dateChange}
        />
        <input
            className="filter"
            type="date"
            name="finalDate"
            min={initialDate.format('YYYY-MM-DD')}
            value={finalDate ? finalDate.format('YYYY-MM-DD') : ''}
            onChange={dateChange}
        />
        <select
            name="selectedPrice"
            className="filter"
            value={selectedPrice}
            onChange={filterChange}>
            <option value="">Todos los precios</option>
            {prices.map((price, index) => <option
                key={`price-${index}`}
                value={price}>
                {'$'.repeat(price)}
            </option>)}
        </select>
        <select
            name="selectedCountry"
            className="filter"
            value={selectedCountry ? selectedCountry : ''}
            onChange={filterChange}>
            <option value="">Todos los países</option>
            {countries.map((country, index) => <option
                key={`country-${index}`}
                value={country}>
                {country}
            </option>)}
        </select>
        <select
            className="filter"
            name="selectedSize"
            value={selectedSize ? selectedSize : ''}
            onChange={filterChange}>
            <option value="">Todos los tamaños</option>
            {sizes.map((size, index) => <option
                key={`size-${index}`}
                value={size}>
                Hotel {size}
            </option>)}
        </select>
    </div>)
}