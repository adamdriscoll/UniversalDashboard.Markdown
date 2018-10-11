import React from "react";
import styled from "styled-components";

export default class Paragraph extends React.Component {
    render() {
        const {value, styles} = this.props;
        const P = styled.p` 
            ${styles} 
        `;
        return ( <P>{value}</P> );
    }
} 