import React, { Component } from 'react';

class App extends Component {
    state = { 
        a: 40,
        view: false,
        inputValue: 12
     } 

     handladeQoshish = () =>  {
         this.setState({
             a: this.state.a + 1
         })
     }

     handladeAyirish = () => {
         this.setState({
             a: this.state.a - 1
         })
     }

     handlebool = () => {
         this.setState({
             view: !this.state.view
         })
     }
     handladeChange = (event) => {
         this.setState({
             inputValue: event.target.value
         })
     }

    render() { 
        return (
            <div>
                {
                    this.state.view === true ? <h1>apple</h1> : <h1>banana</h1>
                }
                <p>{ this.state.inputValue}</p>
                <button onClick={ this.handladeQoshish }>qoshish</button>
                <button onClick={ this.handladeAyirish }>ayirish</button>
                <button onClick={ this.handlebool }>natija</button>
                <input type = 'text' onChange ={ this.handladeChange}/>
                <h1>{ this.state.a}</h1>
            </div>
        );
    }
}
 
export default App;

