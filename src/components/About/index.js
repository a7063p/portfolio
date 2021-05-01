import React from "react";
import Picture from '../../assets/images/about/picture.JPG'

const About = () => (
  <div>
    <h1>About Me</h1>
    <div className='circle-div'>
    <img src={Picture} className="circle"  alt="Andrew Pennucci Profile" />
    </div>
    <p>    
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
  </div>
);

export default About;
