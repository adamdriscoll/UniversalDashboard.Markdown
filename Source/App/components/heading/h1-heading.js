import React from "react";
import styled from "styled-components";

export default class H1Tag extends React.Component {
    render() {
        const {value, styles} = this.props;
        const H1 = styled.h1` 
            ${styles} 
        `;
        return ( <H1>{value}</H1> );
    }
} 