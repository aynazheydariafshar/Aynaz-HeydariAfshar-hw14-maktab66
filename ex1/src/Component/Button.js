import React from 'react';
import '../Assests/Styles/Button.css';

export default class Button extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className='div-btn'>
                <button className='btn-num' onClick={this.props.clickHandler}>{this.props.title}</button>
            </div>
        )
    }
}