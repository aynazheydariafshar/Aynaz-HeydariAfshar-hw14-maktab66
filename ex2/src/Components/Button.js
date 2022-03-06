import React from 'react';
import '../Assests/Styles/Button.css'

export default class Button extends React.Component{
    render(){
        return(
            <div>
                <button className='btn' onClick={this.props.addColor}>Add Color</button>
            </div>
        )
    }
}