import React from 'react';
import Button from './Button';
import '../Assests/Styles/Counter.css'


export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0,
        }
        this.handlerIncreaseNum = this.handlerIncreaseNum.bind(this);
        this.handlerDecreaseNum = this.handlerDecreaseNum.bind(this);

    }

    handlerIncreaseNum(){
        this.setState( state => ({
            counter : state.counter + 1
        }));
    }

    handlerDecreaseNum(){
        if(this.state.counter > 0){
            this.setState( state => ({
                counter : state.counter - 1
            }));
        }
    }

    render(){
        return(
            <div className=''>
                <h1>{this.state.counter}</h1>
                <div className='style-btn'>
                    <Button title={"increase"} clickHandler={this.handlerIncreaseNum}/>
                    <Button title={"decrease"} clickHandler={this.handlerDecreaseNum}/>
                </div>
            </div>
        )
    }

}