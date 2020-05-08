import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import Robocardlist from '../components/Robocardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchval: '',
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json();})
    .then(users => { this.setState({robots: users})})
  }

  onsearchfunction = (event) => {    
    this.setState({ searchval: event.target.value });

       }

  render() {
    const { robots, searchval } = this.state;
    const filteredrobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchval.toLowerCase());
       });

    return robots.length === 0 ?  (

         <div className="tc">
          <h1>RoboFriends</h1>
          <ErrorBoundry>
          <Searchbox searchfunction={this.onsearchfunction}/>
          </ErrorBoundry>
        </div>
            
    ) :
        (
      
          <div className="tc">
          <h1>RoboFriends</h1>
          <Searchbox searchfunction={this.onsearchfunction}/>
           <Scroll>
             <ErrorBoundry>
              <Robocardlist robots={filteredrobots}/>
            </ErrorBoundry>
          </Scroll>
          </div>
          
     
        )

  }
}

export default App;
