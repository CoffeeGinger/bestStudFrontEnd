import React from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import "./Presentation.css"

const styles = {

}

const tilesData = []; //tbd

function FolienGrid(props) {

  // const expFolien = props.folien.map( (n, index) =>
  //   <div  key={index}>
  //     <ListItem
  //       primaryText={"Folie " + (index + 1)}
  //       leftIcon={<ContentInbox />}
  //       onClick={()=> props.onClick(index)}
  //     />
  //   </div> );

  return (
      <div style={{height: "inherit"}}>
      <Paper id="FolienGrid" zDepth={3}
        style={{maxHeight: "60em", overflow: 'auto'}}>
        <List>
          { null }
       </List>
      </Paper>
    </div>
  );
}

export default FolienGrid;
