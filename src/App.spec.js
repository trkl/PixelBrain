import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


configure({ adapter: new Adapter() });


escribe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));
  
  });