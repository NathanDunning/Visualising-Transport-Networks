import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Map from './Map';

configure({ adapter: new Adapter() }); //adapters that provide compatibility with React for Enzyme

it('It holds Map', () => {
    const div = global.document.createElement('div');
    global.document.body.appendChild(div);

    const wrapper = mount(
        <Map />
        , { attachTo: div });

    expect(wrapper.find(Map)).toHaveLength(1);
});
