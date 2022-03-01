import React from 'react';

export default class Button extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={this.props.clickHandler}>{this.props.title}</button>
            </div>
        )
    }
}