import React from "react";
import styled from "styled-components";

export default class H2Tag extends React.Component {
    render() {
        const {value, styles} = this.props;
        const H2 = styled.h2` 
            ${styles} 
        `;
        return ( <H2>{value}</H2> );
    }
} 