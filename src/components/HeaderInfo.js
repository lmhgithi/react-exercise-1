import React from 'react';
import imgURL from '../assets/avatar.jpg';

const HeaderInfo = () => {
  return (
    <div>
      <img src={imgURL} />
      <h1>HELLO,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
    </div>
  );
};

export default HeaderInfo();
