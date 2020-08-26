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
        const { target } = event, _dates = this.state.dates;
        _dates[target.name] = moment(target.value);
        this.setState({ dates: _dates }, this.checkDates);
    }

    checkDates = () => {
        const { initialDate, finalDate } = this.state.dates;
        if (finalDate.isBefore(initialDate)) {
            const _dates = this.state.dates;
            _dates.finalDate = _dates.initialDate;
            this.setState({ dates: _dates });
        }
    }

    onFilterChange = (e) => {
        e.persist();
        const { target } = e;
        // console.log(target.options)
        this.setState({ [target.name]: target.value })
    }

    render() {
        const { dates, selectedCity, selectedCountry, hotels, selectedSize } = this.state;
        return <div>
            <Header {...dates} />
            <Filters
                {
                ...dates
                }
                selectedCity={selectedCity}
                selectedCountry={selectedCountry}
                selectedSize={selectedSize}
                dateChange={this.onDateChange}
                filterChange={this.onFilterChange} />
            <HotelsContainer hotels={hotels} />
        </div>;
    }
}



const root = document.getElementById('app')
ReactDOM.render(<App />, root);