import React,{Component} from 'react'
import {Hooks} from 'react'

class  Pomodor extends Hooks{

}
export class Counter extends Component{

    constructor(props){
        super(props)
        this.state={
            date : new Date(),
            itteration : 0,
            toggleOn: true
        }
        this.timer = null
        this.name = "Mouheb"
        this.itteration = 0
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        this.setState(state => ({
            itteration : state.itteration + 1
        }))
    }
  
    decrement(){
        if(this.state.itteration > 0){
            this.setState(state => ({
            
                itteration : state.itteration - 1
            }))  
        }
       
    }
     
    render(){
        return <div>
            <h1>Counter</h1>
            <p className="itt">{this.state.itteration}</p>
            <button className="Fab" onClick={this.increment}>+</button>
            <button className="Fab" onClick={this.decrement}>-</button>
        </div>
    }

}


export class CounterBody extends Component{
    render(){
        return <div className="counterBody">
            <Counter/>
        </div>
    }
}