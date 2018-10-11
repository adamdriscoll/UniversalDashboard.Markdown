import React from "react";
import styled from "styled-components";

export default class H3Tag extends React.Component {
    render() {
        const {value, styles} = this.props;
        const H3 = styled.h3` 
            ${styles} 
        `;
        return ( <H3>{value}</H3> );
    }
} 