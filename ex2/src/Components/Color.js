import React from 'react';
import '../Assests/Styles/Color.css'

export default class Color extends React.Component{
    render(){
        return(
            <ul>
                <li>{this.props.codeColor}</li>
            </ul>
        )
    }
}