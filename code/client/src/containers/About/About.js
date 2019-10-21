import React, { Component } from 'react';
import { MenuBar } from '../MenuBar/MenuBar';
import Card from '@material-ui/core/Card';
import { Redirect } from 'react-router-dom';

class About extends Component {
  render() {
    /**
     * auth guard: if the user credentials have not been authenticated
     * through the database, then redirect the user to the login screen.
     */
    if (!localStorage.getItem('auth')) {
      return <Redirect to={'/login'} />;
    }

    return (
      <div className='BlueBack'>
        {/* menu bar */}
        <MenuBar pageName='About' />

        {/* login form */}
        <div
          className='BlueBack'
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'justify'
          }}
        >
          <Card
            style={{
              padding: '25px',
              width: '500px'
            }}
          >
            <h5>Purpose</h5>
            <p>
              The purpose of this system is to analyse different modes of
              transport (car, bus, train) and the current state of traffic flow
              on major city networks (Wellington, Christchurch and Auckland) in
              New Zealand.
            </p>

            <h5>Scope</h5>
            <p>
              The Virtualising our Transport Networks App is a decision support
              tool designed to allow transport planners, road control
              authorities and public transport operators gain insight on
              effective transport decisions which support the existing network
              pathways by a visual analysis of the transport flow data.
            </p>
            <p>
              It will display an observation on how long it takes to get to the
              CBD from a set origin on a map, where the zones between the origin
              and destination will be coloured based on an interpolation of the
              time taken against the distance from the origin. Users can add CSV
              data sets to the application in order to display the information.
            </p>

            <h5>Goal</h5>
            <p>
              The goal is to deliver a web application which will display a
              terrain topographic map which shows how long it takes to get into
              the city from different sections of a region using different modes
              such as cars, trains and buses. Another aim is for the map to use
              the same units as Statistics New Zealand's census data units to
              further increase the effectiveness of the display analysis and
              apply users to make insight-driven decisions made in the transport
              sector. The regions will, therefore, adapted to show census
              regions, rather than the set distance zones it currently is. This
              would make it more useful for consultants as decisions can be made
              dependent on different and specific socio-economic groups.
            </p>
          </Card>
        </div>
      </div>
    );
  }
}

export default About;
