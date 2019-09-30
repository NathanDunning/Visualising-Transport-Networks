// Dependencies for testing
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'

// Enzyme allows us to render our components to be standalone, isolated/unit tests, and independent of the rest of the application. shallow renders react components.

// Dependencies needed for test
import MapNav from './MapNav';
import { FormControl, InputLabel } from '@material-ui/core';
import Map from '../Map/Map';

configure({ adapter: new Adapter() }); //adapters that provide compatibility with React for Enzyme

// The name inside < /> is what you'll see in console.output
describe('To check the functions and components in <MapNav />', () => {

    // TEST ONE
    it('In MapNav, I should see 4 <FormControl /> elements: City, From, To, Location, and Date', () => {
        // wrapper is a container for where to test a specific component
        const wrapper = shallow(<MapNav />);
        // there are 4 FormControl elements in the MapNav.js, so we check that there are four of those elements
        expect(wrapper.find(FormControl)).toHaveLength(5);
    });
});
