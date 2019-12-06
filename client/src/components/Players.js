import React, { Component } from 'react';
import trophy from '../images/trophy.svg';
import Axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Players extends Component {
    constructor() {
        super(); 
        this.state = {}
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/players')
        .then(response => {
            //console.log(response.data);
            this.setState({players: response.data});
        })
        .catch(err => console.log(err));
    }
    render() {
        //console.log(this.state.players);
        if (!this.state.players) {
            return <h2>Loading...</h2>
        } else {
            return (<div>
                        <h1>Players</h1>
                        <img src={trophy} alt='trophy' className='trophy'/>
                        {this.state.players.map(player => <h2 key={player.id}>{player.name} from {player.country}</h2>)}
                        <div className='graphContainer'>
                            <LineChart width={800} height={400} data={this.state.players}>
                                <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                            </LineChart>
                        </div>
                    </div>)
        }
    }
} 

export default Players;