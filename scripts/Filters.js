class Filters extends React.Component {
    getCities = () => {
        return countriesAndCities.reduce((cities, location) => [...cities, ...location.cities], []);
    }

    getCountries = () => {
        return countriesAndCities.reduce((cities, location) => [...cities, location.name], []);
    }

    render() {
        const { initialDate, finalDate, selectedCity, selectedCountry } = this.props;
        const cities = this.getCities(), countries = this.getCountries();
        return (<div className="filters">
            <input
                className="filter"
                type="date"
                name="initialDate"
                value={initialDate.format('YYYY-MM-DD')}
                onChange={this.props.dateChange}
            />
            <input
                className="filter"
                type="date"
                name="finalDate"
                min={initialDate.format('YYYY-MM-DD')}
                value={finalDate.format('YYYY-MM-DD')}
                onChange={this.props.dateChange}
            />
            <select
                className="filter"
                value={selectedCity}>
                {cities.map((city, index) => <option
                    key={`city-${index}`}
                    value={city}
                    onChange={() => { }}>
                    {city}
                </option>)}
            </select>
            <select
                className="filter"
                value={selectedCountry ? selectedCountry : `Todos los países`}>
                {countries.map((country, index) => <option
                    key={`country-${index}`}
                    value={country}
                    onChange={() => { }}>
                    {country}
                </option>)}
            </select>
            <select
                className="filter"
                value={'some'}>
                {prices.map((price, index) => <option
                    key={`price-${index}`}
                    value={price}
                    onChange={() => { }}>
                    {'$'.repeat(price)}
                </option>)}
            </select>
        </div>)
    }
}