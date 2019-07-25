import React from 'react';
import '../styles/Character.css'

const Character = (props) => {

  const { name, url, handleClick } = props;

  return (
    <div className='character' name={name} url={url} onClick={handleClick}>
      {name}
    </div>
  );
}

export default Character;