import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'

import MapNav from './MapNav';
import Grid from '@material-ui/core/Grid/';
import {
    FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';


configure({ adapter: new Adapter() });

// The name inside < /> is what you'll see in console.output
describe('<MapNav />', () => {

    // write tests in here

    it('should render one <Grid /> element', () => {
        // wrapper is a container for where to test a specific component
        const wrapper = shallow(<MapNav />);
        // there are 4 FormControl elements in the MapNav.js, so we check that there are four of those elements
        expect(wrapper.find(FormControl)).toHaveLength(4);
    });
});

// Enzyme allows us to render our components to be standalone, isolated. shallow renders react components