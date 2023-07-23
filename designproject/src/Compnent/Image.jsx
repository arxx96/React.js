import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
   <>
   <div className='box'>
    <img src={this.props.img} />
    <div className='square'></div>
   </div>
   
   </>
    )
  }
}
