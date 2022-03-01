import React from 'react';
import Button from './Button';


export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0,
        }
        this.handler = this.handler.bind(this)
    }

    handler(val){
        if(this.state.counter >= 0){
            if(val === "add"){
                this.setState (
                    {counter : this.state.counter + 1}
                )
            }else if(val === "low"){
                this.setState (
                    {counter : this.state.counter - 1}
                )
            }
        }
    }
    render(){
        return(
            <Button title={this.state.counter} clickHandler={() => this.handler()}/>
        )
    }

}