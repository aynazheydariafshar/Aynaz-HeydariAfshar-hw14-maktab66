import React from 'react';
import Button from './Button';
import Color from './Color';

export default class ColorGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            colors : []
        }
        this.addColorRandom = this.addColorRandom.bind(this);
    }

    addColorRandom(){
        let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        let newArray = [];
        newArray.push(randomColor);
        this.setState( state => ({
            colors : [...state.colors , newArray]
        }));
    }

    render(){
        return(
          <div>
              {this.state.colors.map(item => <Color codeColor={item}/> )}
              <Button addColor={this.addColorRandom}/>
          </div>
        )
    }
}