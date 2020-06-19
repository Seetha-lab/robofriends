import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import Robocardlist from '../components/Robocardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';
import './App.css';
import 'tachyons';
import { setSearchField, requestRobots } from '../actions';

const mapStatetoProps = (state) => {
 return { 
   searchval: state.searchRobots.searchval ,
   robots: state.requestRobots.robots,
   isPending: state.requestRobots.isPending,
   error: state.requestRobots.error

  } 
}

const mapDispatchtoProps = (dispatch) => {
 return {
  onsearchfunction: (event) => dispatch(setSearchField(event.target.value)),
  onfetchrobots: () => dispatch(requestRobots())
 }
}

class App extends Component {
    
  componentDidMount() {
    this.props.onfetchrobots();
  }

 

  render() {
    const { searchval, onsearchfunction, robots, isPending } = this.props;
    const filteredrobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchval.toLowerCase());
       });

       return (
        <div className='tc'>
           <h1>RoboFriends</h1>
           <Searchbox searchfunction={onsearchfunction}/>
          <Scroll>
            { isPending ? <h1> Loading ... </h1> :
              <ErrorBoundry>
                 <Robocardlist robots={filteredrobots}/>
              </ErrorBoundry>
            }
          </Scroll>
        </div>
      ); 

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
