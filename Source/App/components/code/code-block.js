import React from "react";
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hljsStyle from 'react-syntax-highlighter/styles/hljs/github';


export default class CodeBlock extends React.Component {
    render() {
    const { language, value, showLineNumbers, customStyle } = this.props;
    return (
      <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} customStyle={customStyle} style={hljsStyle} >
        {value}
      </SyntaxHighlighter>
    );
  }
} 

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
    showLineNumbers:PropTypes.bool,
    customStyle:PropTypes.object,
    escapeHtml:PropTypes.bool
}

CodeBlock.defaultProps = {
    language: ''
}