import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/styles/hljs/github';


export class CodeBlock extends React.Component {
    render() {
    const { language, value, showLineNumbers, customStyle } = this.props;
    return (
      <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} customStyle={customStyle} style={style} >
        {value}
      </SyntaxHighlighter>
    );
  }
} 


export default class UDMarkdown extends React.Component {
    render(){      
        return(
            <div>
                <ReactMarkdown source={this.props.markdown} renderers={{
                    code: (code) => {return <CodeBlock value={code.value} language={code.language} showLineNumbers={this.props.showLineNumbers} customStyle={this.props.customStyle}/>}
                }} escapeHtml={this.props.escapeHtml} />
            </div>
        )
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
