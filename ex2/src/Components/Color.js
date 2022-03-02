import React from 'react';

export default class Color extends React.Component{
    render(){
        return(
            <ul>
                <li>{this.props.codeColor}</li>
            </ul>
        )
    }
}