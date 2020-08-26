class App extends React.Component {
    state = {
        dates: {
            initialDate: moment(),
            finalDate: null
        },
        hotels: hotelsData,
        selectedCountry: null,
        selectedPrice: null,
        selectedSize: null,
    }

    onDateChange = (event) => {
        event.persist();
        const { target } = event, { dates } = this.state;
        dates[target.name] = moment(target.value);
        this.setState({ dates }, this.checkDates);
    }

    checkDates = () => {
        const { initialDate, finalDate } = this.state.dates;
        if (finalDate && finalDate.isBefore(initialDate)) {
            const _dates = this.state.dates;
            _dates.finalDate = _dates.initialDate;
            this.setState({ dates: _dates });
        }
    }

    onFilterChange = (e) => {
        e.persist();
        const { target } = e;
        this.setState({ [target.name]: target.value })
    }

    hotelsWithFilters = () => {
        let {
            hotels,
            selectedCountry,
            selectedPrice,
            selectedSize,
            dates
        } = this.state;
        if (selectedCountry) { hotels = hotels.filter((hotel) => hotel.country === selectedCountry); }
        if (selectedPrice) { hotels = hotels.filter((hotel) => hotel.price == selectedPrice); }
        if (selectedSize) {
            let criteria;
            switch (selectedSize) {
                case 'pequeño':
                    criteria = [0, 10];
                    break;
                case 'mediano':
                    criteria = [10, 20];
                    break;
                default:
                    criteria = [20];
                    break;
            }
            hotels = hotels.filter((hotel) => (hotel.rooms > criteria[0]) && (criteria[1] ? (hotel.rooms <= criteria[1]) : true));
        }
        if (dates.finalDate) { hotels = hotels.filter((hotel) => moment(hotel.availabilityTo).isSameOrAfter(dates.finalDate), 'day'); }
        hotels = hotels.filter((hotel) => moment(hotel.availabilityFrom).isSameOrBefore(dates.initialDate, 'day'))

        return hotels
    }

    render() {
        const { dates, selectedCity, selectedCountry, selectedSize } = this.state;

        return <div>
            <Header {...dates} />
            <Filters
                {...dates}
                selectedCity={selectedCity}
                selectedCountry={selectedCountry}
                selectedSize={selectedSize}
                dateChange={this.onDateChange}
                filterChange={this.onFilterChange} />
            <HotelsContainer hotels={this.hotelsWithFilters()} />
        </div>;
    }
}



const root = document.getElementById('app')
ReactDOM.render(<App />, root);