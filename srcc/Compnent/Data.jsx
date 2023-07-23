import React, { Component } from 'react'

export default class Data extends Component {
    constructor(){
        super()
        this.state={
          colors :['red','green','blue','yellow']
        }

    }
  render() { 
    return (
     <>
     <ul>
        {this.state.colors.map((c)=> <li>{c}</li>)}



     </ul>
     </>
    )
  }
}
