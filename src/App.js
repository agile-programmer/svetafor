
import React, { Component } from 'react'
import './components/style.scss'

class App extends Component {
    state = { 
        value: 'click',
     }

     handleClick = (x) => {
         if(x === 1){
             this.setState({value:"toxtang"})
         }
         if(x === 2){
             this.setState({value:"kuting"})
         }
         if(x === 3){
             this.setState({value:"yuring"})
         }
     }


    render() { 
        return (
           <>
           <div className='svetafor'>
               <div className="card1 card" onClick={() =>this.handleClick(1)}>
                   <h1>qizil</h1>
               </div>
               <div className="card2 card" onClick={() =>this.handleClick(2)}>
                   <h1>sariq</h1>
               </div>
               <div className="card3 card" onClick={() =>this.handleClick(3)}>
                   <h1>yashil</h1>
               </div>
           </div>
           <h1>{this.state.value}</h1>
           </>
        );
    }
}
 
export default App;