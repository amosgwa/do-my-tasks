import './App.css';
import ItemRow from "./components/ItemRow";
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.CURRENT_CACHE_KEY = "CURRENT_CACHE_KEY"
        var dummyitem = {
            "name": "Test 1",
            "count": 1
        }
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('https://afd2-2601-280-c280-7010-c4df-56e2-d57d-130a.ngrok.io', {method: 'GET'})
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    items: (data && data.items) || []
                })
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <main>
                    <p><strong>Current Inventories</strong></p>
                    {this.state.items.map((value, idx) => {
                        return (
                            <ItemRow name={value.name} count={value.count}/>
                        )
                    })}
                </main>
            </div>
        );
    }
}

export default App;
