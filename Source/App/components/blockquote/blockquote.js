import React from "react";
import styled from "styled-components";

export default class Blockquote extends React.Component {
    render() {
        const {value, styles} = this.props;
        const Bquote = styled.blockquote` 
            ${styles} 
        `;
        return ( <Bquote>{value}</Bquote> );
    }
} 