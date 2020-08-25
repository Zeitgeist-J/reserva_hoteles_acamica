class App extends React.Component {
    state = {
        dates: {
            initialDate: moment(),
            finalDate: moment().add(7, 'days')
        },
        hotels: hotelsData,
        selectedCity: null,
        selectedCoutry: null
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

    render() {
        const { dates, selectedCity, selectedCoutry, hotels } = this.state
        return <div>
            <Header {...dates} />
            <Filters
                {
                ...dates
                }
                selectedCity={selectedCity}
                selectedCoutry={selectedCoutry}
                dateChange={this.onDateChange} />
            <HotelsContainer hotels={hotels} />
        </div>;
    }
}



const root = document.getElementById('app')
ReactDOM.render(<App />, root);