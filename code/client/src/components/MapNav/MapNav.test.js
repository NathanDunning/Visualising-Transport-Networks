import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'


import MapNav from './MapNav';
import { GridListTileBar } from '@material-ui/core';

configure({ adapter: new Adapter()});

// The name inside < /> is what you'll see in console.output
describe('<MapNav />', () => {

    // write tests in here

    
    it('should render one <MapNav /> element', () => {
        const wrapper = shallow(<MapNav />);   
        expect(wrapper.find(<Grid/>));
    });
});

// Enzyme allows us to render our components to be standalone, isolated. shallow renders react components