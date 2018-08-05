import React from 'react';
import marked from 'marked';

// Markdown Platzhalter
class MarkdownRender extends React.Component {
  getMarkdown() {
    var rawMarkdown = marked(this.props.inhalt, {sanitize: true});
    return {__html: rawMarkdown};
  }
  render() {
    //evtl gefährlich
    return <div dangerouslySetInnerHTML={this.getMarkdown()} />;
  }
}

export default MarkdownRender;
