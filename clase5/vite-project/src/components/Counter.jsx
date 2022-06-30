import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
        }
        this.user = { 
            age:34,
            nombre: 'nombre yo'
        }
    }

    HandleIncrement(){
        this.setState({
            count:this.state.count+1,
        })
        this.setState((user) =>{    
            return  {
                user : {
                    ...user,
                    age : user.age +    1,
                }
            }
        })
    }
    HandleDecrement(){
        this.setState({
            count:this.state.count-1,
        })
        this.setState((user) =>{    
            return  {
                user : {
                    ...user,
                    age : user.age - 1,
                }
            }
        })
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <>
                <p>Counter</p>
                <div>{this.state.count}</div> 
                <button onClick={this.HandleIncrement.bind(this)}>Incrementar</button>
                <button onClick={this.HandleDecrement.bind(this)}>Decrementar</button>
            </>
        )
    }
}
