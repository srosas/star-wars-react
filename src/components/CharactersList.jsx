import React from 'react';
import Character from './Character';
import '../styles/CharactersList.css'
import { characters } from '../characters.json';

const CharactersList = (props) => {

  const { handleClick } = props;

  return (
    <ul className='characters-list'>
      {characters.map(character => (
        <li key={character.name}>
          <Character name={character.name} url={character.url} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;