import React from 'react';
import Img from './img.png'
import Form from './Components/Form/Form.js';
 

const App = () => {
  return(
    <div>
      <img src={Img} alt='Home Img' style={imgStyle}/>
      <Form/>
    </div>
  )
}

const imgStyle = {
  position: 'absolute',
  width: '1530px',
  height: '720px',
  left: '0px',
  top: '0px',
}

export default App;