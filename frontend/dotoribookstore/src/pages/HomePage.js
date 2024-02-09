// HomePage.js
import React from 'react';
import './HomePage.css';
import '../styles/fadeinbox.css';

const HomePage = () => {
  return (
    <div className='home-page'>

      <div className='fade-in-box' style={{padding: '30px', display: 'flex', justifyContent: 'start', color: 'white'}}>
        <h1>눈이 올까요</h1>
      </div>

      <div className='fade-in-box' style={{margin : '30px', padding: '20px', animation : 'fadein 7s', display: 'flex', justifyContent: 'end', color: 'white' }}>
        <h3>우리 자는 동안에</h3>
      </div>

      <div className="snow-container">
        <div className="snow"></div>
      </div>

      {/* <div>
        <img src='/winter_forest.jpg' alt="winter_forest"/>
      </div> */}

    </div>
  );
};

export default HomePage;