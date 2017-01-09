/**
 * Created by irfan on 01/01/2017.
 */
import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component{
  constructor(){
    super();
  }

  render(){
    return <span><b>Hello React!</b></span>
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));