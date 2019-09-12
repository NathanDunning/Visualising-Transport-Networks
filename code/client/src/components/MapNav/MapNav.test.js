// Dependencies for testing
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'

// Dependencies needed for test
import MapNav from './MapNav';
import { FormControl, InputLabel } from '@material-ui/core';

//adapters that provide compatibility with React for Enzyme
configure({ adapter: new Adapter() });

// The name inside < /> is what you'll see in console.output
describe('<MapNav />', () => {

    // write tests in here...

    it('should render 4 <FormControl /> elements', () => {
        // wrapper is a container for where to test a specific component
        const wrapper = shallow(<MapNav />);
        // there are 4 FormControl elements in the MapNav.js, so we check that there are four of those elements
        expect(wrapper.find(FormControl)).toHaveLength(4);
    });

    it('One <InputLabel /> be inside', () => {
        // wrapper is a container for where to test a specific component
        const wrapper = shallow(<MapNav />);
        // there are 4 FormControl elements in the MapNav.js, so we check that there are four of those elements
        expect(wrapper.find(InputLabel));
    });
});

// Enzyme allows us to render our components to be standalone, isolated/unit tests, and independent of the rest of the application. shallow renders react components.