import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Map from './components/Map/Map';
import { FormControl } from '@material-ui/core';
import sinon from 'sinon';
import MapNav from './components/MapNav/MapNav';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = global.document.createElement('div');
    global.document.body.appendChild(div);

    const wrapper = mount(
      <Router>
        <App />
      </Router>,
      { attachTo: div });

    ReactDOM.unmountComponentAtNode(div);
  });

  it('It holds nothing', () => {
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );

    expect(wrapper.find(App)).toHaveLength(1);
  });


}
)
