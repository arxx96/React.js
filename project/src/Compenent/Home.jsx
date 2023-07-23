import React, { Component } from 'react'
// import Card from './Card'
import Image from './Image'
import img1 from './person_5.jpg.webp'
import img2 from './person_6.jpg.webp'

export default class Home extends Component {
 
render() {
    return (
      <>
 

            <Image img={img1} />
             <Image img={img2} />
          
     
      </>

    
    )
  }
}
