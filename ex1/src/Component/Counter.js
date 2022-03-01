import React from 'react';
import Button from './Button';


export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0,
        }
        this.handlerIncreaseNum = this.handlerIncreaseNum.bind(this);
        this.handlerLowNum = this.handlerLowNum.bind(this);

    }

    handlerIncreaseNum(){
        if(this.state.counter >= 0){
            this.setState( state => ({
                counter : state.counter + 1
            }));
        }
    }

    // handlerLowNum(){
    //     if(this.state.counter >= 0){
    //         this.setState( state => ({
    //             counter : state.counter--
    //         }));
    //     }
    // }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <Button title={"increase"} clickHandler={this.handlerIncreaseNum}/>
                <Button title={"decrease"} clickHandler={this.handlerLowNum}/>
            </div>
        )
    }

}