import React, { Component } from 'react';
import Axios from 'axios';

class Players extends Component {
    constructor() {
        super(); 
        this.state = {}
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response.data);
            this.setState({players: response.data});
        })
        .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.players);
        if (!this.state.players) {
            return <h2>Loading...</h2>
        } else {
            return (<div>
                    <h1>Women's World Cup Players</h1>
                    {this.state.players.map(player => <h2 key={player.id}>{player.name} from {player.country}</h2>)}
                </div>)
        }
    }
} 

export default Players;