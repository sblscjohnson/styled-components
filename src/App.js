import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import styled from 'styled-components'


const BackPic = styled.div`
  background-image: url('https://cdn-images-1.medium.com/max/1600/0*I-sI3u34g0ydRqyA');
  background-position: center;
  background-size: cover;
  height: 85vh;
`

const Admin = styled.button `
  position: absolute;
  left: 45vw;
  top: 40vh;
  width: 10vw;
  height: 5vh;
  background-color: red;
  padding: auto;
  text-align: center;
  border-radius: 10px;
  border: 2px black solid;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      admin: ''
    }
  }

  setAdmin = () => {
    console.log(this.state.admin)
    if(this.state.admin) {
      this.setState({
        admin: ''
      }) 
    } else {
      this.setState({
        admin: 'admin'
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar yes={this.state.admin} />
        <BackPic> 
          <Admin onMouseOut={this.setAdmin} onMouseOver={this.setAdmin}>Admin?</Admin>
        
        </BackPic>
        
      </div>
    );
  }
}

export default App;
