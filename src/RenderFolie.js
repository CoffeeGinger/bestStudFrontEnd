import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MarkdownRender from './MarkdownRender';

function RenderFolie(props) {
  return (
    <div>
      <Paper
        style={{margin: "5%", height: "20em", width: "40%", float: "left"}}
        zDepth={3}>
        <MarkdownRender inhalt={props.inhalt} />
      </Paper>
    </div>
  );
}

export default RenderFolie;
