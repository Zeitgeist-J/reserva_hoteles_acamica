class App extends React.Component {
    state = {
        dates: {
            initialDate: moment(),
            finalDate: moment().add(7, 'days')
        },
        hotels: hotelsData
    }

    render() {
        return <div>
            <Header {...this.state.dates} />
            <Filters {...this.state.dates} />
            <HotelsContainer hotels={this.state.hotels} />
        </div>;
    }
}



const root = document.getElementById('app')
ReactDOM.render(<App />, root);