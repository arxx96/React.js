import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <>
          <h1>Your Name is :{this.props.name}  </h1>
          
       <h1> Your age is: {this.props.age}</h1>
       
        </>
      
    

    );
  }
}
