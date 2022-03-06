import React from 'react';
import '../Assests/Styles/Color.css'

export default class Color extends React.Component{
    render(){
        return(
            <ul>
                <div style={{backgroundColor : `${this.props.codeColor}`}}></div>
                <li>{this.props.codeColor}</li>
            </ul>
        )
    }
}