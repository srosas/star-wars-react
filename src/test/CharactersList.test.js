import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharactersList from '../components/CharactersList';
import Character from '../components/Character';

configure({ adapter: new Adapter() });

describe('CharactersList Component', () => {
  it('should render 4 character components', () => {
    const wrapper = shallow(<CharactersList />);
    expect(wrapper.find(Character)).toHaveLength(4)
  })
})