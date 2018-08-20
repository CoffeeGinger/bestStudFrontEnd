import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContendAdd from 'material-ui/svg-icons/content/add';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';
import "./Presentation.css"


import RenderFolie from './RenderFolie'
import PraesentationFolie from './PraesentationFolie'
import Chatroom from './Chatroom'
import Facecam from './Facecam'
import FolienGrid from './FolienGrid'

class PraesentationsSicht extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentFolie: 0,
    };

    this.onClick=this.onClick.bind(this);
  }

  onClick = (value) => {
    this.setState({currentFolie: value});
  };

  render() {

    return (

      <div id ="PresentationView">
        <div class="leftColumn">
            <FolienGrid 
              folien={this.props.folien}
              onClick = {this.onClick}
            />
        </div>
        <div class="midColumn">
            <PraesentationFolie 
              inhalt={null}/>
        </div>
        <div className="rightColumn">
          <Facecam />
        </div>
      </div>
    );
  }
}

export default PraesentationsSicht;
