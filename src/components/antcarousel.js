import React from 'react';
import ReactDOM from 'react-dom';

import { Carousel } from 'antd';

const AntCarousel = ()=>{
    return (
        <Carousel autoplay>
    <div>
      <img  src="./images/c1.jpg" alt=""/>
    </div>
    <div>
    <img  src="./images/c2.png" alt=""/>
    </div>
    <div>
    <img  src="./images/c3.jpg" alt=""/>
    </div>
  </Carousel>

    )
}
  
export default AntCarousel;