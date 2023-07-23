import React, { Component } from 'react'
// import './style.css'


export default class Nav extends Component {
    constructor(){
        super()
        this.state={
            Name :"Arwa Abdullah"
        }


    }



  render() {
    return (
      <div className='nav'>My Name is : {this.state.Name}</div>
    )
  }
}
