class App extends React.Component {
    state = {
        dates: {
            initialDate: moment(),
            finalDate: moment().add(7, 'days')
        }
    }

    render() {
        return <Header {...this.state.dates} />;
    }
}



const root = document.getElementById('app')
ReactDOM.render(<App />, root);